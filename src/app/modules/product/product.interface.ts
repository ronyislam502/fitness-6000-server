import { Model } from "mongoose";

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  isDeleted: boolean;
};

export interface ProductModel extends Model<TProduct> {
  isProductExists(id: string): Promise<TProduct | null>;
}
