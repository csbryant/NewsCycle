import React, { useState } from 'react';
import './_sidebar.scss';
import ArticleList from '../../components/articlelist/articlelist';
import { staticData } from '../../utils/staticData';

const Sidebar = () => {
	return (
		<header className='shadow'>
			<div className='sidenav'>
				<ul>
					{staticData.map((article, index) => {
						return (
							<ArticleList
								title={article.title}
								url={article.url}
								key={index}
								backgroundImageUrl={article.multimedia[1].url}
							/>
						);
					})}
				</ul>
			</div>
		</header>
	);
};

export default Sidebar;
