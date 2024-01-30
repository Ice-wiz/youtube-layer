// src/server.ts
import express, { Application, Request, Response } from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';
const cors = require("cors");
import bodyParser from 'body-parser';
import AuthRoutes from './routes/AuthRoutes';
import EditorRoutes from './routes/EditorRoutes';
import VideoRoutes from './routes/VideoRoutes';
import YoutuberRoutes from './routes/YoutuberRoutes';

const port = 8000;

const app:Application = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

connectDB();

// Default
app.get("/api", (req: Request, res: Response) =>  {
  res.status(201).json({ message: "you are at... /api" });
})

// User Route
app.use("/api/auth", AuthRoutes);
app.use("api/editor",EditorRoutes);
app.use("api/vid-url",VideoRoutes);
app.use("api/youtuber",YoutuberRoutes);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
