import React, { useState, useEffect } from 'react';
import './_newscarousel.scss';
import { staticData } from '../../utils/staticData';
import API from '../../utils/API';
import ActionBtn from '../buttons/actionbtn';
import { Carousel } from 'react-bootstrap';
import { UPDATE_ARTICLES, LOADING } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import { useMediaQuery } from 'react-responsive';

const NewsCarousel = () => {
	const [state, dispatch] = useStoreContext();
	const [toggle, setToggle] = useState(true);

	const getTopStories = () => {
		dispatch({ type: LOADING });
		API.getTopStories()
			.then((results) => {
				dispatch({
					type: UPDATE_ARTICLES,
					payload: results.data.results,
				});
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getTopStories();
	}, []);

	const isDesktopOrLaptop = window.matchMedia('(min-width: 1200px)');

	console.log(isDesktopOrLaptop.matches);

	const styles = {
		cardDesktop: {
			backgroundColor: 'white',
			width: '55%',
			opacity: '0.96',
			borderRadius: '0.6rem',
			position: 'relative',
			top: '50px',
		},

		cardMobile: {
			backgroundColor: 'white',
			width: '90%',
			opacity: '0.96',
			borderRadius: '0.6rem',
			position: 'relative',
			top: '50px',
		},

		content: {
			padding: '2rem 2rem 4rem 2rem',
			textAlign: 'center',
		},

		actionBtn: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'relative',
			// bottom: '50px',
		},
	};

	return (
		<Carousel interval={null} touch={true}>
			{state.articles &&
				state.articles.map((article, index) => {
					return (
						<Carousel.Item key={index}>
							<div
								style={{
									backgroundImage: `url(${article.multimedia[0].url})`,
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
									width: '100%',
									height: '100vh',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<div
									style={
										isDesktopOrLaptop.matches ? styles.cardDesktop : styles.cardMobile
									}
								>
									<div style={styles.content}>
										<h1> {article.title}</h1>
										<br />
										<p>{article.abstract}</p>
									</div>
								</div>
								<div style={styles.actionBtn}>
									<ActionBtn url={article.url} />
								</div>
							</div>
						</Carousel.Item>
					);
				})}
		</Carousel>
	);
};

export default NewsCarousel;
