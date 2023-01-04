import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<>
			<nav>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='Login'>Login</NavLink>
				<NavLink to='Contact'>Contact</NavLink>
				<NavLink to='Store'>Store</NavLink>
				<NavLink to='Products'>Products</NavLink>
				<NavLink to='NoPage'>NoPage</NavLink>
			</nav>
		</>
	);
};

export default Nav;

// Nav btns
// https://codepen.io/hexagoncircle/pen/wvBmvOG
// https://www.taniarascia.com/responsive-dropdown-navigation-bar/