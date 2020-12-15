import React, { useState } from 'react';
import './_home.scss';
import Sidebar from '../../components/sidebar/sidebar';
import NewsCarousel from '../../components/newscarousel/newscarousel';
import { Desktop, Tablet } from '../../styles/mediaqueries';
import { BiMenuAltLeft } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';

function Home() {
	const [click, setClick] = useState({ clicked: true });
	const handleClick = () => {
		setClick({ clicked: !click.clicked });
	};

	const styles = {
		gridMobile: {
			display: 'grid',
			gridTemplateRows: '6% 94%',
			overflow: 'hidden',
		},
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
					<div style={styles.gridMobile}>
						<div>
							<BiMenuAltLeft onClick={handleClick} className='menu-btn' />
						</div>
						<NewsCarousel />
					</div>
				) : (
					<div style={styles.gridMobile}>
						<div>
							<GrFormClose onClick={handleClick} className='menu-btn onsidebar' />
						</div>
						<Sidebar />
					</div>
				)}
			</Tablet>
			{/* <Mobile>Mobile</Mobile> */}
		</div>
	);
}

export default Home;
