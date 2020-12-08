import React, { useState } from 'react';
import { staticData } from '../../utils/staticData';

const ItemsCarousel = ({ background }) => {
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
			backgroundColor: 'rgba(0, 0, 0, 0.6)',
		},
	};

	return (
		<div style={styles.header}>
			<div style={styles.content}>
				<img src={background} alt='' width='435' height='290' />
			</div>
		</div>
	);
};

export default ItemsCarousel;
