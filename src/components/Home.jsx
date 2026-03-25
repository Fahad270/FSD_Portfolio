import React from "react";
import "./Home.css"; 
function Home() {
  return (
    <div className="home">
      <h1 className="home-title">🎬 Welcome to MovieHub!</h1>
      <p className="home-subtitle">Book your favorite movies in just a few clicks.</p>
      <button className="home-btn">Explore Movies</button>
    </div>
  );
}

export default Home;