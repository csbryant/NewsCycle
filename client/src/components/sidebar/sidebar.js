import React, { useEffect, useState } from 'react';
import './_sidebar.scss';
import ArticleList from '../../components/articlelist/articlelist';
// import { staticData } from '../../utils/staticData';
import { useStoreContext } from '../../utils/GlobalState';
import {
	REMOVE_FAVORITE,
	LOADING,
	UPDATE_FAVORITES,
} from '../../utils/actions';
import API from '../../utils/API';
import { Button } from 'react-bootstrap';

const Sidebar = () => {
	const [state, dispatch] = useStoreContext();

	const getFavorites = () => {
		dispatch({ type: LOADING });
		API.getFavorites()
			.then((result) => {
				console.log(result);
				dispatch({
					type: UPDATE_FAVORITES,
					payload: result.data.favorites,
				});
			})
			.catch((err) => console.log(err));
	};

	const removeFromFavorites = (id) => {
		dispatch({
			type: REMOVE_FAVORITE,
			payload: { _id: id },
		});
	};

	useEffect(() => {
		getFavorites();
	}, [state.favorites]);

	return (
		<header className='shadow'>
			<div className='sidenav'>
				<Button variant='info'>
					<a href='/'>Log Out</a>
				</Button>
				<ul>
					{state.favorites.map((article, index) => {
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
