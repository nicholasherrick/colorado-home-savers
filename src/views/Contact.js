import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className='contact'>
      <Navbar contact='active' />

      <Footer />
    </div>
  );
}
