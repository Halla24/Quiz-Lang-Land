import React from "react";
import Navbar from "../../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div
        className="bg-cover h-screen flex items-center justify-center"
        style={{ backgroundImage: 'url("/hohi.avif")' }}
      >
    </div>
    </div>
  );
};

export default About;

