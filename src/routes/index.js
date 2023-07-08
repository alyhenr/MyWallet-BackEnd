import express from "express";

import authRouter from "./auth.router.js";
import homeRouter from "./home.router.js";
import transactionsRouter from "./transactions.router.js";

const routes = express();
routes.use(authRouter);
routes.use(homeRouter);
routes.use(transactionsRouter);

export default routes;