function Bookingcart({ bookings }) {
  const totalAmount = bookings.reduce((sum, movie) => sum + movie.price, 0);

  return (
    <div className="booking-cart">
      <h2>Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>No tickets booked</p>
      ) : (
        bookings.map((movie, idx) => (
          <p key={idx}>
            {movie.title} - ₹{movie.price}
          </p>
        ))
      )}
      <h3>Total Amount: ₹{totalAmount}</h3>
    </div>
  );
}

export default Bookingcart;