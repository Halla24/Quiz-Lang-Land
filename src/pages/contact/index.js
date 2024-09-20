import React from "react";
import Navbar from "../../components/Navbar";
import ContactForm from "../../components/ContactForm";


const About = () => {
  return (
    <div>
      <Navbar />
      <div
        className="bg-cover h-screen flex items-center justify-center relative"
        style={{ backgroundImage: 'url("/hohi.avif")' }}
      >

<div  ><ContactForm /> </div>
      </div>
    </div>
  );
};

export default About;