const express = require('express');
const bodyParser = require('body-parser');

var promoRouter = express.Router();

promoRouter.route('/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
})
.get((req, res, next) => {
    res.end('Will get all Promotions !');
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT not supported on ${req.baseUrl}`);
})
.post((req, res, next) => {
    res.end(`Will create a new promotion`);
})
.delete((req, res, next) => {
    res.end(`Will delete all promotions`);
})
;

promoRouter.route('/:id', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end(`Will return Promotion with id: '${req.params.id}'`);
})
.put((req, res, next) => {
    res.end(`Will update Promotion: ${req.params.id}, to Name: '${req.body.name}', Description: '${req.body.description}'`);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(`POST not supported on '${req.baseUrl}${req.url}`);
})
.delete((req, res, next) => {
    res.end(`Will delete Promotion '${req.params.id}'`);
});


module.exports = promoRouter;

