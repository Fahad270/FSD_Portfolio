import React,{useState} from "react";
import Header from "./components/Header";
import Movielist from "./components/Movielist";
import Bookingcart from "./components/Bookingcart"; 
import './App.css';

function App() {
  const movies = [
    { id: 1, title: "Dhurandhar 2 ", price: 200 }, { id: 2, title: "Avengers", price: 350 }, { id: 3, title: "Inception", price: 290 }
  ];
  
  const [bookings, setBookings] = useState([]);

  const addBooking = (movie) => {
    setBookings([...bookings, movie]);
  }
  return (
    <div className="App">
      <Header totalTickets={bookings.length} />
      <Movielist movies={movies}  addBooking={addBooking}/>
      <Bookingcart bookings={bookings}/>
    </div>
  );

}

export default App;
