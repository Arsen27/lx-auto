'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BuyAppSchema = new _mongoose.Schema({
    offerId: String,
    name: String,
    number: String
});

var BuyApp = _mongoose2.default.model('BuyApplication', BuyAppSchema);

exports.default = BuyApp;