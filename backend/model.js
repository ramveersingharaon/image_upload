import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  title: String,
  avatar: {
    public_id: String,
    url: String,
  },
});

export const User = mongoose.model("User", userSchema);
