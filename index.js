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

app.use("/api/v1", mainRouter);


app.listen(port);