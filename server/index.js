import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from './routes/posts.routes.js';

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5000;
const URL = process.env.ATLAS_URI;

mongoose
  .connect(URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`BOOOM! Server running on port: ${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

