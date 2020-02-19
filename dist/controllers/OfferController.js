'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Offer = require('../models/Offer');

var _Offer2 = _interopRequireDefault(_Offer);

var _Car = require('../models/Car');

var _Car2 = _interopRequireDefault(_Car);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OfferController = function () {
    function OfferController() {
        _classCallCheck(this, OfferController);
    }

    _createClass(OfferController, [{
        key: 'index',
        value: function index(req, res) {
            _Offer2.default.find().then(function (err, offers) {
                if (err) {
                    return res.send(err);
                }

                res.json(offers);
            });
        }
    }, {
        key: 'create',
        value: function create(req, res) {
            var data = req.body;
            var offer = new _Offer2.default({
                carId: data.carId,
                colors: data.colors,
                options: data.options,
                price: data.price,
                creditPrice: data.creditPrice,
                location: data.location
            });

            offer.save().then(function () {
                // res.send({ status: 'ok' });
                _Car2.default.findOne({ _id: offer.carId }).then(function (car, err) {
                    if (err) {
                        return res.send(err);
                    }

                    if (!car.minPrice || car.minPrice > offer.price) {
                        _Car2.default.findByIdAndUpdate(car._id, { $set: { minPrice: offer.price } }, function (err) {
                            if (err) {
                                return res.send(err);
                            }

                            // return res.json({ status: 'car price updated' });
                        });
                    }if (!car.minCreditPrice || car.minCreditPrice > offer.creditPrice) {
                        _Car2.default.findByIdAndUpdate(car._id, { $set: { minCreditPrice: offer.creditPrice } }, function (err) {
                            if (err) {
                                return res.send(err);
                            }

                            return res.json({ status: 'car price updated' });
                        });
                    } else {
                        res.send({ "updated": false });
                    }
                });
            });
        }
    }, {
        key: 'read',
        value: function read() {
            _Offer2.default.findOne({ _id: req.params.id }).then(function (offer) {
                if (!offer) {
                    res.send({ error: 'Not found' });
                } else {
                    res.json(offer);
                }
            });
        }
    }, {
        key: 'update',
        value: function update(req, res) {
            _Offer2.default.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
                if (err) {
                    return res.send(err);
                }

                res.json({ status: 'updated' });
            });
        }
    }, {
        key: 'delete',
        value: function _delete(req, res) {
            _Offer2.default.remove({
                _id: req.param.id
            }).then(function (offer) {
                if (offer) {
                    res.json({ status: 'deleted' });
                } else {
                    res.json({ status: 'error' });
                }
            });
        }
    }]);

    return OfferController;
}();

exports.default = OfferController;