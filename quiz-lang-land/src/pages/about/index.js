import React from "react";
import Navbar from "../../components/Navbar";
import GlassCard from "../../components/GlassCard"; // Import the GlassCard component

const About = () => {
  return (
    <div>
      <Navbar />
      <div
        className="bg-cover h-screen flex items-center justify-center relative"
        style={{ backgroundImage: 'url("/hohi.avif")' }}
      >
        {/* GlassCard component with logo.png image and description */}
        <GlassCard />
      </div>
    </div>
  );
};

export default About;
