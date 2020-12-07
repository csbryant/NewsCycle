import React, { useState, useEffect } from 'react';
import './_newscarousel.scss';
// import { staticData } from '../../utils/staticData';
import API from '../../utils/API';
import Carousel from 'react-elastic-carousel';
import ItemsCarousel from '../itemscarousel/itemscarousel';
import ActionBtn from '../buttons/actionbtn';
import MainArticle from '../mainarticle/mainarticle';

const NewsCarousel = ({ open }) => {
	const [topstories, setTopstories] = useState({
		topstories: [],
	});

	useEffect(() => {
		API.getTopStories()
			.then((res) => {
				setTopstories({
					topstories: res.data.results,
				});
				console.log(res.data.results);
			})
			.catch((err) => console.log(err));
	}, [topstories]);

	return (
		<Carousel pagination={false}>
			{topstories.topstories.map((item, index) => (
				<div
					className={open ? 'newsCarousel-grid' : 'newsCarousel-grid open'}
					key={index}
				>
					<ItemsCarousel background={item.multimedia[0].url} />
					<ActionBtn />
					<MainArticle title={item.title} abstract={item.abstract} />
				</div>
			))}
		</Carousel>
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
