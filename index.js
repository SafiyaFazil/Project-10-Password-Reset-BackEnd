import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDb from "./Database/dbconfig.js";
import userRouter from "./Routers/User.Router.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api", userRouter);

app.get("/", async (req, res) => {
  // for testing
  try {
    console.log("server working");
    res.status(200).json({ message: "working" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "error in server side" });
  }
});

app.listen(port, () => {
  console.log("app is listening on port>>", port);
});

ConnectDb();
