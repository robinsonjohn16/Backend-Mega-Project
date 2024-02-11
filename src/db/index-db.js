import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB_NAME}`
    );
    console.log(`MongoDB Connected DB Host : ${connectionInstance}`);
    // console.log(connectionInstance);
    // console.log(connectionInstance.connection);
  } catch (error) {
    console.log("DataBase Connection Failed", error);
    // throw error //*This will Exit, But in node we have some other syntax as well.
    process.exit(1);
  }
};

// connectDB();
export default connectDB;
