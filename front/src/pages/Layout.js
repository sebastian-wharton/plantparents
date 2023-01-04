import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
	return (
		<>
			<ScrollRestoration />
			<main>
				<Header />
				<Outlet />
				<Footer />
			</main>
		</>
	);
};

export default Layout;
