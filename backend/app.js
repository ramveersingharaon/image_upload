import express from "express";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import cors from "cors";
import cloudinary from "cloudinary";
import "./db.js";
import { router } from "./routes.js";

const app = express();
// const port = process.env.PORT || 4000;
const port = 4000;

app.use(bodyParser({ limit: "50mb" }));
app.use(cors());
app.use("/", router);
// app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

cloudinary.v2.config({
  cloud_name: "dcxrzhoaj",
  api_key: "971368918344559",
  api_secret: "mxUsn9CM-CKu07TpiOa_qdW4z4U",
});
app.listen(port, () => {
  console.log(`The server is running port http://localhost:${port}`);
});
