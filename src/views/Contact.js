import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className='contact'>
      <Navbar contact='active' />

      <article className='contact-article'>
        <h1>
          Call Us <a href='tel:7205155204'>(720) 515-5204</a>
        </h1>
        <h1>
          Email{' '}
          <a href='mailto:info@coloradohomesavers.com'>
            info@coloradohomesavers.com
          </a>
        </h1>
        <hr />
        <p>
          The foreclosure process is complicated. Colorado Home Savers can guide
          you through to the best option available to you. We do not charge any
          upfront fees or deposits. Don’t hesitate. Call today to schedule a no
          cost, no obligation consultation. It is important to begin the process
          of avoiding foreclosure right away.
        </p>
      </article>

      <Footer />
    </div>
  );
}
