import React, { useState } from 'react';
import './_home.scss';
import Sidebar from '../../components/sidebar/sidebar';
import NewsCarousel from '../../components/newscarousel/newscarousel';
import { UserProvider, useUserContext } from '../../context/userContext';
import { HiMenuAlt4 } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';

console.log(useUserContext);

function Home() {
	const [click, setClick] = useState({ clicked: false });

	const handleClick = () => {
		setClick({ clicked: !click.clicked });
	};

	const styles = {
		icons: {
			height: '36px',
			width: '36px',
			margin: '1rem 0rem 0rem 1rem',
		},
	};

	return (
		<div className='home-grid'>
			<div className='menu-btn' onClick={handleClick}>
				{click.clicked ? (
					<GrFormClose style={styles.icons} />
				) : (
					<HiMenuAlt4 style={styles.icons} />
				)}
			</div>
			<Sidebar open={click.clicked} />
			<NewsCarousel />
		</div>
	);
}

export default Home;
