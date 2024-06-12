const express = require("express");
const mainRouter = require("./routes/index");
const cors = require("cors");
const port = process.env.PORT || 3000;
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);


app.listen(port);