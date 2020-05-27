import React from 'react';

export default function Jumbotron(props) {
  return (
    <div className='jumbotron'>
      {props.quote ? <h2>{props.quote}</h2> : null}
      <h1>{props.title}</h1>
      {props.second ? <h2>{props.second}</h2> : null}
      {props.email || props.phone ? (
        <div className='jumbo-links'>
          {props.email ? (
            <h3>
              Email: <a href={`mailto:${props.email}`}>{props.email}</a>
            </h3>
          ) : null}
          {props.phone ? (
            <h3>
              Phone: <a href={`tel:${props.phone}`}>{props.phoneText}</a>
            </h3>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
