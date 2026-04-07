import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import routerHandler from "./routes/index.js";
import { errorHandler } from "./errors/errorHandler.js";


dotenv.config();

const createApp = () => {
  // ======================= create APP:
  const app = express();

  // ======================= Middlewares:
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  console.log("hi")

  // ======================== For Test
  // log each request

  // ======================== SECURE

  // ======================== ROUTE Handler
  routerHandler(app)

  // ======================== ERROR Handler
  // Error handler must be last thing
  // errorHandler)

  return app;
};

export default createApp;
