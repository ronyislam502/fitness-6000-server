import { model, Schema } from "mongoose";

import { ProductModel, TProduct } from "./product.interface";

const productSchema = new Schema<TProduct, ProductModel>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  category: {
    type: String,
    required: [true, "category is required"],
  },
  image: {
    type: String,
    required: [true, "category is required"],
  },
  stock: {
    type: Number,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

productSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre("findOne", function (next) {
  this.findOne({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

productSchema.statics.isProductExists = async function (id: string) {
  const existingProduct = await Product.findOne({ id });

  return existingProduct;
};

export const Product = model<TProduct, ProductModel>("Product", productSchema);
