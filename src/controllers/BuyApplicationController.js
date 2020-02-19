import BuyAppModel from '../models/BuyApplication';

class BuyApplicationController {

    index(req, res) {
        BuyAppModel.find().then((err, apps) => {
            if (err) {
                return res.send(err);
            }
    
            res.json(apps);
        });
    }

    create(req, res) {
        const data = req.body;
        const app = new BuyAppModel({
            offerId: data.offerId,
            name: data.name,
            number: data.number
        });
    
        app.save().then(() => {
            res.send({ status: 'ok' });
        });
    }

    read() {
        BuyAppModel.findOne({ _id: req.params.id }).then(app => {
            if (!app) {
                res.send({ error: 'Not found' });
            } else {
                res.json(app);
            }
        });
    }

    update(req, res) {
        BuyAppModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
            if (err) {
                return res.send(err);
            } 
    
            res.json({ status: 'updated' });
        });
    }

    delete(req, res) {
        BuyAppModel.remove({
            _id: req.param.id
        }).then(app => {
            if (app) {
                res.json({ status: 'deleted' });
            } else {
                res.json({ status: 'error' });
            }
    
        });
    }

}

export default BuyApplicationController;