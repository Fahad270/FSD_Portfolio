import { useSelector } from "react-redux";

function Bookingcart() {
  const bookings = useSelector((state) => state.bookings);

  const totalAmount = bookings.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        bookings.map((item, i) => (
          <p key={i}>
            {item.title} x {item.qty} = ₹{item.price * item.qty}
          </p>
        ))
      )}

      <h3>Total: ₹{totalAmount}</h3>
    </div>
  );
}

export default Bookingcart;