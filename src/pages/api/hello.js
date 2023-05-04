import { connectDb } from "@/backend/connect";

const handler = (req, res) => {
  try {
    res.status(200).json({ name: "John Doe" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something went wrong", err });
  }
};
export default connectDb(handler);
