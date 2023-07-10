import { Router } from "express";

import validateTransaction from "../middlewares/validateTransaction.js";
import transactionSchema from "../schemas/transaction.schema.js";
import updateTransactionController from "../controllers/updateTransaction.controller.js";

const updateTransactionRouter = Router();

updateTransactionRouter.put("/editar-registro/:tipo/:id", validateTransaction(transactionSchema), updateTransactionController);

export default updateTransactionRouter;