import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    }
    await mongoose.connection("mongodb://localhost:27017/computer");
    console.log("connect to DB Success");
  } catch (err) {
    console.log(err);
  }
};

export default connectToDB;
