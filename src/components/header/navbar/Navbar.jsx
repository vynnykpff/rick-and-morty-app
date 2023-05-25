import {
	characters,
	episodes,
	favorites,
	locations,
} from '../../../store/services/routes';
import {
	Nav,
	StyledLink,
	StyledLinkItem,
	StyledThemeLink,
	StyledWrapperLink,
	StyledWrapperLinkElement,
	StyledLogoImage,
} from './Navbar.styled';
import logo from '../../../../public/favicon.png';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiMoon } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '../../../store/theme/theme.slice';
import sound from './sound.wav'
import { play } from '../../../utils/sounds/soundsBar';

const Navbar = () => {
	// const [theme, setTheme] = useState(true);

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
			<StyledLink to='/' className='test'>
				<StyledLogoImage src={logo} alt='logo' width={60} />
			</StyledLink>
			<StyledWrapperLink>
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
						<AiOutlineHeart />
					</StyledLink>
					<StyledThemeLink onClick={() => {
						handleChange()
						// play()
					}}>
						{theme === 'light' ? <BiMoon /> : <BsSun />}
					</StyledThemeLink>
				</StyledWrapperLinkElement>
			</StyledWrapperLink>
		</Nav>
	);
};

export default Navbar;
