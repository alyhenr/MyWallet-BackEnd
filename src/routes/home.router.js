import { Router } from "express";

import getUserInfo from "../controllers/home.controller.js";
import validateToken from "../middlewares/validateToken.js";

const homeRouter = Router();

homeRouter.get("/home", validateToken, getUserInfo);

export default homeRouter;