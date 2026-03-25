import { useDispatch } from "react-redux";
import { useState } from "react";

function Moviecard({ movie }) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const handleBooking = () => {
    dispatch({
      type: "ADD_BOOKING",
      payload: { ...movie, qty }
    });
  };

  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>₹{movie.price}</p>

      <input
        type="number"
        value={qty}
        min="1"
        onChange={(e) => setQty(Number(e.target.value))}
      />

      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
}

export default Moviecard;