import { z } from "zod";

const createCustomerValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    address: z.string(),
  }),
});

export const CustomerValidations = {
  createCustomerValidationSchema,
};
