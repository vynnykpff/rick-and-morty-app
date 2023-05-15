import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import Header from '../header/Header';
const Layout = () => {
	return (
		<>
			<Header />
			<Container>
				<Suspense>
					<Outlet />
				</Suspense>
			</Container>
		</>
	);
};

export default Layout;
