import express from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { WalletController } from "./wallet.controller";

const walletRoute = express.Router();

walletRoute.get(
  "/",
  checkAuth(Role.ADMIN),
  WalletController.getAllWalletsByRole
);

walletRoute.get(
  "/me",
  checkAuth(Role.AGENT, Role.USER),
  WalletController.getMeWallet
);

walletRoute.patch(
  "/:id/block",
  checkAuth(Role.ADMIN),
  WalletController.blockWallet
);

walletRoute.patch(
  "/:id/unblock",
  checkAuth(Role.ADMIN),
  WalletController.unblockWallet
);
export default walletRoute;
