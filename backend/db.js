import mongoose from "mongoose";

mongoose
  // .connect(process.env.MONGO_URI)
  .connect(
    "mongodb+srv://ramveerkacholara:mern_project@cluster0.sawtf0n.mongodb.net/image?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database is connected");
  })
  .catch((e) => {
    console.log("Database is not connect" + e);
  });
