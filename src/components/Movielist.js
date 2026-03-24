import Moviecard from "./Moviecard";

function Movielist({ movies, addBooking }) {
  return (
    <div className="movie-list">
      <h2>Now Showing</h2>
      <div className="movies-grid">
        {movies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} addBooking={addBooking} />
        ))}
      </div>
    </div>
  );
}

export default Movielist;