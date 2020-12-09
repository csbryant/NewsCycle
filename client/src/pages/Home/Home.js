import React, { useState } from 'react';
import './_home.scss';
import Sidebar from '../../components/sidebar/sidebar';
import NewsCarousel from '../../components/newscarousel/newscarousel';
import { Desktop, Tablet, Mobile } from '../../styles/mediaqueries';
import { BiMenuAltLeft } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';

function Home() {
	const [click, setClick] = useState({ clicked: true });
	const handleClick = () => {
		setClick({ clicked: !click.clicked });
	};

	return (
		<div>
			<Desktop>
				<div className='desktop-grid'>
					<Sidebar />
					<NewsCarousel />
				</div>
			</Desktop>
			<Tablet>
				{click.clicked ? (
					<div>
						<BiMenuAltLeft onClick={handleClick} className='menu-btn' />
						<NewsCarousel />
					</div>
				) : (
					<div>
						<GrFormClose onClick={handleClick} className='menu-btn onsidebar' />
						<Sidebar />
					</div>
				)}
			</Tablet>
			{/* <Mobile>Mobile</Mobile> */}
		</div>
	);
}

export default Home;
