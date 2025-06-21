import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({ extended: true,  limit: "16kb" }));
app.use(cookieParser())
app.use(express.static("public"));

app.use(
    cors({
        origin: "http://localhost:3001"
    })
)

import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js"
import categoryRoutes from "./routes/category.routes.js"
import reviewRoutes from "./routes/review.routes.js"
import cartRoutes from "./routes/cart.routes.js"

app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/cart", cartRoutes)

export {app}