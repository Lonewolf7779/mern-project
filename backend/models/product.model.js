import mongoose from "mongoose";
//moongoose is an ODM(Object data modelling) library for mongoDB and node js.
//It allows you to define schemas for your MongoDB collection 
//Schema---it is actiually a blueprint for your your document like a structure or a  contract
const productSchema = new mongoose.Schema({

   name:{
    type:String,
    required:true
   },

   price:{
    type:String,
    required:true
   },

   image:{
    type:String,
    required:true
   },
},
{
    timestamps:true  //created at and updated at
});

const Product = mongoose.model('Product',productSchema);
// model() = Creates a class (model) based on the schema
// It connects the name "Product" with the productSchema.
// Now, you can use Product in your code to create, read, update, and delete documents in MongoDB.

// This will create/use a MongoDB collection called products
//  (note: model name is singular, MongoDB makes it plural automatically).

export default Product;