import React from 'react';
import { IoMdShareAlt } from 'react-icons/io';
import { BiLink } from 'react-icons/bi';

const ActionBtn = () => {
	const styles = {
		controls: {
			backgroundColor: 'red',
			display: 'grid',
			gridTemplateColumns: '0.3fr 1fr 0.3fr',
			columnGap: '1rem',
			// opacity: '0',
		},

		smBtn: {
			borderRadius: '50%',
			width: '3rem',
			height: '3rem',
			border: '1 px solid red',
			border: 'none',
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
				<button>Second button</button>
				<button style={styles.smBtn}>
					<BiLink style={styles.icons} />
				</button>
			</div>
		</div>
		// </div>
	);
};

export default ActionBtn;
