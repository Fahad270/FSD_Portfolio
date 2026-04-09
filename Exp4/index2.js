const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}))//express middleware
app.use(express.json())

app.post("/send", (req, res) => { 

    //will recieve the data form the frontend and will show it on the frontend......
    const {name,branch,year } = req.body;
    res.json({ "name": name, "branch": branch, "year": year });
});

app.listen("3000", (e) => {
    console.log("Server is running!");

})