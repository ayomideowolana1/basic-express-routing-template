const express = require("express");
const path = require("path");
require("dotenv").config({ path: "./.env" });

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/index.html"));
});

app.get("/about-me", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/about-me.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/contact-me.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/404.html"));
});

app.listen(process.env.PORT, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Sever started on port: ${process.env.PORT}`);
});
