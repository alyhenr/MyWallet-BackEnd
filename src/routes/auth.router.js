import { Router } from "express";

import { signUp, signIn } from '../controllers/auth.controller.js';
import validateAuth from "../middlewares/validateAuth.js";
import authSchema from "../schemas/auth.schema.js";

const authRouter = Router();

authRouter.post("/", validateAuth(authSchema, "login"), signIn);
authRouter.post("/cadastro", validateAuth(authSchema, "cadastro"), signUp);

export default authRouter;