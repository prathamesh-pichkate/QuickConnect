import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

console.log("Mongodb URL",process.env.MONGOBD_URL);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOBD_URL);
        console.log("Connected to MongoDB", conn.connection.host);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectDB;