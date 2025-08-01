import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { TransactionService } from "./transaction.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { PayType } from "./transaction.interface";

// add money
const addMoney = catchAsync(async (req: Request, res: Response) => {
  const type = PayType.ADD_MONEY;
  const { role, id: userId } = req.user;
  const addMoney = await TransactionService.addMoney(
    req.body,
    type,
    role,
    userId
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Add Money successfully",
    data: addMoney,
  });
});

//withdraw Money
const withdrawMoney = catchAsync(async (req: Request, res: Response) => {
  const type = PayType.WITHDRAW;
  const { role, id: userId } = req.user;
  const withdrawMoney = await TransactionService.withdrawMoney(
    req.body,
    type,
    role,
    userId
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Money withdraw successfully",
    data: withdrawMoney,
  });
});

//send Money
const sendMoney = catchAsync(async (req: Request, res: Response) => {
  const type = PayType.SEND_MONEY;
  const { role, id: userId } = req.user;
  const sendMoney = await TransactionService.sendMoney(
    req.body,
    type,
    role,
    userId
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Send Money successfully",
    data: sendMoney,
  });
});

//get Transaction History by me
const getTransactionHistory = catchAsync(
  async (req: Request, res: Response) => {
    const { id: userId } = req.user;
    const getTransaction = await TransactionService.getTransactionHistory(
      userId
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Retrieve Transaction History successfully",
      data: getTransaction,
    });
  }
);

//get Transaction History by admin
const getAllTransactionHistory = catchAsync(
  async (req: Request, res: Response) => {
    const getAllTransaction =
      await TransactionService.getAllTransactionHistory();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Retrieve All Transaction History successfully",
      data: getAllTransaction,
    });
  }
);

export const TransactionController = {
  addMoney,
  withdrawMoney,
  sendMoney,
  getTransactionHistory,
  getAllTransactionHistory,
};
