import { NavLink } from 'react-router-dom';


const Store = () => {
	return (
		<>
			<h1>Store</h1>{' '}
			<section className='bread'>
				<NavLink to='/'>Home </NavLink>
				<span class='material-symbols-outlined'>chevron_right</span>
			</section>
			<div>
				<span class='material-symbols-outlined'>favorite</span>
				<span class='material-symbols-outlined'>shopping_cart</span>
				<span class='material-symbols-outlined'>search</span>
				<span class='material-symbols-outlined'>arrow_drop_down</span>
				<span class='material-symbols-outlined'>add</span>
			</div>
		</>
	);
};

export default Store;
