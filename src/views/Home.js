import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import House1 from '../assets/img/house1.jpg';
import House2 from '../assets/img/house2.jpg';

export default function Home() {
  return (
    <div className='home'>
      <div className='content-wrap'>
        <Navbar home='active' />

        <Jumbotron
          quote='"Into Each Life Some Rain Must Fall"'
          title='Welcome to Colorado Home Savers'
          second='Rescuing Colorado Home Owners From Foreclosure Since 2003'
          email='info@coloradohomesavers.org'
          phone='7205155204'
          phoneText='(720) 515-5204'
        />

        <article className='foreclosure-article'>
          <h1>
            <i class='fas fa-info-circle'></i> Foreclosure Information
          </h1>
          <hr />
          <div className='article-content'>
            <img className='house-1' src={House1} alt='' />
            <p>
              Most people do not realize that there is a lot of time built into
              the Colorado foreclosure process. Once you stop paying your
              mortgage, typically after three missed mortgage payments, maybe
              more, your mortgage lender takes action. This process may be
              different if you have just ended a forbearance period. Depending
              on the terms of your forbearance agreement, they may take action
              after just one missed payment at the end of the forbearance. When
              they do decide to take action, your lender has to file for
              foreclosure with the Public Trustee of the County your property
              resides in. This filing is called a Notice of Election and Demand
              (NED). <Link to='/foreclosure'>Read More</Link>
            </p>
          </div>
          <h1>AVOIDING FORECLOSURE</h1>
          <hr />
          <div className='article-content-2'>
            <img className='house-2' src={House2} alt='' />
            <p>
              There are many ways to avoid foreclosure. The one that is right
              for you depends on your situation. Give us a call at{' '}
              <a href='tel:7205155204'>(720) 515-5204</a> and we will be happy
              to give you a free, no-cost, no obligation explanation of what we
              think is the best path for you based on your situation. It is
              illegal for anyone acting as a foreclosure consultant to charge an
              up-front fee or deposit for foreclosure-related services. Call us
              soon. The more time you have, based on the timeline, the more
              likely you are to have a good resolution to avoid foreclosure.
            </p>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
}
