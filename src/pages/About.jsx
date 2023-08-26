import { Link } from 'react-router-dom';
import Home from './Home';

const About = () => {
  return (
    <div className='container'>
      <header>
        <h1>
          Welcome From About Page
          <Link to='/'>
            <small>go to home</small>
          </Link>
        </h1>
      </header>
      <div className='content'>
        <p className='para'>
          The REMI Network is a leading news and information source servicing
          the real estate management industry. REMI Network, 2015 Canadian
          Online Publishing AwardsOur editorial mandate is to provide meaningful
          content for professionals involved in every stage of real estate
          management – from the planning of a project all the way through to a
          property’s development (design and construction) and its occupancy,
          management and maintenance. The REMI Network covers industry news,
          tackles prominent and emerging topics of interest to real estate
          management professionals, and provides practical advice from a wide
          variety of industry experts.
        </p>
      </div>
    </div>
  );
};

export default About;
