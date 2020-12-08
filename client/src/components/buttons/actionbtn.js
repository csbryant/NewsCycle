import React from 'react';

const ActionBtn = () => {
	const styles = {
		controls: {
			backgroundColor: 'red',
			position: 'relative',
			bottom: '30%',
			// display: 'grid',
			// gridTemplateColumns: '0.5fr 1fr 0.5fr',
			columnGap: '1rem',
			padding: '0rem 1rem',
			// opacity: '0',
			zIndex: '1',
		},
	};

	return (
		<div>
			<div style={styles.controls}>
				<button style={styles.smBtn}>First button</button>
				<button>Second button</button>
				<button style={styles.smBtn}>Second button</button>
			</div>
		</div>
		// </div>
	);
};

export default ActionBtn;
