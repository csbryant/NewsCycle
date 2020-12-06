import React, { useState } from 'react';
import './_newscarousel.scss';
import { staticData } from '../../utils/staticData';
import Carousel from 'react-elastic-carousel';
import ItemsCarousel from '../itemscarousel/itemscarousel';
import ActionBtn from '../buttons/actionbtn';
import MainArticle from '../mainarticle/mainarticle';

const NewsCarousel = () => {
	return (
		<Carousel pagination={false} className='rec rec-arrow'>
			{staticData.map((item, index) => (
				<div className='newsCarousel-grid' key={index}>
					<ItemsCarousel background={item.multimedia[0].url} />
					<ActionBtn />
					<MainArticle title={item.title} abstract={item.abstract} />
				</div>
			))}
		</Carousel>
	);
};

export default NewsCarousel;
