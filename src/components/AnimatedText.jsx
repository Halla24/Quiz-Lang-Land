// components/AnimatedText.js
import React from 'react';

const AnimatedText = () => {
  return (
    <>
      <style jsx>{`
        @import url("//fonts.googleapis.com/css?family=Pacifico&text=Pure");
        @import url("//fonts.googleapis.com/css?family=Roboto:700&text=css");
        @import url("//fonts.googleapis.com/css?family=Kaushan+Script&text=!");

        body {
          pointer-events: none;
          min-height: 450px;
          height: 100vh;
          margin: 0;
          background: radial-gradient(circle, #0077ea, #1f4f96, #1b2949, #000);
        }

        .stage {
          position: absolute;
          top: 50%;
          left: 40%;
          transform: translate(-50%, -50%);
          height: 300px;
          width: 500px;
          perspective: 9999px;
          transform-style: preserve-3d;
        }

        .layer {
          width: 100%;
          height: 100%;
          position: absolute;
          transform-style: preserve-3d;
          animation: ಠ_ಠ 30s infinite alternate ease-in-out 10.5s;
          animation-fill-mode: forwards;
          transform: rotateY(20deg) rotateX(13deg) translateZ(0);
        }

        .layer:after {
          pointer-events: none;
          font: 80px/1 "Pacifico", "Kaushan Script", Futura, "Roboto", "Trebuchet MS", Helvetica, sans-serif;
          content: " Welcome to Lang Land !";
          white-space: pre;
          text-align: center;
          color: whitesmoke;
          letter-spacing: -0px;
          text-shadow: 4px 0 10px rgba(0, 0, 0, 0.13);
        }

        .layer:nth-child(n+10):after {
          -webkit-text-stroke: 3px rgba(0, 0, 0, 0.25);
        }

        .layer:nth-child(n+11):after {
          -webkit-text-stroke: 15px dodgerblue;
          text-shadow: 6px 0 6px #00366b, 5px 5px 5px #002951, 0 6px 6px #00366b;
        }

        .layer:last-child:after {
          -webkit-text-stroke: 17px rgba(0, 0, 0, 0.1);
        }

        .layer:first-child:after {
          color: #fff;
          text-shadow: none;
        }

        @keyframes ಠ_ಠ {
          100% {
            transform: rotateY(-20deg) rotateX(-43deg);
          }
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .stage {
            height: 200px;
            width: 350px;
          }

          .layer:after {
            font-size: 40px;
          }
        }

        @media (max-width: 480px) {
          .stage {
            height: 150px;
            width: 250px;
          }

          .layer:after {
            font-size: 30px;
          }
        }
      `}</style>
      <div className="stage">
        {[...Array(21)].map((_, index) => (
          <div key={index} className="layer"></div>
        ))}
      </div>
    </>
  );
};

export default AnimatedText;
