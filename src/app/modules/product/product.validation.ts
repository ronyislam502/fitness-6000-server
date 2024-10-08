import { z } from "zod";

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    image: z.string(),
    category: z.string(),
    quantity: z.number(),
    stock: z.number(),
  }),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    stock: z.number().optional(),
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
