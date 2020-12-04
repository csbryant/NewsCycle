import React, { useEffect } from 'react';
import './_home.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SideNav, {
	Toggle,
	Nav,
	NavItem,
	NavIcon,
	NavText,
} from '@trendmicro/react-sidenav';

function Home() {
	return (
		<>
			<div>This is the homepage</div>
		</>
	);
}

export default Home;
