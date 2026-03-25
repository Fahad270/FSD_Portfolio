import React from "react";
import Moviecard from "./Moviecard";
import "./Movielist.css";

function Movielist() {
  const movies = [
    { id: 1, title: "Avengers", price: 300 },
    { id: 2, title: "Batman", price: 250 },
    { id: 3, title: "Jawan", price: 200 },
    { id: 4, title: "Inception", price: 280 }
  ];

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <Moviecard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movielist;