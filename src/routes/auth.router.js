import { Router } from "express";

import { signUp, signIn } from '../controllers/auth.controller.js';
import validateAuth from "../middlewares/validateAuth.js";
import authSchema from "../schemas/auth.schema.js";

const authRouter = Router();

authRouter.post("/cadastro", validateAuth(authSchema), signUp);
authRouter.post("/", validateAuth(authSchema), signIn);

export default authRouter;