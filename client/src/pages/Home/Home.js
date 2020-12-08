import React, { useState } from 'react';
import './_home.scss';
import Sidebar from '../../components/sidebar/sidebar';
import NewsCarousel from '../../components/newscarousel/newscarousel';
import { useMediaQuery } from 'react-responsive';
import { Desktop, Tablet, Mobile } from '../../styles/mediaqueries';
import { BiMenuAltLeft } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';

// const Desktop = ({ children }) => {
// 	const isDesktop = useMediaQuery({ minWidth: 992 });
// 	return isDesktop ? children : null;
// };

// const Tablet = ({ children }) => {
// 	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
// 	return isTablet ? children : null;
// };
// const Mobile = ({ children }) => {
// 	const isMobile = useMediaQuery({ maxWidth: 767 });
// 	return isMobile ? children : null;
// };

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
						<BiMenuAltLeft onClick={handleClick} className='menu-btn' />{' '}
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
