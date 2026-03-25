import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Home from "./components/Home";
import MovieList from "./components/Movielist";
import BookingCart from "./components/Bookingcart";
import About from "./components/About";

function App() {
  const bookings = useSelector((state) => state.bookings);

  return (
    <Router>
      <Header totalTickets={bookings.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/cart" element={<BookingCart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;