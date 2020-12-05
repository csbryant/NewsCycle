import React, { useEffect } from 'react';
import './_home.scss';
import Sidebar from '../../components/sidebar/sidebar';
import NewsCarousel from '../../components/newscarousel/newscarousel';

function Home() {
	return (
		<div className='home-grid'>
			<Sidebar />
			<NewsCarousel />
		</div>
	);
}

export default Home;
