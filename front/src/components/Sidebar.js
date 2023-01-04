import { stack as Menu } from 'react-burger-menu';

class Sidebar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
			<a
				className='menu-item'
				href='/'
			>
				Home
			</a>
			<a
				className='menu-item'
				href='/salads'
			>
				Salads
			</a>
			<a
				className='menu-item'
				href='/pizzas'
			>
				Pizzas
			</a>
			<a
				className='menu-item'
				href='/desserts'
			>
				Desserts
			</a>
		</Menu>
    );
  }
}
