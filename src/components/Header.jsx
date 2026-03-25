import { Link } from "react-router-dom";

function Header({ totalTickets }) {
  return (
    <div className="header">
      <h2>🎬 BookMyShow Clone</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/cart">Cart ({totalTickets})</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Header;