type TOrderItem = {
  id: string;
  quantity: number;
};
export type TCustomer = {
  name: string;
  email: string;
  phone: string;
  address: string;
  cartItems: TOrderItem[];
};
