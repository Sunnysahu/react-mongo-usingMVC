import express from "express";
import cors from "cors";

import connectDB from "./DBConnect.js";

import dotenv from "dotenv";
import postRoute from "./routes/postRoutes.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  console.log("Hello");

  res.send("Hello Worllld! Hello");
});

app.use("/api", postRoute);
app.listen(port, (err) => {
  if (err) {
    console.error("Port in use:", err.message);
    process.exit(1); // Exit to prevent app crash
  }
  console.log(`Server is running on port ${port}`);
});

// process.on("uncaughtException", (err) => {
//   console.error("There was an uncaught error:", err);
//   process.exit(1); // Mandatory exit after uncaught exception
// });

// process.on("unhandledRejection", (reason, promise) => {
//   console.error("Unhandled Rejection at:", promise, "reason:", reason);
// });
