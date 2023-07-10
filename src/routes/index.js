import express from "express";

import authRouter from "./auth.router.js";
import homeRouter from "./home.router.js";
import transactionsRouter from "./transactions.router.js";
import deleteTransactionRouter from "./deleteTransaction.router.js";
import updateTransactionRouter from "./updateTransaction.router.js";

const routes = express();
routes.use(authRouter);
routes.use(homeRouter);
routes.use(transactionsRouter);
routes.use(deleteTransactionRouter);
routes.use(updateTransactionRouter);

export default routes;