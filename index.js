require('dotenv').config()
require('module-alias/register')

const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const routes = require('./src/routes/index');

const app = express();

app.use(routes);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());




module.exports = app;
