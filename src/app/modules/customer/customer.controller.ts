import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";
import sendResponse from "../../utilities/sendResponse";
import { CustomerServices } from "./customer.service";

const createCustomer = catchAsync(async (req, res) => {
  const result = await CustomerServices.createCustomerIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer create successfully order",
    data: result,
  });
});

const getSingleCustomer = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await CustomerServices.getSingleCustomerFromDB(email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer retrieved successfully",
    data: result,
  });
});

export const CustomerControllers = {
  createCustomer,
  getSingleCustomer,
};
