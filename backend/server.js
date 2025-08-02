import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import Product from "./models/product.model.js";

dotenv.config(); // Must come AFTER checking path

const app = express();

app.use(express.json()); //middleware to parse incoming JSON
//allows us to accept the JSON data in the req.body

app.post("/api/products",async (req,res)=>{
  const product = req.body; //user will send the data

   if(!product.name || !product.price || !product.image){
    return res.status(400).json({success:false , message:"Please provide all the fields"});
   }

   const newProduct = new Product(product);

   try
   {
    await newProduct.save();
    res.status(201).json({ success: true, product: newProduct });
   }
   catch(error)
   {
    console.error("Error in creating product:",error.message);
    res.status(500).json({success:false,message:"Server Error"});
   }
   
});

app.delete("/api/products/:id",async(req,res)=>{
  const { id } = req.params;
  // console.log("id:",id);
  try {
    await Product.find
  } catch (error) {
    
  }
});

console.log("MONGO_URI:", process.env.MONGO_URI); // 👈 Check if it's still undefined

app.listen(5000, () => {
  connectDB();
  console.log("Server started at  http://localhost:5000");
});
