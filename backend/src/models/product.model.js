import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  type: { type: String, required: true }, 
  image: {type: String, required: true},
  ratings: { type: Number, default: 0 },
}, { timestamps: true });


export const Product = mongoose.model("Product", productSchema);
