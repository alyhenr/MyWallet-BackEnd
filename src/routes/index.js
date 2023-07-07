import express from "express";

import authRouter from "./auth.router.js";

const routes = express();
routes.use(authRouter);

export default routes;