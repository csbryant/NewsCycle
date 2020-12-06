import React from 'react';
import { BiBookmark } from 'react-icons/bi';

const BtnRoundSm = ({ icon }) => {
	const styles = {
		bookmark: {
			fontSize: '1rem',
			backgroundColor: 'ecece',
			width: '40px',
			height: '40px',
			borderRadius: '50%',
			border: '2px solid black',
		},
	};
	return <button style={styles.bookmark}>{icon}</button>;
};

export default BtnRoundSm;
