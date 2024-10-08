import express from "express";
import { CustomerControllers } from "./customer.controller";

const router = express.Router();

router.post("/", CustomerControllers.createCustomer);

router.get("/customer-info", CustomerControllers.getSingleCustomer);

export const CustomerRoutes = router;
