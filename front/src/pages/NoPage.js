import { NavLink } from 'react-router-dom';
import lost from '../assets/404img.png';
import env from '../assets/Environment-bro.png';
import forest from '../assets/Forest-bro.png';
import planting from '../assets/planting.png';
import seeding from '../assets/Seeding-bro.png';

const NoPage = () => {
	return (
		<>
			<section>
				<h1>404</h1>
				<h1 className='lost-title'>You seem to be lost!</h1>
				<p className='lost-body'>
					The page you're looking for isn't available. Try searching
					again or use the Go Back button below.
				</p>
				<NavLink to='/'> Go Back </NavLink>.
				<img
					src={lost}
					alt='404 You are lost'
				/>
				<span>
					<a href='https://storyset.com/online'>
						Online illustrations by Storyset
					</a>
				</span>
			</section>
			<section>
				{/* https://unsplash.com/ */}
				<div className='imgs'>
					<h1>Asset Placement</h1>
					<div>
						<img
							src={env}
							alt='404 You are lost'
						/>
						<span>
							<a href='https://storyset.com/nature'>
								Nature illustrations by Storyset
							</a>
						</span>
					</div>
					<div>
						<img
							src={forest}
							alt='404 You are lost'
						/>
						<span>
							<a href='https://storyset.com/nature'>
								Nature illustrations by Storyset
							</a>
						</span>
					</div>
					<div>
						<img
							src={planting}
							alt='404 You are lost'
						/>
						<span>
							<a href='https://storyset.com/nature'>
								Nature illustrations by Storyset
							</a>
						</span>
					</div>
					<div>
						<img
							src={seeding}
							alt='404 You are lost'
						/>
						<span>
							<a href='https://storyset.com/nature'>
								Nature illustrations by Storyset
							</a>
						</span>
					</div>
				</div>
				{/* https://fonts.google.com/ */}
				<div className='fonts'>
					<h1>Styles Try Outs!</h1>
					<h1>H1 Title Font</h1>
					<h2>Body Title Font</h2>
					<h3>Body Subheader</h3>
					<p>
						Body Styles. Lorem ipsum dolor, sit amet consectetur
						adipisicing elit. Architecto eaque nobis dolorum
						cupiditate eligendi quod itaque repellendus quos,
						inventore porro ut voluptas? Provident, in fugiat ullam
						eos explicabo reiciendis quisquam ab temporibus hic,
						aliquam fuga illum minus beatae officiis nemo.
					</p>
				</div>
				<div className='colors'>
					<h1>Colors!</h1>
					<h3>BG</h3>
					<div className='clrbox bg'></div>
					<h3>One</h3>
					<div className='clrbox 1'></div>
					<h3>Two</h3>
					<div className='clrbox 2'></div>
					<h3>Three</h3>
					<div className='clrbox 3'></div>
					<h3>Four</h3>
					<div className='clrbox 4'></div>
				</div>
				{/* https://fonts.google.com/icons */}
				<div className='svgs'>
					<h1>SVGs!</h1>
					{/* <!-- thin outlined icons --> */}
					<div className='thin-icons'>
						<span className='material-symbols-outlined'>
							search
						</span>
						<span className='material-symbols-outlined'>home</span>
						<span className='material-symbols-outlined'>
							settings
						</span>
						<span className='material-symbols-outlined'>
							favorite
						</span>
					</div>

					{/* thick filled icons  */}
					<div className='thick-fill-icons'>
						<span className='material-symbols-outlined'>
							search
						</span>
						<span className='material-symbols-outlined'>home</span>
						<span className='material-symbols-outlined'>
							settings
						</span>
						<span className='material-symbols-outlined'>
							favorite
						</span>
					</div>
					{/* animated icons */}
					<div class='pulse'>
						<span className='material-symbols-outlined'>
							search
						</span>
						<span className='material-symbols-outlined'>home</span>
						<span className='material-symbols-outlined'>
							settings
						</span>
						<span className='material-symbols-outlined'>
							favorite
						</span>
					</div>
				</div>
			</section>
		</>
	);
};

export default NoPage;
