import React from 'react';
import Navbar from '../../components/Navbar';
import ContactCard from '../../components/ContactCard';

const Home = () => {
    return (
      <div>
        <Navbar />
        <div className="row">
          <ContactCard />
        </div>
      </div>
      );
  }

export default Home;