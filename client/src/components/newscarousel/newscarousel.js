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
	// Getting Top Stories from API

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const result = await API.getTopStories();
	// 		// console.log(result.data.results);
	// 		setStories(result.data.results);
	// 	};

	// 	fetchData();
	// }, [setStories]);

	// Navigating Top Stories Index
	const [count, setCount] = useState(0);

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
						<Carousel.Item>
							<div
								key={index}
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
									<ActionBtn />
								</div>

								{/* <div style={styles.newsCarousel}>
									<div style={styles.bgImage}></div>
									<div>
										<ActionBtn />
									</div>
									<div style={styles.content}>
										<h3>{article.title}</h3>
										<br />
										<p>{article.abstract}</p>
									</div>
								</div> */}
							</div>
						</Carousel.Item>
					);
				})}
		</Carousel>

		// <div>
		// 	{isLoading ? (
		// 		<div>...Loading</div>
		// 	) : (
		// 		<div style={styles.article}>
		// 			<div style={styles.newsCarousel}>
		// 				<div style={styles.bgImage}>
		// 					<button
		// 						style={styles.chevron}
		// 						onClick={() => {
		// 							count < 0 ? setCount(data.length - 1) : setCount(count - 1);
		// 						}}
		// 					>
		// 						<BsChevronCompactLeft />
		// 					</button>
		// 					<button style={styles.chevron} onClick={() => setCount(count + 1)}>
		// 						<BsChevronCompactRight />
		// 					</button>
		// 				</div>

		// 				<div>
		// 					<ActionBtn />
		// 				</div>

		// 				<div style={styles.content}>
		// 					<h3>{data && data[count].title}</h3>
		// 					<br />
		// 					<p>{data && data[count].abstract}</p>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	)}
		// </div>
	);
};

export default NewsCarousel;

// class NewsCarousel extends React.Component {

// 	// const [topStories, settopStories] = useState ({
// 	// 	topStories:[],
// 	// })

// 	state = {
// 		topStories: [],
// 	}

// 	//component did mount, fire off api call
// 	componentDidMount() {
// 		API.getTopStories()
// 			.then(res => {
// 				this.setState({
// 					topStories: res.data.results,
// 				});
// 				console.log(res.data.results)
// 			});
// 	}

// 	render() {
// 		return (
// 			<Carousel pagination={false} className='rec rec-arrow'>
// 				{this.state.topStories.map((item, index) => (
// 					<div className='newsCarousel-grid' key={index}>
// 						<ItemsCarousel background={item.multimedia[0].url} />
// 						<ActionBtn />
// 						<MainArticle title={item.title} abstract={item.abstract} />
// 					</div>
// 				))}
// 			</Carousel>
// 		);
// 	}
// }
