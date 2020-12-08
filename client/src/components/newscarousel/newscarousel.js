import React, { useState, useEffect } from 'react';
import './_newscarousel.scss';
import { staticData } from '../../utils/staticData';
import API from '../../utils/API';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import ActionBtn from '../buttons/actionbtn';
import Axios from 'axios';

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
			backgroundImage: `url(${data && data[count].multimedia[0].url})`,
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
							<button
								style={styles.chevron}
								onClick={() => {
									count < 0 ? setCount(data.length - 1) : setCount(count - 1);
								}}
							>
								<BsChevronCompactLeft />
							</button>
							<button style={styles.chevron} onClick={() => setCount(count + 1)}>
								<BsChevronCompactRight />
							</button>
						</div>

						<div>
							<ActionBtn />
						</div>

						<div style={styles.content}>
							<h3>{data && data[count].title}</h3>
							<br />
							<p>{data && data[count].abstract}</p>
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
