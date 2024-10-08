import buildQuery from "../../builder/queryBuilder";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);

  return result;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const searchAbleFields = ["name", "category"];
  const result = await buildQuery(Product.find(), query, searchAbleFields);
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

const updateProductFromDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
