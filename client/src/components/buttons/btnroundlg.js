import React from 'react';
import { BiBookmark } from 'react-icons/bi';

const BtnRoundLg = () => {
	const styles = {
		bookmark: {
			fontSize: '2rem',
			backgroundColor: 'ecece',
			width: '80px',
			height: '80px',
			borderRadius: '50%',
			border: '2px solid black',
		},
	};
	return (
		<button style={styles.bookmark}>
			<BiBookmark />
		</button>
	);
};

export default BtnRoundLg;
