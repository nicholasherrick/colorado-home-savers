import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='/'>
        Colorado Home Savers
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className={`nav-item ${props.home}`}>
            <Link className='nav-link' to='/home'>
              Home
            </Link>
          </li>
          <li className={`nav-item ${props.foreclosure}`}>
            <Link className='nav-link' to='/foreclosure'>
              Foreclosure
            </Link>
          </li>
          <li className={`nav-item ${props.sellers}`}>
            <Link className='nav-link' to='/sellers'>
              Sellers
            </Link>
          </li>
          <li className={`nav-item ${props.buyers}`}>
            <Link className='nav-link' to='/buyers'>
              Buyers
            </Link>
          </li>
          <li className={`nav-item ${props.about}`}>
            <Link className='nav-link' to='/about'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
