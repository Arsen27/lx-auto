'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OfferSchema = new _mongoose.Schema({
    carId: String,
    colors: [String],
    options: [String],
    price: Number,
    creditPrice: Number,
    location: String
});

var Offer = _mongoose2.default.model('Offer', OfferSchema);

exports.default = Offer;