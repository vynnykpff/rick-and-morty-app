import {favorites,} from '../../../store/services/routes';
import {
	MobileNav,
	Nav,
	StyledLink,
	StyledLinkItem,
	StyledLogoImage,
	StyledThemeLink,
	StyledWrapperLink,
	StyledWrapperLinkElement,
} from './Navbar.styled';
import logo from '../../../../public/favicon.png';
import {AiOutlineClose, AiOutlineHeart, AiOutlineMenu} from 'react-icons/ai';
import {BiMoon} from 'react-icons/bi';
import {BsSun} from 'react-icons/bs';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {set} from '../../../store/theme/theme.slice';
import sound from '../../../assets/sounds/change-theme.wav'
import {play} from '../../../utils/soundsBar.jsx';
import {HiMenu, IoIosClose, IoIosMenu} from "react-icons/all.js";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const theme = useSelector(state => state.theme);
	const dispatch = useDispatch();

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	const handleChange = () => {
		dispatch(set(theme === 'dark' ? 'light' : 'dark'))
		play(sound, 0.01)
	};

	return (
		<Nav>
			<StyledLink to='/'>
				<StyledLogoImage src={logo} alt='logo' width={60}/>
			</StyledLink>
			<StyledWrapperLink onClick={() => setNav(false)} className={nav ? 'active' : ' '}>
				<StyledLink to='characters/1'>
					<StyledLinkItem>Characters</StyledLinkItem>
				</StyledLink>
				<StyledLink to='locations/1'>
					<StyledLinkItem>Locations</StyledLinkItem>
				</StyledLink>
				<StyledLink to='episodes/1'>
					<StyledLinkItem>Episodes</StyledLinkItem>
				</StyledLink>
				<StyledWrapperLinkElement>
					<StyledLink to={favorites}>
						<AiOutlineHeart/>
					</StyledLink>
					<StyledThemeLink onClick={() => {
						handleChange()
					}}>
						{theme === 'light' ? <BiMoon/> : <BsSun/>}
					</StyledThemeLink>
				</StyledWrapperLinkElement>
			</StyledWrapperLink>
			<MobileNav onClick={() => setNav(!nav)}>
				{nav ? <IoIosClose style={{transition: 'all .3s ease'}} size={45} /> : <IoIosMenu size={35} />}
			</MobileNav>
		</Nav>
	);
};

export default Navbar;
