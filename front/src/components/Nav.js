import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<>
			<nav>
				<div className='nav-links'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='login'>Login</NavLink>
					<NavLink to='Contact'>Contact</NavLink>
					<NavLink to='Store'>Store</NavLink>
					<NavLink to='Products'>Products</NavLink>
					<NavLink to='NoPage'>NoPage</NavLink>
				</div>
			</nav>
		</>
	);
};

export default Nav;
