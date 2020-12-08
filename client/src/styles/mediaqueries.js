import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 1200 });
	return isDesktop ? children : null;
};

const Tablet = ({ children }) => {
	const isTablet = useMediaQuery({ minWidth: 0, maxWidth: 1200 });
	return isTablet ? children : null;
};

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile ? children : null;
};

export { Desktop, Tablet, Mobile };
