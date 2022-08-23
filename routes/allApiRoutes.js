const express = require('express')
const apiRoutes = require('./restApiRoutes')
const routes = express.Router()

/////
const subcsriberRouter = require('./subscribers')
const ingradientsRouter = require('./ingradients')

//////
routes.use('/subscriber', subcsriberRouter);
routes.use('/ingradients', ingradientsRouter);
// routes.use('/api', apiRoutes)
module.exports = routes;