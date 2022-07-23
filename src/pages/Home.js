import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Bimage.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Andhra Foods </h1>
        <p> Live Cooking Restaurant.</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
