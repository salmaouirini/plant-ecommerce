import React from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../Style.css';



const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
    <Navbar />
    <div className="home-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="home-content">
        <h2>Welcome to Our Plant Shop!</h2>
        <p>Explore a variety of plants and flowers to beautify your home.</p>
        <button className="start-button" onClick={() => navigate('/plants')}>
          Start Shopping
        </button>
      </div>
    </div>
    </div>
  );
};

export default Home;
