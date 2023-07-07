import { Router } from "express";

import { signUp, signIn } from '../controllers/auth.controller.js';
import validateAuth from "../middlewares/validateAuth.js";
import authSchema from "../schemas/auth.schema.js";

const authRouter = Router();
authRouter.use(validateAuth(authSchema));

authRouter.post("/cadastro", signUp);
authRouter.post("/", signIn);

export default authRouter;