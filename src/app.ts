import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import nunjucks from 'nunjucks';
import { resolve } from 'path';

import router from './router';

dotenv.config();

const port = process.env.PORT;
const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true,
});

app.use(router);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(resolve(__dirname, '..', 'dist', 'public')));
console.log(resolve(__dirname, 'dist', 'public'));
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        'img-src': ["'self'"],
      },
    },
  })
);

app.set('views', resolve(__dirname, '..', 'views'));
app.set('view engine', 'njk');

app.listen(port, () => console.log('App on http://localhost:' + port));
