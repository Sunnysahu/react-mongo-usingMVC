import path from "path";

import express from "express";
import bodyParser from "body-parser";

import { fileURLToPath } from "url";

import multer from "multer";

const postRoute = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import postController from "../controllers/postController.js";

postRoute.use(bodyParser.json());
postRoute.use(bodyParser.urlencoded({ extended: true }));

postRoute.use(express.static(path.join("public")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/Images"), (error, success) => {
      if (error) {
        console.log("Error at Multer", error);
      } else {
        console.log("Success at Multer", success);
      }
    });
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName, (error, success) => {
      if (error) {
        console.log("Error at Multer", error);
      } else {
        console.log("Success at Multer", success);
      }
    });
  },
});

const upload = multer({
  storage: storage,
});

postRoute.post(
  "/createpost",
  upload.single("image"),
  postController.createpost
);

postRoute.get("/getpost", postController.getpost);

export default postRoute;
