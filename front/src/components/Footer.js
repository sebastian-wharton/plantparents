const Footer = () => {
	return (
		<>
			<footer>
				<div className='newsletter'>
					<h3>Sign Up for Our Newsletter!</h3>
					<h4>
						It's the only way to stay up to date on our best deals
						and newest releases
					</h4>
					<input
						type='text'
						className='newsletter'
					/>
					<button>Subscribe</button>
					<p>or text plantmom or plantdad to 72524 for SMS updates</p>
					<p>© 2023 Plant Parenting, Inc.</p>
				</div>
				<div className='social'>
					<h3>Social</h3>
					<hr />
					<ul>
						<li>Instagram</li>
						<li>Facebool</li>
						<li>Twitter</li>
						<li>LinkedIn</li>
					</ul>
				</div>
				<div className='shop'>
					<h3>Shop</h3>
					<hr />
					<ul>
						<li>Best Indoor Plants</li>
						<li>Outdoor Plants</li>
						<li>Easiest to Maintain</li>
					</ul>
				</div>
			</footer>
		</>
	);
};

export default Footer;
