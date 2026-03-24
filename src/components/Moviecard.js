function Moviecard({ movie, addBooking }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>Price per Ticket: ₹{movie.price}</p>
      <button onClick={() => addBooking(movie)}>Book Now</button>
    </div>
  );
}

export default Moviecard;