import { Router } from "express";

import validateTransaction from "../middlewares/validateTransaction.js";
import transactionSchema from "../schemas/transaction.schema.js";
import { makeTransaction } from "../controllers/transaction.controller.js";

const transactionsRouter = Router();
transactionsRouter.use(validateTransaction(transactionSchema));

transactionsRouter.post("/nova-transacao/:tipo/", makeTransaction);

export default transactionsRouter;