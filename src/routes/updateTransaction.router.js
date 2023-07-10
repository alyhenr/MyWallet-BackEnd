import { Router } from "express";

import updateTransactionController from "../controllers/updateTransaction.controller.js";
import validateToken from "../middlewares/validateToken.js";

const updateTransactionRouter = Router();

updateTransactionRouter.put("/editar-registro/:tipo/:id", validateToken, updateTransactionController);

export default updateTransactionRouter;