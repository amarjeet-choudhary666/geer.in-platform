import {Router} from "express";
import { createProduct, getAllProducts, getProductsByCategoryAndType, getProductsByCategoryName } from "../controllers/products.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/create").post(createProduct)
router.route('/').get(getAllProducts);
router.route("/:categoryName").get(getProductsByCategoryName)
router.route("/:categoryName/:typeName").get(getProductsByCategoryAndType)


export default router