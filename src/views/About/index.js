import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Jumbotron from '../../components/Jumbotron';
import ContactCardLarge from '../../components/ContactCardLarge';

const About = () => {
  return (
    <div>
      <Navbar about='active' />
      <div className='text-center'>
        <Jumbotron title='About' />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <ContactCardLarge
              text='We have been in the real estate business for over seventeen years.
              When I began in 2003, I worked for Colorado Home Savers which
              specialized in helping people in foreclosure. For eight years I
              became extremely knowledgeable in all areas of foreclosure in the
              State of Colorado and helped thousands of people avoid
              foreclosure. This knowledge was especially helpful when the
              housing market crashed in 2008. In those days it was not uncommon
              for me to be working for more than 30 clients at a time. In 2011,
              I decided to branch out on my own and become an Independent Real
              Estate Broker owning my own company. I continue to help people in
              foreclosure but have also expanded my areas of expertise to
              representing buyers and sellers. This has become useful as the
              number of foreclosures have drastically dropped since that time. I
              look forward to giving you the benefit of all my experience
              whether you are in foreclosure or a buyer or seller in the Denver
              metro area. I invite you to call me at 720-291-2126 and am happy
              to give you references of past clients if you would like.'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
