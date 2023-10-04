import React from 'react';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import Availability from '../../components/Availabilty/Availability';
import VideoBoard from '../../components/VideoBoard/VideoBoard';

const Share = () => {
  return (
    <div>
      <Header />
      <VideoBoard />
      <Availability />
      <Footer />
    </div>
  );
};

export default Share;
