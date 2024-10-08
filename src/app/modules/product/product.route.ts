import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/", ProductControllers.createProduct);

router.get("/", ProductControllers.getAllProducts);

router.get("/:id", ProductControllers.getSingleProduct);

router.patch("/:id", ProductControllers.updateProduct);

router.delete("/:id", ProductControllers.deleteProducts);

export const ProductRoutes = router;
