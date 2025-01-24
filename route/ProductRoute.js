import express from "express";
import {getAllProduct, createProduct, deleteProduct, updateProduct, searchProduct} from "../controllers/ProductController.js";

const router = express.Router();

router.get("/",getAllProduct);
router.post("/createProduct", createProduct);
router.put("/updateProduct/:id",updateProduct);
router.delete("/delete/:id",deleteProduct);

router.get("/search", searchProduct);


export default router;