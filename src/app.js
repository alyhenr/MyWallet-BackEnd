import express from 'express';

import routes from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(routes);

app.listen(5000, () => {
    console.log('Server is listening on port 5000.');
});
