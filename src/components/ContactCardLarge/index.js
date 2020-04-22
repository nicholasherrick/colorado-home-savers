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
        <p>
          Now that you know the timeline you can see how long you have to avoid
          foreclosure. Avoiding foreclosure is so important. Unlike a bad mark
          on your credit report which is removed from your record usually within
          six to ten years, a foreclosure is forever and is always in the county
          records where you reside. It is important to not lose your home to
          foreclosure.
        </p>
        <p>
          There are many ways to avoid foreclosure. The one that is right for
          you depends on your situation. Give me a call at 720-291-2126 and I
          will be happy to give you a free no-cost explanation of what I think
          is the best path for you based on your situation. But call soon. The
          more time you have based on the time line I explained earlier, the
          more likely you are to have a good resolution
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
