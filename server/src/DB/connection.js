import mongoose from "mongoose";
import { MESSAGES } from "../constants/index.js";

/**
 * @description Establishes connection to MongoDB Atlas.
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.log(MESSAGES.DATABASE.CONNECTION_ERROR);
    console.log(`ERROR - from connectDB: ${error.message}!`);
    process.exit(1)
  }
};

/**
 * @description Cleanly closes the MongoDB connection.
 * Does not exit the process; leaves that to the caller.
 */
export const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    console.info(MESSAGES.DATABASE.DISCONNECTED);
  } catch (error) {
    // We throw so the shutdown handler knows something went wrong
    throw new Error(`DB Disconnection Failed: ${error.message}`);
  }
};

export default connectDB;
