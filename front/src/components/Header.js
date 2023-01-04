import { ReactComponent as Logo } from '../assets/favicon.svg';
import Nav from './Nav';

const Header = () => {
	return (
		<>
			<header>
				<span class='material-symbols-outlined'>menu</span>
				<Nav />
				<div className='logo'>
					<Logo />
					<h5>Plant Parents</h5>
				</div>
				<span class='material-symbols-outlined'>person</span>
				<div className='person'></div>
			</header>
		</>
	);
};

export default Header;
