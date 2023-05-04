import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  try {
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    });
    return handler(req, res);
  } catch (err) {
    console.log(err);
    res.json({ message: "bad connections", err });
  }
};

export { connectDb };
