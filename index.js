const express = require("express");
const mainRouter = require("./routes/index");
const { connectToMongo } = require('./db');
const cors = require("cors");
const port = process.env.PORT || 3000;
require('dotenv').config();
connectToMongo();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to the API"
  });
});

app.use("/api/v1", mainRouter);


app.listen(port);