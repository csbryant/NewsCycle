
import React, { useState, useEffect } from 'react';
import './_newscarousel.scss';
import { staticData } from '../../utils/staticData';
import API from '../../utils/API';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import ActionBtn from '../buttons/actionbtn';
import { Carousel } from 'react-bootstrap';


const useFetch = () => {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			// You can await here
			const response = await API.getTopStories();
			const data = response.data.results;
			console.log(data);
			setData(data);
			setLoading(false);
		}
		fetchData();
	}, []);

	return { data, isLoading };
};

const NewsCarousel = () => {

	const { data, isLoading } = useFetch();

	console.log(data);

	const styles = {
		card: {
			backgroundColor: 'white',
			width: '55%',
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
			{data &&
				data.map((article, index) => {
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
								<div style={styles.card}>
									<div style={styles.content}>
										<h1> {article.title}</h1>
										<br />
										<p>{article.abstract}</p>
									</div>
								</div>
								<div style={styles.actionBtn}>
									<ActionBtn
										url={article.url}
									/>
								</div>
							</div>
						</Carousel.Item>
					);
				})}
		</Carousel>
	);

};

export default NewsCarousel;
