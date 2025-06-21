import { Router } from "express";
import { addToCart, clearCart, getCart, removeFromCart, updateCartItem } from "../controllers/cart.controller.js";

const router = Router();

router.route("/:userId").get( getCart);
router.route("/:userId/add").post(addToCart);
router.route("/:userId/update").put( updateCartItem);
router.route("/:userId/remove/:productId").delete( removeFromCart);
router.route("/:userId/clear").delete( clearCart);



export default router;