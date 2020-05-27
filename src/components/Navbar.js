import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
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
              <Link>
                <h1>Home</h1>
              </Link>
              <Link>
                <h1>Contact</h1>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
