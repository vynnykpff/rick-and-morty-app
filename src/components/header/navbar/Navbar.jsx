import {
	characters,
	episodes,
	favorites,
	locations,
} from '../../../services/routes';
import { Nav, StyledLink, WrapperLink } from './Navbar.styled';
import logo from '../../../../public/favicon.png';

const Navbar = () => {
	return (
		<Nav>
			<StyledLink to='/'>
				<img src={logo} alt='logo' width={60} />
			</StyledLink>
			<WrapperLink>
				<StyledLink to={characters}>Characters</StyledLink>
				<StyledLink to={locations}>Locations</StyledLink>
				<StyledLink to={episodes}>Episodes</StyledLink>
				<StyledLink to={favorites}>Favorites</StyledLink>
			</WrapperLink>
		</Nav>
	);
};

export default Navbar;
