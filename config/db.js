import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const MongoDB_URI = process.env.MongoDB_URI;

mongoose.connect(MongoDB_URI).then(() => {
    console.log(`MongoDB is Connected Sucessfully...`);
}).catch((error) => {
    console.log(`Db error: ${error}`);
})