function Header({ totalTickets }) {
  return (
    <header className="header">
      <h1>BookMyShow Mini Clone</h1>
      <p>Total Tickets: {totalTickets}</p>
    </header>
  );
}

export default Header;