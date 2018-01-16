const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const host = 'localhost';
const port = 3000;

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, host, () => {
    console.log(`Server started at http://${host}:${port}`);
});
