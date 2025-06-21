import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, default: "" },

  types: [
    {
      name: { type: String, required: true },
      description: { type: String, default: "" },
    }
  ]
}, { timestamps: true });

export const Category = mongoose.model("Category", categorySchema);
