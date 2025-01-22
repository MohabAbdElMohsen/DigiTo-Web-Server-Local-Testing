const express = require("express");
const path = require("path");
const env = require("dotenv");

const app = express();
env.config();

app.use(express.static(__dirname + "/DigiTo"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "DigiTo/index.html"));
});

app.listen(process.env.PORT, error => {
    if (error)
        console.log(error);
});