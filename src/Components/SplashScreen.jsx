import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ShinyText from "./ShinyText";
import HyperSpeed from "./HyperSpeed";
import BlurText from "./BlurText";

const SplashScreen = () => {
  const [fadeOutAyush, setFadeOutAyush] = useState(false);
  const [fadeInHyperSpeed, setFadeInHyperSpeed] = useState(false);
  const [showBlurText, setShowBlurText] = useState(false);
  const name = "AYUSH".split("");

  useEffect(() => {
    const letters = document.querySelectorAll(".loading-text .shiny-text");

    gsap.to(letters, {
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      onUpdate: function () {
        letters.forEach((el, i) => {
          el.classList.add("glow");
          setTimeout(() => el.classList.remove("glow"), 200 + i * 150);
        });
      },
      onComplete: () => {
        // Start both transitions at the same time
        setFadeOutAyush(true);
        setFadeInHyperSpeed(true);
        // Show blur text just after the crossfade
        setTimeout(() => setShowBlurText(true), 400);
      },
    });
  }, []);

  return (
    <>
      <style>{`
        #loading {
          position: fixed;
          inset: 0;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }
        .hyperspeed-bg {
          position: absolute;
          inset: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.6s;
        }
        .hyperspeed-bg.fade-in {
          opacity: 1;
        }
        .loading-text {
          position: relative;
          z-index: 2;
          transition: opacity 0.6s;
        }
        .loading-text.fade-out {
          opacity: 0;
        }
        .blur-text-message {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100vw;
          text-align: center;
          z-index: 3;
          font-size: 2.6rem;
          color: #fff;
          font-family: 'Nunito Sans', 'Lato', 'Inter', 'Segoe UI', Arial, sans-serif;
          font-weight: 900;
          letter-spacing: 0.01em;
          line-height: 1.1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: auto;
          text-transform: none;
        }
        .loading-text .shiny-text {
          font-family: 'Montserrat', 'Arial Black', Arial, sans-serif;
          font-size: 120px;
          color: rgba(255, 255, 255, 0.1);
          position: relative;
          display: inline-block;
          opacity: 0;
          transition: color 0.2s;
          font-weight: 900;
          letter-spacing: 0.05em;
        }
        .loading-text .shiny-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          color: #1DCD9F;
          opacity: 0;
          transition: opacity 0.2s;
          font-weight: 900;
        }
        .loading-text .shiny-text.glow::after {
          opacity: 1;
        }
      `}</style>
      <div id="loading">
        <div
          className={`loading-text${fadeOutAyush ? " fade-out" : ""}`}
          id="name-loader"
        >
          {name.map((letter, idx) => (
            <ShinyText key={idx} text={letter} />
          ))}
        </div>
        <div className={`hyperspeed-bg${fadeInHyperSpeed ? " fade-in" : ""}`}>
          <HyperSpeed />
        </div>
        {showBlurText && (
          <div className="blur-text-message center-message">
            <BlurText
              text="Experience the Perspective of Ayush"
              animateBy="words"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SplashScreen;