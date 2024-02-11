import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(
  express.json({
    limit: "16kb",  
  })
);
//* Before we needed Body Parser for this
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // File Folder
app.use(cookieParser());  

//* What is Middle Ware?
//? When the user requests a url we perform some task, but we cannot do the work for all user, so we neend some middle checks also called as middleware to make it accessible to some people only

// todo: (err, req, res, next) =>

// Routes Import
import userRouter from "./routes/user.route.js";

// Router Declaration
//? we cannot use app.get here as we have imported Roters, so middle ware is needed
app.use("/api/v1/users", userRouter);

export default app;
