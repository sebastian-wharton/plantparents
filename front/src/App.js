import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { Contact } from './pages/Contact';

export function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
					<li>
						<Link to='/store'>Store</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/contact'
					element={<Contact />}
				/>
				<Route
					path='/store'
					element={<Store />}
				/>
			</Routes>
		</>
	);
}
