import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
	width: 1260px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledLink = styled(NavLink)`
	color: #e4e4e5;

	text-decoration: none;
	font-weight: 600;
	font-size: 20px;

	&:not(:last-child) {
		margin-right: 20px;
	}
	&.active {
		color: #ffa500;
	}
`;

const WrapperLink = styled.div`
	display: flex;
	column-gap: 50px;
`;

export { Nav, StyledLink, WrapperLink };
