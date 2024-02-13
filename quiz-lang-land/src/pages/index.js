import React from 'react';
import Navbar from "../components/Navbar";
import GetStartedButton from '../components/GetStartedButton';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-cover h-screen flex items-center justify-center" style={{ backgroundImage: 'url("/hohi.avif")' }}>
        <div className="text-center ">
          <h1 className="text-4xl text-white font-bold">Welcome to the Language Test Levels Platform</h1>
          <p className="text-white mt-8 mb-4">Explore different language test levels and improve your skills.</p>
          <GetStartedButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
