import React from 'react';
import Navbar from '../../components/Navbar';
import ContactCard from '../../components/ContactCard';
import Carousel from '../../components/Carousel';

const Home = () => {
    return (
      <div>
        <Navbar />
          <div className="row">
            <Carousel colSize="col-12" />
          </div>
          <ContactCard colSize="col-3" />
      </div>
      );
  }

export default Home;