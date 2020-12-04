import React, { useEffect } from 'react';
import './_home.scss';
import { Button } from 'react-bootstrap';

function Home() {
	return (
		<div>
			<h1>Hello</h1>
			<Button>This is a bootstrap button</Button>
			<h2>
				{' '}
				You are now inside a protected route, you can only access this if you are
				logged in.
			</h2>
		</div>
	);
}

export default Home;
