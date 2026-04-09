//What is EJS :- HTML + JS variables kinda like jsx........
const express = require("express");
const app = express();
app.set("view engine", "ejs")

app.get("/profile", (req, res) => {
    res.render("profile", {
        name: "Fahad Syed",
        branch: "Computer Engineering",
        year: "SE"
    });
});

app.listen(3000, () => {
    console.log("Server is running!");
})