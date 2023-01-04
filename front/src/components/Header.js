import { ReactComponent as Logo } from '../assets/pslogo.svg';
import Nav from './Nav';

const Header = () => {
	return (
		<>
			<header>
				<a
					id='nav-toggle'
					href='#!'
					class='position'
				>
					<span></span>
				</a>
				<div className='logo'>
					<Logo />
					<h5>Plant Parents</h5>
				</div>
				<Nav />
			</header>
		</>
	);
};

export default Header;
