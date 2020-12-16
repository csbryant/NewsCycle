import React, { useEffect, useState, useRef } from 'react';
import { IoMdShareAlt } from 'react-icons/io';
import { BiLink } from 'react-icons/bi';
import { BsBookmarkFill } from 'react-icons/bs';
import { Lightgrey, PrimaryColor, Opacity } from '../../styles/config';
import { SAVE_ARTICLE, LOADING } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import API from '../../utils/API';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import { Modal, Button } from 'react-bootstrap';
import {
	FacebookShareButton,
	FacebookMessengerShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	PinterestShareButton,
	RedditShareButton,
	EmailShareButton,
	FacebookMessengerIcon,
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
	PinterestIcon,
	EmailIcon,
	RedditIcon,
} from 'react-share';

const ActionBtn = ({ url, handleSaveArticle }) => {
	// const [state, dispatch] = useStoreContext();
	// const changeBackground = (e) => {
	// 	let bg = e.target.style.backgroundColor;
	// 	bg = { PrimaryColor };
	// };

	//   useEffect(() => {
	//     handleSaveArticle();
	//   }, [state]);

	// function hoverHandler(e) {
	//   e.target.style.background = `${PrimaryColor}`;
	// }

	// function nonHoverHandler(e) {
	//   e.target.style.background = `${Lightgrey}`;
	// }

	// const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const styles = {
		controls: {
			display: 'flex',
			justifyItems: 'center',
			alignItems: 'center',
		},

		smBtn: {
			borderRadius: '50%',
			width: '3rem',
			height: '3rem',
			border: `1px solid white`,
			background: `${Lightgrey}`,
		},

		lgBtn: {
			fontSize: '2rem',
			borderRadius: '50%',
			width: '6rem',
			height: '6rem',
			border: `2px solid white`,
			margin: '0 1rem',
			background: `${Lightgrey}`,
		},

		icons: {
			fontSize: '1.5rem',
			padding: '0.1rem',
		},

		modalContent: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	};

	return (
		<>
			<div style={styles.controls}>
				<div ref={ref}>
					<button
						style={styles.smBtn}
						// onMouseEnter={hoverHandler}
						// onMouseLeave={nonHoverHandler}
						onClick={handleShow}
					>
						<IoMdShareAlt style={styles.icons} />
					</button>

					<Modal
						show={show}
						onHide={handleClose}
						size='sm'
						aria-labelledby='example-modal-sizes-title-sm'
						centered
					>
						<Modal.Header closeButton>
							<Modal.Title>Share</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<div style={styles.modalContent}>
								<FacebookShareButton url={url}>
									<FacebookIcon size={36} />
								</FacebookShareButton>

								<FacebookMessengerShareButton url={url}>
									<FacebookMessengerIcon size={36} />
								</FacebookMessengerShareButton>

								<TwitterShareButton url={url}>
									<TwitterIcon size={36} />
								</TwitterShareButton>

								<LinkedinShareButton url={url}>
									<LinkedinIcon size={36} />
								</LinkedinShareButton>

								<PinterestShareButton url={url}>
									<PinterestIcon size={36} />
								</PinterestShareButton>

								<RedditShareButton url={url}>
									<RedditIcon size={36} />
								</RedditShareButton>

								<EmailShareButton url={url}>
									<EmailIcon size={36} />
								</EmailShareButton>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<Button variant='secondary' onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
					{/* <Overlay
						show={show}
						target={target}
						placement='bottom'
						container={ref.current}
						containerPadding={20}
					>

					</Overlay> */}
				</div>

				<div>
					<button
						style={styles.lgBtn}
						// onMouseEnter={hoverHandler}
						// onMouseLeave={nonHoverHandler}
						onClick={handleSaveArticle}
						// disabled={state.loading}
						// type = "submit"
					>
						<BsBookmarkFill />
					</button>
				</div>

				<div>
					<a href={url} target='blank'>
						<button
							style={styles.smBtn}
							// onMouseEnter={hoverHandler}
							// onMouseLeave={nonHoverHandler}
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
