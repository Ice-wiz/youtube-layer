// src/server.ts
import express from "express";
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 8000;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "layer",
});

// app.get("/", (req, res) => {
//   res.send("hello from 8000");
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
