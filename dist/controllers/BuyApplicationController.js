'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BuyApplication = require('../models/BuyApplication');

var _BuyApplication2 = _interopRequireDefault(_BuyApplication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BuyApplicationController = function () {
    function BuyApplicationController() {
        _classCallCheck(this, BuyApplicationController);
    }

    _createClass(BuyApplicationController, [{
        key: 'index',
        value: function index(req, res) {
            _BuyApplication2.default.find().then(function (err, apps) {
                if (err) {
                    return res.send(err);
                }

                res.json(apps);
            });
        }
    }, {
        key: 'create',
        value: function create(req, res) {
            var data = req.body;
            var app = new _BuyApplication2.default({
                offerId: data.offerId,
                name: data.name,
                number: data.number
            });

            app.save().then(function () {
                res.send({ status: 'ok' });
            });
        }
    }, {
        key: 'read',
        value: function read() {
            _BuyApplication2.default.findOne({ _id: req.params.id }).then(function (app) {
                if (!app) {
                    res.send({ error: 'Not found' });
                } else {
                    res.json(app);
                }
            });
        }
    }, {
        key: 'update',
        value: function update(req, res) {
            _BuyApplication2.default.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
                if (err) {
                    return res.send(err);
                }

                res.json({ status: 'updated' });
            });
        }
    }, {
        key: 'delete',
        value: function _delete(req, res) {
            _BuyApplication2.default.remove({
                _id: req.param.id
            }).then(function (app) {
                if (app) {
                    res.json({ status: 'deleted' });
                } else {
                    res.json({ status: 'error' });
                }
            });
        }
    }]);

    return BuyApplicationController;
}();

exports.default = BuyApplicationController;