import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to='/'>
              <h1>Colorado Home Savers</h1>
            </Link>
          </li>
          <li>
            <div className='links'>
              <Link to='/home'>
                <h1 className={props.home}>Home</h1>
              </Link>
              <Link to='/contact'>
                <h1 className={props.contact}>Contact</h1>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
