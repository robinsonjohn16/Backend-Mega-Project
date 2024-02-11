// require("dotenv").config({ path: "../env" });
// console.log("This is Index File");
import mongoose from "mongoose";
import connectDB from "./db/index-db.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "../.env" });
//? Actually Async await returns a Promise and we can use .then and .catch after running the code

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
    app.listen(process.env.PORT || 80);
    console.log("Server is Running at port", process.env.PORT);
  })
  .catch((err) => console.log("DataBase Connected Issue!", err));
