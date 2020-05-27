import React from 'react';

export default function Jumbotron(props) {
  return (
    <div className='jumbotron'>
      <h2>{props.quote}</h2>
      <h1>{props.title}</h1>
      <h2>{props.second}</h2>
      <div className='jumbo-links'>
        <h3>
          Email: <a href={`mailto:${props.email}`}>{props.email}</a>
        </h3>
        <h3>
          Phone: <a href={`tel:${props.phone}`}>{props.phoneText}</a>
        </h3>
      </div>
    </div>
  );
}
