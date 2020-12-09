import React, { useState } from 'react';
import { IoMdShareAlt } from 'react-icons/io';
import { BiLink } from 'react-icons/bi';
import { BsBookmarkFill } from 'react-icons/bs';
import { Lightgrey, PrimaryColor, Red, Opacity } from '../../styles/config';

const ActionBtn = () => {
	// const changeBackground = (e) => {
	// 	let bg = e.target.style.backgroundColor;
	// 	bg = { PrimaryColor };
	// };

	const styles = {
		controls: {
			// backgroundColor: 'white',
			display: 'grid',
			gridTemplateColumns: '0.3fr 1fr 0.3fr',
			columnGap: '1rem',
			justifyItems: 'center',
			alignItems: 'center',
			// opacity: '0',
		},

		smBtn: {
			borderRadius: '50%',
			width: '3rem',
			height: '3rem',
			border: `2px solid ${Lightgrey}`,
			opacity: `${Opacity}`,
			backgroundColor: `${Lightgrey}`,
		},

		lgBtn: {
			fontSize: '2rem',
			borderRadius: '50%',
			width: '6rem',
			height: '6rem',
			border: `2px solid ${Lightgrey}`,
			background: 'white',
		},

		icons: {
			fontSize: '1.5rem',
			padding: '0.1rem',
		},
	};

	return (
		<div>
			<div style={styles.controls}>
				<button style={styles.smBtn}>
					<IoMdShareAlt style={styles.icons} />
				</button>
				<button style={styles.lgBtn}>
					<BsBookmarkFill />
				</button>
				<button style={styles.smBtn}>
					<BiLink style={styles.icons} />
				</button>
			</div>
		</div>
		// </div>
	);
};

export default ActionBtn;
