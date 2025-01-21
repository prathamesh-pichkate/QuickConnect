import express from 'express'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const PORT  = process.env.PORT || 5000;

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json({ limit: "10mb" })); //allow to extract the data from the body
app.use(cookieParser()); //helps to parse the cookie data
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}` );
    connectDB();
})
