import React, { useEffect } from 'react';
import './_home.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from '../../components/sidebar/sidebar';

function Home() {
	return (
		<>
			<Sidebar />
		</>
	);
}

export default Home;
