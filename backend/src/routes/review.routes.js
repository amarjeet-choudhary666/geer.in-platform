import { Router } from "express";
import { createReview, getAllReviews, } from "../controllers/review.controller.js";


const router = Router();

router.route("/create").post(createReview);
router.route("/").get(getAllReviews);


export default router