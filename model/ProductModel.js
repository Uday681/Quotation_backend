import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
          name: { type: String, required: true },
          description: { type: String, required: true },
          cost: { type: Number, required: true },
          discount: { type: Number, required: true },
},{timestamps: true});

const Product = mongoose.model("product", productSchema);

export default Product;