const express = require("express");
const axios = require("axios");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const API_KEY = "e5afca4867a8368e916c82431393d58e"; // replace

// Home page
app.get("/", (req, res) => {
  res.render("index", { result: null });
});

// Form submit
app.post("/check", async (req, res) => {
  const city = req.body.city;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = response.data.list;

    // 🔥 Check tomorrow rain
    let willRain = false;

    for (let i = 0; i < data.length; i++) {
      if (data[i].dt_txt.includes("12:00:00")) {
        const weather = data[i].weather[0].main;
        if (weather.toLowerCase().includes("rain")) {
          willRain = true;
        }
      }
    }

    res.render("index", {
      result: willRain
        ? `Yes, it will rain tomorrow in ${city}`
        : `No rain tomorrow in ${city}`,
    });

  } catch (err) {
    res.render("index", { result: "Error fetching data ❌" });
  }
});

app.listen(3000, () => {
  console.log("Server running 🔥");
});