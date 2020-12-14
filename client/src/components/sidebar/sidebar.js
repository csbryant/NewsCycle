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

const Sidebar = () => {
	const [state, dispatch] = useStoreContext();
	const [favart, setfavArt] = useState([]);

	const getFavorites = () => {
		dispatch({ type: LOADING });
		API.getFavorites()
			.then((result) => {
				setfavArt(result.data.favorites);
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
	}, [favart]);

	console.log(favart);

	const styles = {
		logoutSection: {
			display: 'flex',
			padding: '1rem 1rem 2rem 1rem',
			background: 'white',
			borderBottom: '1px solid #ececec',
		},
		logoutBtn: {
			background: '#438157',
			border: 'none',
			padding: '1rem 2rem',
			borderRadius: '4px',
			color: 'white',
			boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
		},
		logoutA: {
			color: 'white',
		},
	};

	return (
		<header className='shadow'>
			<div className='sidenav'>
				<div style={styles.logoutSection}>
					<button style={styles.logoutBtn}>
						<a style={styles.logoutA} href='/'>
							LOG OUT
						</a>
					</button>
				</div>
				<ul>
					{favart.map((article, index) => {
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
