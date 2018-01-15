const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

var dishRouter = express.Router({mergeParams: true});

dishRouter.use(morgan('dev'));

dishRouter.route('/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end(`Will send all the dishes to you !`);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT is not supported on ${req.baseUrl}`);
})
.post((req, res, next) => {
    res.end(`Will create new dish with Name: '${req.body.name}', Description: '${req.body.description}' !`);
})
.delete((req, res, next) => {
    res.end(`Will delete all Dishes`);
})
;

dishRouter.route('/:id', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end(`Will return Dish '${req.params.id}' to you !`);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end(`Will update Dish '${req.params.id}', to Name: '${req.body.name}', Description: '${req.body.description}'`);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(`POST not suported on '${req.baseUrl}${req.url}' !`);
})
.delete((req, res, next) => {
    res.end(`Will delete Dish '${req.params.id}'`);
})
;

module.exports = dishRouter;




