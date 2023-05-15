import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, Container, Header, Nav} from './Layout.styled';
 const Layout = () =>{
    return <>
    <Header>
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/characters">Characters</StyledLink>
          <StyledLink to="/locations">Locations</StyledLink>
          <StyledLink to="/episodes">Episodes</StyledLink>
        </Nav>
    </Header>
    <Container>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
    </>  
 }

 export default Layout