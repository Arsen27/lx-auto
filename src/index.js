import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import CarController from './controllers/CarController';
const Car = new CarController();

import OfferController from './controllers/OfferController';
const Offer = new OfferController();

import BuyApplicationController from './controllers/BuyApplicationController';
const BuyApplication = new BuyApplicationController();

const app = express();
mongoose.connect('mongodb://heroku_z4dxgz65:Pract2272@ds213053.mlab.com:13053/heroku_z4dxgz65');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
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

app.listen(process.env.PORT || 3333, function(req, res) {
    console.log("server started");
});


