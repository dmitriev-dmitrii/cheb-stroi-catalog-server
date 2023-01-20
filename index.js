import express from 'express'
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import dotenv from  'dotenv'
dotenv.config();

import cookieParser from 'cookie-parser';
app.use(cookieParser());

import logger  from 'morgan';
app.use(logger('dev'));


import routes from "./src/routes/index.js";
app.use(routes);

export default app


