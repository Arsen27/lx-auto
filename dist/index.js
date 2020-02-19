'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _CarController = require('./controllers/CarController');

var _CarController2 = _interopRequireDefault(_CarController);

var _OfferController = require('./controllers/OfferController');

var _OfferController2 = _interopRequireDefault(_OfferController);

var _BuyApplicationController = require('./controllers/BuyApplicationController');

var _BuyApplicationController2 = _interopRequireDefault(_BuyApplicationController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Car = new _CarController2.default();

var Offer = new _OfferController2.default();

var BuyApplication = new _BuyApplicationController2.default();

var app = (0, _express2.default)();
_mongoose2.default.connect('mongodb://Arsik:pr2272@ds213053.mlab.com:13053/heroku_z4dxgz65');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://practyka.zzz.com.ua/"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.get('/hello', function (req, res) {
    res.end("hello");
});

app.get('/cars', Car.index);
app.get('/cars/:id', Car.read);
app.post('/cars', Car.create);
app.delete('/cars/:id', Car.delete);
app.put('/cars/:id', Car.update);

app.get('/offers', Offer.index);
app.get('/offers/:id', Offer.read);
app.post('/offers', Offer.create);
app.delete('/offers/:id', Offer.delete);
app.put('/offers/:id', Offer.update);

app.get('/buy-app', BuyApplication.index);
app.get('/buy-app', BuyApplication.read);
app.post('/buy-app', BuyApplication.create);
app.delete('/buy-app/:id', BuyApplication.delete);
app.put('/buy-app/:id', BuyApplication.update);

app.listen(process.env.PORT || 3333, function (req, res) {
    console.log("server started");
});