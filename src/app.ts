import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import nunjucks from 'nunjucks';
import cors from 'cors';
import { resolve } from 'path';

import router from './router';

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(router);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(resolve(__dirname, '..', 'dist', 'public')));
app.use(helmet());
app.use(cors());

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true,
});

app.set('views', resolve(__dirname, '..', 'views'));
app.set('view engine', 'njk');

app.listen(port, () => console.log('App on http://localhost:' + port));
