import React, { useState } from 'react';
import { IoMdShareAlt } from 'react-icons/io';
import { BiLink } from 'react-icons/bi';
import { BsBookmarkFill } from 'react-icons/bs';
import { Lightgrey, PrimaryColor, Opacity } from '../../styles/config';


const ActionBtn = ({ url }) => {
	// const changeBackground = (e) => {
	// 	let bg = e.target.style.backgroundColor;
	// 	bg = { PrimaryColor };
	// };

	function hoverHandler(e) {
		e.target.style.background = `${PrimaryColor}`;
	}

	function nonHoverHandler(e) {
		e.target.style.background = `${Lightgrey}`;
	}

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
		},

		lgBtn: {
			fontSize: '2rem',
			borderRadius: '50%',
			width: '6rem',
			height: '6rem',
			border: `2px solid ${Lightgrey}`,
		},

		icons: {
			fontSize: '1.5rem',
			padding: '0.1rem',
		},
	};

	return (
		<div>
			<div style={styles.controls}>
				<button
					style={styles.smBtn}
					onMouseEnter={hoverHandler}
					onMouseLeave={nonHoverHandler}
				>
					<IoMdShareAlt style={styles.icons} />
				</button>
				<button
					style={styles.lgBtn}
					onMouseEnter={hoverHandler}
					onMouseLeave={nonHoverHandler}
					// disabled={state.loading}
					// type = "submit"
				>
					<BsBookmarkFill />
				</button>
				<a href={url}>
					<button
						style={styles.smBtn}
						onMouseEnter={hoverHandler}
						onMouseLeave={nonHoverHandler}
					>
						<BiLink style={styles.icons} />
					</button>
				</a>
			</div>
		</div>
		// </div>
	);
};

export default ActionBtn;
