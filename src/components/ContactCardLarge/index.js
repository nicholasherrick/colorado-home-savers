import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ContactCardLarge = (props) => {
  return (
    <div className='card card-large mx-auto'>
      {props.image ? (
        <img src={props.image} className='card-img-top' alt='...' />
      ) : null}
      <div className='card-body'>
        <h5 className='card-title'>{props.cardTitle}</h5>
        <p className='card-text mt-4'>{props.text}</p>
        {props.link ? <a href={props.link}>{props.linkText}</a> : null}
        <p className='card-text mt-4'>{props.text2}</p>
        {props.link2 ? <a href={props.link2}>{props.link2Text}</a> : null}
        <p>{props.text3}</p>
        <div className='row'>
          <div className='col-6'>
            {props.button ? (
              <Link to='*' className='btn btn-primary'>
                {props.button}
              </Link>
            ) : null}
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

export default ContactCardLarge;
