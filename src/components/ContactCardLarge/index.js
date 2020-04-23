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
        <p className='card-text'>{props.text}</p>
        <p className='card-text'>{props.text2}</p>
        <p>
          There are many ways to avoid foreclosure. The one that is right for
          you depends on your situation. Give me a call at{' '}
          <a href='tel:7202912126'>(720) 291-2126</a> and I will be happy to
          give you a free no-cost explanation of what I think is the best path
          for you based on your situation. But call soon. The more time you have
          based on the time line I explained earlier, the more likely you are to
          have a good resolution
        </p>
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

export default ContactCardLarge;
