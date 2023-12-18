// require("dotenv").config({ path: "../env" });
// console.log("This is Index File");
import mongoose from "mongoose";
import connectDB from "./db/index-db.js";
import dotenv from "dotenv";

// dotenv.config({ path: "../env" });
connectDB();
