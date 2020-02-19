'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Car = require('../models/Car');

var _Car2 = _interopRequireDefault(_Car);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CarController = function () {
    function CarController() {
        _classCallCheck(this, CarController);
    }

    _createClass(CarController, [{
        key: 'index',
        value: function index(req, res) {
            _Car2.default.find().then(function (err, cars) {
                if (err) {
                    return res.send(err);
                }

                res.json(cars);
            });
        }
    }, {
        key: 'create',
        value: function create(req, res) {
            var data = req.body;
            var car = new _Car2.default({
                mark: data.mark,
                model: data.model,
                year: data.year,
                colors: data.colors,
                params: {
                    fuelCons: data.params.fuelCons,
                    engine: data.params.engine,
                    acceleration: data.params.acceleration,
                    wheelDrive: data.params.wheelDrive,
                    gearbox: data.params.gearbox,
                    height: data.params.height,
                    width: data.params.width,
                    length: data.params.length
                }
            });

            car.save().then(function () {
                res.send({ status: 'ok' });
            });
        }
    }, {
        key: 'read',
        value: function read() {
            _Car2.default.findOne({ _id: req.params.id }).then(function (car) {
                if (!car) {
                    res.send({ error: 'Not found' });
                } else {
                    res.json(car);
                }
            });
        }
    }, {
        key: 'update',
        value: function update(req, res) {
            _Car2.default.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
                if (err) {
                    return res.send(err);
                }

                res.json({ status: 'updated' });
            });
        }
    }, {
        key: 'delete',
        value: function _delete(req, res) {
            _Car2.default.remove({
                _id: req.param.id
            }).then(function (car) {
                if (car) {
                    res.json({ status: 'deleted' });
                } else {
                    res.json({ status: 'error' });
                }
            });
        }
    }]);

    return CarController;
}();

exports.default = CarController;