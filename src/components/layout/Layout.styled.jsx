import styled from "@emotion/styled";
import { NavLink} from 'react-router-dom';


const Header = styled.header`
padding: 20px 150px;
background-color: permanent;
`
const Nav = styled.nav`
width: 1260px;
margin: 0 auto;
`
const Container = styled.main`
width: 1260px;
padding: 40px 0;
margin: 0 auto;`

const StyledLink = styled(NavLink)`
  color: #e4e4e5;

  text-decoration: none;
  font-weight: 600;
  font-size: 20px;

  &:not(:last-child){
 margin-right: 20px;
}
  &.active {
    color: #fff;
    }
`;




export {StyledLink, Container, Header, Nav}