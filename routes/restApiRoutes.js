const express = require("express")
const routes = express.Router()

///// routes are //// 

const ingradientsRouter = require('./ingradients');
const subcsriberRouter = require('./subscribers');
////
routes.use('/ingradient', ingradientsRouter);
routes.use('/subscriber', subcsriberRouter);

module.exports = routes;