import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import Jumbotron from '../../components/Jumbotron';
import ContactCard from '../../components/ContactCard';
import ContactCardLarge from '../../components/ContactCardLarge';
import Jeff from '../../assets/img/jeff.jpg';

const Home = () => {
  return (
    <div>
      <Navbar home='active' />
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center mt-4'>
            <Jumbotron
              title='Welcome to Colorado Home Savers'
              text='Colorado Home Savers has helped people avoid foreclosure since 2003'
            />
            <h1 className='mb-5'>
              In Foreclosure? <Link to='/foreclosure'>Click Here</Link>
            </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <ContactCard
              image={Jeff}
              cardTitle='Jeffrey Raymond Herrick'
              text='I am a foreclosure specialist and been in the real estate business for over seventeen years.'
              button='Contact'
              secondButton='About Me'
            />
          </div>
          <div className='col-md-8'>
            <ContactCardLarge
              cardTitle='The Foreclosure Timeline'
              text='Many people do not realize that there is a lot of time in the Colorado foreclosure process. First you miss
at least three mortgage payments, maybe more, before your mortgage lender takes action. Then they
have to file for foreclosure with the Public Trustee of the County your property resides in. This is called a
Notice of Election and Demand (NED). They have to publish their intent to foreclose in several
publications. This process can take several weeks. Once this process is done, the Public Trustee sets an
auction or sale date which is anywhere from 110 to 130 days out. This auction, or sale date, is the
deadline to save your property by noon the day before the date of the auction. As you see, once you
stop paying your mortgage, you have at least six months, maybe much longer, to work to save your
property before it can be taken away from you. I had a client once where the foreclosure process took
more than two years. Unfortunately for him, he moved his family out of the house, against my
recommendation, as soon as he stopped paying his mortgage and began renting. He said he wanted to
get settled somewhere so he didn’t have to uproot his kids from schools, friends, etc. He could have
lived in his home for more than two years without paying a dime in mortgage or rent payments, so it is
important to NOT move out of your house. Let the process unfold until you are sure of the exact
deadline. I have been successful in many cases extending the auction date out further and further, giving
my clients even more time to avoid foreclosure.'
              button='About'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
