import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Buyers = () => {
  return (
    <div>
      <Navbar buyers='active' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h1 className='mt-4 mb-4'>Interested in purchasing a home?</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <img src='http://via.placeholder.com/300' alt='' />
          </div>
          <div className='col-md-4'>
            <img src='http://via.placeholder.com/300' alt='' />
          </div>
          <div className='col-md-4'>
            <img src='http://via.placeholder.com/300' alt='' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h3 className='mt-4 mb-4'>
              It's a good time to buy, interest rates are at historic lows
            </h3>
            <h5>
              We network with great loan originators that we send clients to
              that can determine the kind of loan that is best for you and issue
              a pre-approval letter that we can submit to sellers so that they
              know you are pre-qualified to purchase their home at the same time
              that they are considering your offer.
            </h5>
            <p>
              We can determine what type of property you want and what price you
              can afford. This can help us determine what areas you might be
              interested in. We have bought and sold homes as far north as Fort
              Collins, as far south as Pueblo, as far west as Rifle, and as far
              east as Limon. We are very knowledgeable about many areas of
              Colorado, not just the Denver Metro area. Once we zone in on the
              price range and areas you are interested in, We will send you
              lists of properties for sale that meet your criteria and include
              all available relevant information about the property, mapping of
              their location, how long it has been on the market, pictures, etc.
              I can also show you how to search the{' '}
              <a href='http://www.mls.com/Search/Colorado.mvc'>
                Multi-Listing Service (MLS)
              </a>{' '}
              yourself so you can do your own research. We will set up
              appointments and we will take a look at the properties. We are
              experienced in being able to see potential problems with a
              property such as foundation problems, shoddy construction, water
              damage, mold, dated design features, etc. We can discuss these
              items when we are looking at properties and if you are still
              interested in the property, we can adjust the offer price
              accordingly. We will represent you throughout the buying process
              with your best interests in mind.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Buyers;
