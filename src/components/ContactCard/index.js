import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ContactCard = (props) => {
  return (
    <div className='card mx-auto'>
      {props.image ? (
        <img src={props.image} className='card-img-top' alt='...' />
      ) : null}
      <div className='card-body'>
        <h5 className='card-title'>{props.cardTitle}</h5>
        <p className='card-text'>{props.text}</p>
        <div className='row'>
          <div className='col-6'>
            <Link to='*' className='btn btn-primary'>
              {props.button}
            </Link>
          </div>
          <div className='col-6'>
            {props.secondButton ? (
              <div className='text-right'>
                <Link to='*' className='btn btn-primary'>
                  {props.secondButton}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
