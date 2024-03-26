import React from 'react';
import Navbar from '../components/Navbar';
import GetStartedButton from '../components/GetStartedButton';
import AnimatedText from '../components/AnimatedText';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="pointer-events-none">
        <AnimatedText /></div>
      <div className="bg-cover h-screen flex items-center justify-center" style={{ backgroundImage: 'url("/hohi.avif")' }}>
          <GetStartedButton />
        </div>
      </div>
  );
};

export default Home;
