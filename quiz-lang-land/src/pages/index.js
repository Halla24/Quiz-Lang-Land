import React from 'react';
import Navbar from '../components/Navbar';
import GetStartedButton from '../components/GetStartedButton';
import AnimatedText from '../components/AnimatedText';

const Home = () => {
  return (
    <div>
      <Navbar />
      <AnimatedText />
      <div className="bg-cover h-screen flex items-center justify-center" style={{ backgroundImage: 'url("/hohi.avif")' }}>
        <div className="text-center">
          <p className="text-white mt-8 mb-4 animated-fade-in-up-text">
            Explore different language test levels and improve your skills.
          </p>
          <GetStartedButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
