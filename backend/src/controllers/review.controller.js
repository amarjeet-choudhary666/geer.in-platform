import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Review } from "../models/review.model.js";
import { User } from "../models/user.models.js"
import { Product } from "../models/product.model.js";

// Create a Review
export const createReview = asyncHandler(async (req, res) => {
  const { user, product, rating, comment } = req.body;

  if (!user || !product || !rating) {
    throw new ApiError(400, "User, product, and rating are required");
  }

  const userExists = await User.findById(user);
  const productExists = await Product.findById(product);

  if (!userExists || !productExists) {
    throw new ApiError(404, "User or product not found");
  }

  const existingReview = await Review.findOne({ user, product });
  if (existingReview) {
    throw new ApiError(409, "Review already submitted by this user for this product");
  }

  const newReview = await Review.create({
    user,
    product,
    rating,
    comment: comment?.trim() || "",
  });

  res.status(201).json(
    new ApiResponse(201, newReview, "Review created successfully")
  );
});

// Get All Reviews
export const getAllReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find()
    .populate("user", "name email")
    .populate("product", "name price");

  res.status(200).json(new ApiResponse(200, reviews, "All reviews fetched"));
});

