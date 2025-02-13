import express from 'express'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { app,server } from './lib/socket.js';


const PORT  = process.env.PORT || 5000;
const __dirname = path.resolve();

const allowedOrigins = [
  "http://localhost:5173", // Local development
  process.env.FRONTEND_URL, // Load from .env
].filter(Boolean);


app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allows cookies & authentication headers
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
}));


app.use(express.json({ limit: "10mb" })); //allow to extract the data from the body
app.use(cookieParser()); //helps to parse the cookie data
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
  }

server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}` );
    connectDB();
})
