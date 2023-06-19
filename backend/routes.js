import express from "express";
import cloudinary from "cloudinary";
import { User } from "./model.js";

export const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { name, title, avatar } = req.body;
    console.log(name, title, avatar);

    const myCloud = await cloudinary.v2.uploader.upload(avatar, {
      folder: "portfolio",
    });
    const user = new User({
      name,
      title,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });
    await user.save();

    return res.status(200).json({
      message: "user create successfully",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
});

router.get("/user", async (req, res) => {
  try {
    const user = await User.find({});

    console.log(user);
    return res.status(200).json({
      message: "All Users here",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
});
