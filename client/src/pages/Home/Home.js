import React, { useEffect } from 'react';
import './_home.scss';
import Sidebar from '../../components/sidebar/sidebar';
import Main from '../../components/main/main';

function Home() {
	return (
		<div className='home-grid'>
			<Sidebar />
			<Main />
		</div>
	);
}

export default Home;
