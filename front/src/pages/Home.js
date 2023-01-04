const Home = () => {
	return (
		<>
			<h1>Home</h1>
			<h2>Asset Dump</h2>
			<hr />
			<h3>Styles</h3>
			<div className='style-box'>
				<h1>Title Font (h1)</h1>
				<h2>Subtitle Font (h2)</h2>
				<h3>Smaller Subtitle Font (h3)</h3>
				<h5>Logo Font (h5)</h5>
				<p>
					Body text preview (p). Lorem ipsum dolor, sit amet
					consectetur adipisicing elit. Sint optio maiores distinctio
					error facere iure consequatur, delectus officia. Dolore,
					aliquam! Non quaerat excepturi facere ipsum voluptatibus.
					Eligendi, modi. Ea enim nostrum blanditiis, maiores quo et
					ad dolores error possimus, autem mollitia iste dolor placeat
					suscipit?
				</p>
			</div>
			<h3>Colors</h3>
			<div className='style-box'>
				<p>bg</p>
				<div className='clr-box'></div>
				<p>green-light</p>
				<div className='clr-box'></div>
				<p>green-dark</p>
				<div className='clr-box'></div>
				<p>yellow-light</p>
				<div className='clr-box'></div>
				<p>yellow-light</p>
				<div className='clr-box'></div>
			</div>
		</>
	);
};

export default Home;
