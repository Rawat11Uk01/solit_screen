import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const generateRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 50) + 50;
  const lightness = Math.floor(Math.random() * 40) + 60;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const DividedScreen = ({ backgroundColor }) => {
  const [divided, setDivided] = useState(false);

  const handleDivide = () => {
    setDivided(true);
  };

  return (
    <div
      className={`divided-screen ${divided ? "divided" : ""}`}
      style={{ backgroundColor }}
      onClick={handleDivide}
    >
      {divided ? (
        <>
          <div className="divided-section">
            <DividedScreen backgroundColor={generateRandomColor()} />
            <DividedScreen backgroundColor={generateRandomColor()} />
          </div>
          <div className="divided-section">
            <DividedScreen backgroundColor={generateRandomColor()} />
            <DividedScreen backgroundColor={generateRandomColor()} />
          </div>
        </>
      ) : (
       
        <p>Click to Divide</p>
      )}
    </div>
  );
};

export default DividedScreen;

