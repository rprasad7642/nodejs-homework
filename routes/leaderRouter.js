const express = require('express');
const bodyParser = require('body-parser');

var leaderRouter = express.Router();

leaderRouter.route('/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end(`Will return all Leaders`);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT not supported on ${req.baseUrl}`);
})
.post((req, res, next) => {
    res.end(`Will create a new Leader with Name: '${req.body.name}' and Description: '${req.body.description}'`);
})
.delete((req, res, next) => {
    res.end(`Will Delete all Leaders`);
})
;

leaderRouter.route('/:id', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end(`Will return Leader with id: '${req.params.id}'`);
})
.put((req, res, next) => {
    res.end(`Will update Leader: ${req.params.id}, to Name: '${req.body.name}', Description: '${req.body.description}'`);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(`POST not supported on '${req.baseUrl}${req.url}`);
})
.delete((req, res, next) => {
    res.end(`Will delete Leader '${req.params.id}'`);
});

module.exports = leaderRouter;
