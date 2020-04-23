import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Sellers = () => {
  return (
    <div>
      <Navbar sellers='active' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h1 className='mt-4 mb-4'>
              Looking to sell your home? We have sold millions of dollars of
              residential real estate since 2003.
            </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <img src='http://via.placeholder.com/300C' alt='' />
          </div>
          <div className='col-md-4'>
            <img src='http://via.placeholder.com/300C' alt='' />
          </div>
          <div className='col-md-4'>
            <img src='http://via.placeholder.com/300C' alt='' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <h3 className='mt-4 mb-4 text-center'>
              We can put up a for sale sign on your front lawn, or if you would
              rather not advertise to your neighbors that you are selling, we
              can forego the for sale sign
            </h3>
            <p className='text-center'>Images here</p>
            <h4 className='text-center mt-4 mb-4'>
              The benefit of having a for sale sign is that buyers not working
              with a real estate agent can inquire about the sale. If we find a
              buyer not yet being represented, I can represent them as a
              transaction broker and relieve you of the cost of having to pay a
              buyer’s agent. This could save you thousands of dollars in real
              estate commissions and happens more often than you might think.
            </h4>
            <p>
              I can accurately do a comprehensive CMA (Comparative Market
              Analysis) <a href='*'>[click to see an example]</a> so that we can
              together come up with the highest price point to sell your
              property.
            </p>
            <p>
              I will hold open houses to help sell your property. This is a good
              way for potential buyers to come see your house without having to
              set up appointments or have a real estate agent present. This
              again can save you thousands of dollars in real estate commissions
              if I find a buyer who is not yet being represented by a real
              estate agent.
            </p>
            <p>
              If you are in a hurry, I have a network of dozens of investors
              willing to pay you in cash within a week or two. This can be a
              scenario where you can sell to the highest bidder; however, it
              typically will not be offers that are as high as putting your
              house on the{' '}
              <a href='http://www.mls.com/Search/Colorado.mvc'>
                Multi-Listing Service (MLS)
              </a>
              . This is for homes that require a significant amount or
              rehabilitation and do not show well to the general public.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sellers;
