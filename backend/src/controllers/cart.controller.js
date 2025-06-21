import { Cart } from "../models/cart.model.js";
import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getCart = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const cart = await Cart.findOne({ user: userId }).populate("items.product", "name price");

    if (!cart) {
        return res.status(200).json(new ApiResponse(200, [], "Cart is empty"));
    }

    res.status(200).json(new ApiResponse(200, cart, "Cart fetched successfully"));
});

export const addToCart = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
        throw new ApiError(400, "Product ID and quantity are required");
    }

    const productExists = await Product.findById(productId);
    if (!productExists) {
        throw new ApiError(404, "Product not found");
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
        cart = await Cart.create({
            user: userId,
            items: [{ product: productId, quantity }]
        });
    } else {
        const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity });
        }
        await cart.save();
    }

    res.status(201).json(new ApiResponse(201, cart, "Item added to cart"));
});

export const updateCartItem = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const { productId, quantity } = req.body;

    if (!productId || quantity == null) {
        throw new ApiError(400, "Product ID and quantity are required");
    }

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
        throw new ApiError(404, "Cart not found");
    }

    const item = cart.items.find(item => item.product.toString() === productId);
    if (!item) {
        throw new ApiError(404, "Product not found in cart");
    }

    item.quantity = quantity;
    await cart.save();

    res.status(200).json(new ApiResponse(200, cart, "Cart item updated"));
});

export const removeFromCart = asyncHandler(async (req, res) => {
    const { userId, productId } = req.params;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
        throw new ApiError(404, "Cart not found");
    }

    cart.items = cart.items.filter(item => item.product.toString() !== productId);
    await cart.save();

    res.status(200).json(new ApiResponse(200, cart, "Item removed from cart"));
});

// Clear entire cart
export const clearCart = asyncHandler(async (req, res) => {
    const { userId } = req.params;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
        throw new ApiError(404, "Cart not found");
    }

    cart.items = [];
    await cart.save();

    res.status(200).json(new ApiResponse(200, cart, "Cart cleared"));
});
