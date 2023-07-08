import { Router } from "express";

import validateTransaction from "../middlewares/validateTransaction.js";
import transactionSchema from "../schemas/transaction.schema.js";
import makeTransaction from "../controllers/transaction.controller.js";

const transactionsRouter = Router();

transactionsRouter.post("/nova-transacao/:tipo/", validateTransaction(transactionSchema),
    makeTransaction);

export default transactionsRouter;