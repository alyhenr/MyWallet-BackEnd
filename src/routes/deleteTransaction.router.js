import { Router } from "express";

import deleteTransaction from "../controllers/deleteTransaction.controller.js";
import validateToken from "../middlewares/validateToken.js";

const deleteTransactionRouter = Router();

deleteTransactionRouter.delete("/delete/:item_id", validateToken, deleteTransaction);

export default deleteTransactionRouter;