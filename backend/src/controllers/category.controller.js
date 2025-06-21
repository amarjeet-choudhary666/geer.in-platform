import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Category } from "../models/category.model.js";

const createCategory = asyncHandler(async (req, res) => {
  const { name, description, types } = req.body;

  if (!name) throw new ApiError(400, "Category name is required");

  const existing = await Category.findOne({ name: new RegExp(`^${name.trim()}$`, "i") });
  if (existing) throw new ApiError(400, "Category already exists");

  const category = await Category.create({
    name: name.trim(),
    description: description?.trim() || "",
    types: Array.isArray(types) ? types : []
  });

  res.status(201).json(new ApiResponse(201, category, "Category created successfully"));
});

const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find().sort({ name: 1 });
  res.status(200).json(new ApiResponse(200, categories, "Categories fetched successfully"));
});

const getCategoryByName = asyncHandler(async (req, res) => {
  const { name } = req.params;

  const category = await Category.findOne({ name: new RegExp(`^${name.trim()}$`, "i") });
  if (!category) throw new ApiError(404, "Category not found");

  res.status(200).json(new ApiResponse(200, category, "Category fetched successfully"));
});

const updateCategory = asyncHandler(async (req, res) => {
  const { name } = req.params;
  const { newName, description, types } = req.body;

  const category = await Category.findOne({ name: new RegExp(`^${name.trim()}$`, "i") });
  if (!category) throw new ApiError(404, "Category not found");

  if (newName && newName.trim() !== category.name) {
    const duplicate = await Category.findOne({ name: newName.trim() });
    if (duplicate) throw new ApiError(400, "New category name already exists");
    category.name = newName.trim();
  }

  if (description !== undefined) category.description = description.trim();
  if (types !== undefined && Array.isArray(types)) category.types = types;

  await category.save();

  res.status(200).json(new ApiResponse(200, category, "Category updated successfully"));
});

const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(400, "Category ID is required");
  }

  const deleted = await Category.findByIdAndDelete(id);

  if (!deleted) {
    throw new ApiError(404, "Category not found");
  }

  res.status(200).json(
    new ApiResponse(200, null, "Category deleted successfully")
  );
});


export {
  createCategory,
  getAllCategories,
  getCategoryByName,
  updateCategory,
  deleteCategory
};
