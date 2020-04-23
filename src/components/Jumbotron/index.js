import React from 'react';
import './style.css';

const Jumbotron = (props) => {
  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='container'>
        <h1 className='display-4 text-white'>{props.title}</h1>
        <p className='lead text-white'>{props.text}</p>
      </div>
    </div>
  );
};

export default Jumbotron;
