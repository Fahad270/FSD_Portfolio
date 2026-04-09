const express = require("express");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(express.json()); // used to read JSON passed in the request parameters..
// app.use(morgan("dev"));  // logging

// Routes

// 1. Home
app.get("/", (req, res) => {
    res.send("Welcome to my Express Server ");
});

// 2. About
app.get("/about", (req, res) => {
    res.send({
        name: "Fahad Syed",
        rollNo: "10913",
        course: "Comps -A"
    });
});

// 3. Contact.. data to be recieve by the frontend...........
//from backend perspective its sending the data and from the frontend perspective its requesting the data 
app.get("/contact", (req, res) => {
    res.send({
        email: "fahad@example.com",
        phone: "91376****"
    });
});

// 4. Register (POST)... to add new  data 
app.post("/register", (req, res) => {
    console.log(req.body); // data from Postman
    res.status(201).send("User Registered ✅");
});

// 5. Update (PUT)...to update the data 
app.put("/update", (req, res) => {
    console.log(req.body);
    res.status(200).send("User Updated 🔄");
});

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000 🔥");
});