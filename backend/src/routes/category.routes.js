import { Router } from "express";
import { createCategory, deleteCategory, getAllCategories, getCategoryByName, updateCategory } from "../controllers/category.controller.js";

const router = Router();

router.route("/create").post(createCategory)
router.route("/get").get(getAllCategories)
router.route("/:name").get(getCategoryByName)
router.route("/:name").put(updateCategory)
router.route("/:id").delete(deleteCategory)

export default router;