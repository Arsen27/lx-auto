'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CarSchema = new _mongoose.Schema({
    mark: String,
    model: String,
    year: Number,
    colors: [String],
    params: {
        fuelCons: String,
        engine: String,
        acceleration: Number,
        wheelDrive: String,
        gearbox: String,
        height: Number,
        width: Number,
        length: Number
    },
    minPrice: Number,
    minCreditPrice: Number
});

var Car = _mongoose2.default.model('Car', CarSchema);

exports.default = Car;