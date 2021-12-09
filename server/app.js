const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
// db connection
dotenv.config({ path: "./config.env" });

require("./db/conn");

// const User = require("./models/userSchema");
app.use(express.json());
app.use(require("./router/auth"));

const PORT = process.env.PORT;

// const middleware = (req, res, next) => {
//   console.log(`hello middle ware`);
//   next();
// };

// app.get("/", (req, res) => {
//   res.send(`hello from the server`);
// });
app.get("/contact", (req, res) => {
  res.send(`hello contact from the server`);
});
// app.get("/signin", (req, res) => {
//   res.send(`hello signin from the server`);
// });

app.listen(PORT, () => {
  console.log(`server is runig on port ${PORT}`);
});
