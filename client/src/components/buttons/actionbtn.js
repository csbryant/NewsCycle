import React from 'react';
import BtnRoundSm from './btnroundsm';
import BtnRoundLg from './btnroundlg';
import { BiLink } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';

const ActionBtn = () => {
	const styles = {
		// actions: {
		// 	position: 'absolute',
		// 	bottom: '40px',
		// 	width: '100%',
		// 	backgroundColor: 'red',
		// },

		btnContainer: {
			display: 'flex',
			padding: '0 20rem',
			// marginTop: '1rem',
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'space-evenly',
			alignItems: 'center',
		},
	};

	return (
		// <div style={styles.actions}>
		<div style={styles.btnContainer}>
			<div style={styles.pddingBtn}>
				<a href=''>
					<BtnRoundSm icon={<RiShareForwardLine />} />
				</a>
			</div>
			<div style={styles.pddingBtn}>
				<BtnRoundLg />
			</div>
			<div style={styles.pddingBtn}>
				<a href=''>
					<BtnRoundSm icon={<BiLink />} />
				</a>
			</div>
		</div>
		// </div>
	);
};

export default ActionBtn;
