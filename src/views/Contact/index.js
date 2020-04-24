import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Jumbotron from '../../components/Jumbotron';
import ContactCard from '../../components/ContactCard';
import ContactCardLarge from '../../components/ContactCardLarge';
import Jeff from '../../assets/img/jeff.jpg';

const Contact = () => {
  return (
    <div>
      <Navbar contact='active' />
      <div className='text-center'>
        <Jumbotron title='Contact' />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5'>
            <ContactCard
              image={Jeff}
              cardTitle='Jeffrey Raymond Herrick'
              text='I am a foreclosure specialist and been in the real estate business for over seventeen years.'
              button='Bio'
            />
          </div>
          <div className='col-md-7'>
            <ContactCardLarge
              cardTitle='Contact Jeffrey Herrick at Colorado Home Savers'
              text='Email'
              link='mailto:jherrick@pobox.com'
              linkText='jherrick@pobox.com'
              text2='Phone'
              link2='tel:7202912126'
              link2Text='(720) 291-2126'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
