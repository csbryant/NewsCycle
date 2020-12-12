import React, { useEffect, useState } from "react";
import { IoMdShareAlt } from "react-icons/io";
import { BiLink } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { Lightgrey, PrimaryColor, Opacity } from "../../styles/config";
import { SAVE_ARTICLE, LOADING } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";


const ActionBtn = ({ url, handleSaveArticle }) => {
	const [state, dispatch] = useStoreContext();
	// const changeBackground = (e) => {
	// 	let bg = e.target.style.backgroundColor;
	// 	bg = { PrimaryColor };
	// };

	//   useEffect(() => {
	//     handleSaveArticle();
	//   }, [state]);

	function hoverHandler(e) {
		e.target.style.background = `${PrimaryColor}`;
	}

	function nonHoverHandler(e) {
		e.target.style.background = `${Lightgrey}`;
	}


	const styles = {
		controls: {
			display: 'flex',
			justifyItems: 'center',
			alignItems: 'center',
		},


		smBtn: {
			borderRadius: "50%",
			width: "3rem",
			height: "3rem",
			border: `2px solid ${Lightgrey}`,
			opacity: `${Opacity}`,
		},


		lgBtn: {
			fontSize: '2rem',
			borderRadius: '50%',
			width: '6rem',
			height: '6rem',
			border: `2px solid ${Lightgrey}`,
			margin: '0 1rem',
		},


		icons: {
			fontSize: "1.5rem",
			padding: "0.1rem",
		},
	};


	return (
		<>
			<div style={styles.controls}>
				<div>
					<button
						style={styles.smBtn}
						onMouseEnter={hoverHandler}
						onMouseLeave={nonHoverHandler}
					>
						<IoMdShareAlt style={styles.icons} />
					</button>
				</div>

				<div>
					<button
						style={styles.lgBtn}
						onMouseEnter={hoverHandler}
						onMouseLeave={nonHoverHandler}
						onClick={handleSaveArticle}
					// disabled={state.loading}
					// type = "submit"
					>
						<BsBookmarkFill />
					</button>
				</div>

				<div>
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
		</>
		// </div>
	);

};

export default ActionBtn;
