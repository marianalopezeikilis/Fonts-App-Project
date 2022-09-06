import express from "express";
import cors from "cors";
import indexRouter from './rutas/indexRouter.js';
import newsRouter from './rutas/newsRouter.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', indexRouter);
app.use('/api/news', newsRouter);

const port = 3000
app.listen(port, () => console.log(`App listening on port ${port}!`))