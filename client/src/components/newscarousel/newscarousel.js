import React, { useState } from 'react';
import { staticData } from '../../utils/staticData';
import Carousel from 'react-elastic-carousel';
import ItemsCarousel from '../itemscarousel/itemscarousel';
import MainArticle from '../mainarticle/mainarticle';

const NewsCarousel = () => {
	return (
		<Carousel pagination={false}>
			{staticData.map((item, index) => (
				<>
					<ItemsCarousel key={index} background={item.multimedia[0].url} />
					<MainArticle title={item.title} abstract={item.abstract} />
				</>
			))}
		</Carousel>
	);
};

export default NewsCarousel;
