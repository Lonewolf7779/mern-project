import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

dotenv.config(); // Must come AFTER checking path

const app = express();

app.get("/products",(req,res)=>{});

console.log("MONGO_URI:", process.env.MONGO_URI); // 👈 Check if it's still undefined

app.listen(5000, () => {
  connectDB();
  console.log("Server started at  http://localhost:5000 ");
});
