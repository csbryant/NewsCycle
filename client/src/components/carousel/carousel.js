import React from 'react';
import './_carousel.scss';
import { staticData } from '../../utils/staticData';
import { FaChevronRight } from 'react-icons/fa';

const Carousel = () => {
	const background = staticData[0].multimedia[0].url;

	const styles = {
		header: {
			backgroundImage: `url(${background})`,
			height: '100%',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
		},

		content: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			height: '100%',
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
		},
		nextBtn: {
			position: 'fixed',
			right: '10%',
			top: '15%',
			color: 'white',
			fontSize: '46px',
			cursor: 'pointer',
		},
	};
	return (
		<div style={styles.header}>
			<div style={styles.content}>
				<img
					src={background}
					alt=''
					style={styles.picture}
					width='435'
					height='290'
				/>
				<div className='actions'>actions</div>
			</div>
			<div style={styles.nextBtn}>
				<FaChevronRight />
			</div>
		</div>
	);
};

export default Carousel;
