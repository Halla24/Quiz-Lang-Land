// GlassCard.js
import React from 'react';

const GlassCard = () => {
  // Import the image using Next.js Image component
  const imageUrl = '/loog.png'; // Update the path based on your actual image location
  const title = 'About this Platform';
  const description =
    "Embark on a language-learning adventure with our innovative platform! Explore quizzes in various languages, assess your skills, and track your progress seamlessly. Our user-friendly interface makes learning a joy, and our vibrant community ensures you're never alone on your linguistic journey. Start mastering languages with us today!";

  return (
    <div className="bg-opacity-25 bg-gray-900 bg-blur-lg border border-gray-200 rounded-lg overflow-hidden w-100 mx-4 my-0 p-20 flex flex-col items-center text-center">
      <img src={imageUrl} alt={title} className="w-32 h-32 rounded-full mb-4" />
      <div>
        <h2 className="text-xl font-bold text-red-200">{title}</h2>
        <p className="text-black font-mono ">{description}</p>
      </div>
    </div>
  );
};

export default GlassCard;
