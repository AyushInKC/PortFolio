import './App.css'
import SplashScreen from './Components/SplashScreen'
import LandingPage from "./Components/landingpage";
import { useState } from 'react';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showLanding, setShowLanding] = useState(false);

  return (
    <>
      {showSplash && (
        <SplashScreen
          onFinish={() => {
            setShowSplash(false);
            setTimeout(() => setShowLanding(true), 10); // allow DOM update
          }}
        />
      )}
      <div
        className={`landing-slide ${showLanding ? "landing-slide-in" : ""}`}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 10000,
          pointerEvents: showLanding ? "auto" : "none",
        }}
      >
        {showLanding && <LandingPage />}
      </div>
    </>
  );
}

export default App;
