require("dotenv").config();
const express = require("express");
const app = express();
const database = require("./src/database");
database();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running... listen to port " + PORT);
})

app.set("view engine", "ejs");
app.use(express.static("public")); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const session = require('express-session');
app.use(session({
  secret: 't2204m', // Add a secret key to sign the session ID cookie
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 3600000, //miliseconds
    secure: false // lam local thi false, online thi true
  }
}));