import React from 'react';
import './_main.scss';
import Carousel from '../carousel/carousel';
import MainArticle from '../mainarticle/mainarticle';

export default function Main() {
	return (
		<div className='main-grid'>
			<div className='picture-background'>
				<Carousel />
			</div>
			<MainArticle />
		</div>
	);
}
