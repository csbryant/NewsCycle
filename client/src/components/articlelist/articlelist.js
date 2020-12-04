import React from 'react';
import './_articlelist.scss';
import { BiLink } from 'react-icons/bi';

const ArticleList = ({ title, url, backgroundImageUrl }) => {
	return (
		<div className='article'>
			<span className='article_picture'>
				<img src={backgroundImageUrl} alt='' />
			</span>
			<div className='article_title'>{title}</div>

			<div className='article_icon'>
				<a href={url} target='blank'>
					<BiLink />
				</a>
			</div>
		</div>
	);
};

export default ArticleList;
