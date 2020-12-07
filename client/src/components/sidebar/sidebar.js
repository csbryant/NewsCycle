import React, { useState } from 'react';
import './_sidebar.scss';
import ArticleList from '../../components/articlelist/articlelist';
import { staticData } from '../../utils/staticData';

const Sidebar = ({ open }) => {
	return (
		<header>
			<div className={open ? 'sidenav' : 'sidenav open'}>
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
