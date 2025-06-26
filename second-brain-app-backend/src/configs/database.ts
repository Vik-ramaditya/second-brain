import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { MONGODB_URI } from "../utils/constant";

export const connectDB = async () => {
  try {
    console.log("MONGO_URL VALUE :",MONGODB_URI)
    console.log("MONGO_URL VALUE :",process.env.MONGO_URI)

    const connectionInstance = await mongoose.connect(process.env.MONGO_URI!,{
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS:45000,
      retryWrites: true 
    });
    console.log(
      `MongoDB connected on DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MongoDB connection failed: ${error}`);
    process.exit(1);
  }
};
