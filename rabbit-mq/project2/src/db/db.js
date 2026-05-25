import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/rabbit-mq-project")
    console.log("data base connection done ")
}