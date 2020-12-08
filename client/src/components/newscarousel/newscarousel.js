import React, { useState, useEffect } from 'react';
import './_newscarousel.scss';
import { staticData } from '../../utils/staticData';
import API from '../../utils/API';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import ActionBtn from '../buttons/actionbtn';
import Axios from 'axios';

const NewsCarousel = () => {
	// Getting Top Stories from API
	const [stories, setStories] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			// You can await here
			const response = await API.getTopStories();
			const data = response.data.results;
			console.log(data);
			setStories(data);
			setLoading(false);
		}
		fetchData();
	}, []);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const result = await API.getTopStories();
	// 		// console.log(result.data.results);
	// 		setStories(result.data.results);
	// 	};

	// 	fetchData();
	// }, [setStories]);

	// Navigating Top Stories Index
	const [index, setIndex] = useState({
		carouselIndex: 0,
	});

	const handleClick = () => {
		setIndex({ carouselIndex: index.carouselIndex + 1 });
	};

	// const filteredArr = stories.filter((story, i) => {
	// 	return i === index.carouselIndex;
	// });

	// const z = filteredArr[0];

	const styles = {
		article: {
			padding: '0rem',
		},

		newsCarousel: {
			height: '100vh',
			width: '100%',
			display: 'grid',
			gridTemplateRows: '3fr 1fr 3fr',
		},

		bgImage: {
			backgroundImage: `url(${
				stories && stories[index.carouselIndex].multimedia[0].url
			})`,
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: '1rem',
		},

		chevron: {
			background: 'white',
			borderRadius: '50%',
			fontSize: '1.5rem',
			fontWeight: 'bold',
			border: 'none',
			color: 'grey',
		},

		content: {
			padding: '1rem',
			textAlign: 'center',
		},
	};

	return (
		<div>
			{isLoading ? (
				<div>...Loading</div>
			) : (
				<div style={styles.article}>
					<div style={styles.newsCarousel}>
						<div style={styles.bgImage}>
							<button>Back</button>
							<button style={styles.chevron} onClick={handleClick}>
								<BsChevronCompactRight />
							</button>
						</div>

						<div>
							<ActionBtn />
						</div>

						<div style={styles.content}>
							<h3>{stories && stories[index.carouselIndex].title}</h3>
							<br />
							<p>{stories && stories[index.carouselIndex].abstract}</p>
						</div>
					</div>
				</div>
			)}
		</div>
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
