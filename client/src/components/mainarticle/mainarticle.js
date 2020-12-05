import React from 'react';
import './_mainarticle.scss';
import { staticData } from '../../utils/staticData';

const MainArticle = () => {
	const title = staticData[0].title;
	const description = staticData[0].abstract;

	return (
		<div className='main-article'>
			<div className='main-article_title'>
				<h1>{title}</h1>
			</div>
			<div className='main-article_content'>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default MainArticle;
