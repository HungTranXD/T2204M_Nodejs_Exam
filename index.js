require("dotenv").config();
const express = require("express");
const app = express();
// Connect to database
const connectToDb = require("./src/database");
connectToDb();
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
  secret: process.env.SESSION_SECRET, // Add a secret key to sign the session ID cookie
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 3600000, //miliseconds
    secure: false // lam local thi false, online thi true
  }
}));

// Custom middleware to attach req to res.locals
app.use((req, res, next) => {
    res.locals.req = req;
    next();
  });

// General routes (like home page, about us page...):
const generalRoutes = require('./src/routes/general.route');
app.use('/', generalRoutes);

// Student routes:
const userRoutes = require('./src/routes/user.route');
app.use('/user', userRoutes);
