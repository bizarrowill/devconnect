const express = require("express");
const mongoose = require("mongoose");

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Conect to MongoDB via Mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hola el World"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on Port ${port}`));
