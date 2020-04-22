import React from 'react';
import Navbar from '../../components/Navbar';

const Sellers = () => {
  return (
    <div>
      <Navbar sellers='active' />
      <div className='row'>
        <div className='col-md-12 text-center mt-4'>
          <h1>Looking to sell your home?</h1>
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
        <div className='col-md-12 text-center'>
          <h3>
            We can put up a for sale sign on your front lawn, or if you would
            rather not advertise to your neighbors that you are selling, we can
            forego the for sale sign
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
