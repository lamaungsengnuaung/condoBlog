import { Link } from 'react-router-dom';
import About from './About';
import './home.css';
import mainCondo from '../asset/mainCondo.jpg';

const Home = () => {
  return (
    <div className='container'>
      <header>
        <nav>
          <Link to='/'>#CONDO</Link>
          <div>
            <Link to='/about'>About</Link>
          </div>
        </nav>
      </header>
      <div className='content'>
        <p className='para'>
          If you’re considering buying a Condominium Apartment in Myanmar, there
          are several considerations you should think about before buying. What
          type of facilities and amenities do you like? What is the land title?
          Before making a purchase it’s best to talk to a professional.
        </p>
        <img src={mainCondo} alt='main condo interior' />
      </div>
    </div>
  );
};

export default Home;
