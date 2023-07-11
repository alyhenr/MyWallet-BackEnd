import express from 'express';
import cors from "cors";
import dotenv from "dotenv";

import routes from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
app.use(routes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})
