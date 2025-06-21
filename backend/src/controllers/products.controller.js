import { asyncHandler } from "../utils/asyncHandler.js";
import { Product } from "../models/product.model.js";
import { Category } from "../models/category.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, type, stock, ratings, image } = req.body;

  if ([name, description, price, category, type, stock, ratings, image].some(field => !field || field?.trim?.() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const categoryDoc = await Category.findOne({ name: category.trim() });
  if (!categoryDoc) {
    throw new ApiError(404, `Category "${category}" not found`);
  }

  const typeExists = categoryDoc.types.some(t => t.name === type.trim());
  if (!typeExists) {
    throw new ApiError(400, `Type "${type}" not found in category "${category}"`);
  }

  const imageLocalPath = image.trim();
  if (!imageLocalPath) {
    throw new ApiError(400, "Product image is required");
  }

  const product = await Product.create({
    name: name.trim(),
    description: description.trim(),
    price: Number(parseFloat(price).toFixed(2)),
    category: categoryDoc._id,
    type: type.trim(),
    stock: Number(stock),
    ratings: Number(ratings),
    image,
  });

  if (!product) {
    throw new ApiError(500, "Product creation failed");
  }

  return res.status(201).json(new ApiResponse(201, product, "Product created successfully"));
});
export const getAllProducts = asyncHandler(async (req, res) => {
  const { category, type, name, minPrice, maxPrice, sortBy, page = 1, limit = 20 } = req.query;

  const filter = {};

  if (category) {
    const catDoc = await Category.findOne({ name: category.trim() });
    if (catDoc) filter.category = catDoc._id;
  }

  if (type) {
    filter.type = type.trim();
  }

  if (name) {
    filter.name = { $regex: name.trim(), $options: "i" };
  }

  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = parseFloat(minPrice);
    if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
  }

  const sortOption = {};
  if (sortBy === "price_asc") sortOption.price = 1;
  else if (sortBy === "price_desc") sortOption.price = -1;
  else if (sortBy === "latest") sortOption.createdAt = -1;

  const products = await Product.find(filter)
    .populate("category", "name")
    .sort(sortOption)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Product.countDocuments(filter);

  res.status(200).json({
    total,
    page: Number(page),
    limit: Number(limit),
    products
  });
});

export const getProductsByCategoryName = asyncHandler(async (req, res) => {
  const { categoryName } = req.params;

  const categoryDoc = await Category.findOne({ name: categoryName.trim() });
  if (!categoryDoc) {
    throw new ApiError(404, `Category "${categoryName}" not found`);
  }

  const products = await Product.find({ category: categoryDoc._id }).populate("category", "name");

  res.status(200).json({
    total: products.length,
    products
  });
});

export const getProductsByCategoryAndType = asyncHandler(async (req, res) => {
  const { categoryName, typeName } = req.params;

  const categoryDoc = await Category.findOne({ name: categoryName.trim() });
  if (!categoryDoc) {
    throw new ApiError(404, `Category "${categoryName}" not found`);
  }

  const typeExists = categoryDoc.types.some(t => t.name.toLowerCase() === typeName.trim().toLowerCase());
  if (!typeExists) {
    throw new ApiError(404, `Type "${typeName}" not found in category "${categoryName}"`);
  }

  const products = await Product.find({
    category: categoryDoc._id,
    type: typeName.trim()
  }).populate("category", "name");

  return res.status(200).json({
    total: products.length,
    products
  });
});


export const updateProduct = asyncHandler(async (req, res) => {
  const { category, type, ...updates } = req.body;

  if (category) {
    const catDoc = await Category.findOne({ name: category.trim() });
    if (!catDoc) {
      throw new ApiError(404, `Category "${category}" not found`);
    }
    updates.category = catDoc._id;

    if (type) {
      const typeExists = catDoc.types.some(t => t.name === type.trim());
      if (!typeExists) {
        throw new ApiError(400, `Type "${type}" not found in category "${category}"`);
      }
      updates.type = type.trim();
    }
  }

  if (req.file?.path) {
    updates.images = [req.file.path];
  }

  const updated = await Product.findByIdAndUpdate(req.params.id, updates, {
    new: true,
    runValidators: true
  });

  if (!updated) {
    throw new ApiError(404, "Product not found");
  }

  res.status(200).json({
    message: "Product updated successfully",
    product: updated
  });
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const deleted = await Product.findByIdAndDelete(req.params.id);
  if (!deleted) {
    throw new ApiError(404, "Product not found");
  }

  res.status(200).json({
    message: "Product deleted successfully"
  });
});
