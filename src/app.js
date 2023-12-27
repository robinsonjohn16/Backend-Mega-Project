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
app.use(express.static);
app.use(cookieParser());  

//* What is Middle Ware?
//? When the user requests a url we perform some task, but we cannot do the work for all user, so we neend some middle checks also called as middleware to make it accessible to some people only

// todo: (err, req, res, next) =>  
export default app;
