import express from "express";
import cors from "cors";
import indexRouter from './rutas/indexRouter.js';
import newsRouter from './rutas/newsRouter.js';
import fuentesRouter from './rutas/fuentesRouter.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', indexRouter);
app.use('/api/news', newsRouter);
app.use('/api/fuentes', fuentesRouter);
app.use('/img', express.static(__dirname + '/uploads'));

const port = 3000
app.listen(port, () => console.log(`App listening on port ${port}!`))