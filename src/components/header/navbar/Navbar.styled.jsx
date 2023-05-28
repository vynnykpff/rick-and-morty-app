import styled from '@emotion/styled';
import {NavLink} from 'react-router-dom';
import {mediaQueries} from "../../../utils/media-queries.jsx";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
`;

const MobileNav = styled.div`
  display: none;

  @media (max-width: ${mediaQueries.tablet}) {
    display: block;
    cursor: pointer;
    z-index: 10;
`

const StyledLogoImage = styled.img`
  display: flex;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-radius: 50%;
`

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
`
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

  @media (max-width: 800px) {
	  font-size: 25px;
  }
`;

const StyledWrapperLink = styled.div`
  display: flex;
	align-items: center;
	justify-content: center;
  column-gap: 60px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
	  align-items: center;
	  row-gap: 50px;
    position: fixed;
    left: -100%;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background: var(--background-color);
    z-index: 10;
    transition: left .5s;

    &.active {
      left: 0;
    }
  }
`;

const StyledWrapperLinkElement = styled.div`
  display: flex;
  column-gap: 20px;
`;

const StyledThemeLink = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: var(--text-color);
  cursor: pointer;
`;

export {
	Nav,
	MobileNav,
	StyledLink,
	StyledWrapperLink,
	StyledWrapperLinkElement,
	StyledThemeLink,
	StyledLogoImage,
	StyledLinkItem,
};
