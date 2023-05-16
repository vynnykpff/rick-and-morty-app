import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

// Navigate
const Nav = styled.nav`
	width: 1260px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

// Logo
const StyledLogoImage = styled.img`
	display: flex;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
	border-radius: 50%;
`;

// Navigate Links
const StyledLink = styled(NavLink)`
	color: var(--link-color);
	text-decoration: none;
	font-size: 20px;
	font-weight: 700;
	letter-spacing: 1.2px;
	transition: color 0.2s ease;

	&.active {
		text-decoration: none;
		color: var(--accent-color);
	}
`;
// Navigate Links Item
const StyledLinkItem = styled.span`
	transition: all 0.3s ease;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 3px;
		bottom: -5px;
		left: 0;
		border-radius: 10px;
		background-color: var(--text-color);
		transform-origin: bottom right;
		transition: transform 0.3s ease-out;
	}

	&:hover::after {
		transform: scale(1);
		transform-origin: bottom left;
	}
`;

// Wrapper Link
const StyledWrapperLink = styled.div`
	display: flex;
	column-gap: 60px;
`;

const StyledWrapperLinkElement = styled.div`
	display: flex;
	column-gap: 20px;
`;

// Theme block
const StyledThemeLink = styled.span`
	font-size: 20px;
	font-weight: 600;
	color: var(--text-color);
	cursor: pointer;
`;

export {
	Nav,
	StyledLink,
	StyledWrapperLink,
	StyledWrapperLinkElement,
	StyledThemeLink,
	StyledLogoImage,
	StyledLinkItem,
};
