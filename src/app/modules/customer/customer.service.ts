import { Product } from "../product/product.model";
import { TCustomer } from "./customer.interface";
import { Customer } from "./customer.model";

const createCustomerIntoDB = async (payload: TCustomer) => {
  const result = await Customer.create(payload);
  const { cartItems } = payload;

  for (const item of cartItems) {
    const product = await Product.findById(item.id);
    if (product && product.stock >= item.quantity) {
      product.stock -= item.quantity;
      await product.save();
    } else {
      throw new Error(
        `Insufficient stock for product with ID ${item?.id} and name: ${product?.name}`
      );
    }
  }
  return result;
};

const getSingleCustomerFromDB = async (email: string) => {
  const result = await Customer.findOne({ email });
  return result;
};

export const CustomerServices = {
  createCustomerIntoDB,
  getSingleCustomerFromDB,
};
