import express from "express";
import cors from "cors";
import process from "process";
import mongoose from "mongoose";

import helmet from "helmet";
import rateLimit from "express-rate-limit";

import blogRouter from "./routes/blog.route.js";

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 100 requests per windowMs
    message: "Too many requests, please try again later."
  })

const app = express();
app.use(helmet());
app.use(limiter);
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    dbName: "blog"
})
.then(() => {
  console.log("MongoDB connected successfully");
})
.catch((err) => {
  console.log("MongoDB connection error", err);
});

app.use("/api/v1/blog", blogRouter);

export default app;