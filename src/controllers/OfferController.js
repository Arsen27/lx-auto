import OfferModel from '../models/Offer';
import CarModel from '../models/Car';

class OfferController {

    index(req, res) {
        OfferModel.find().then((err, offers) => {
            if (err) {
                return res.send(err);
            }
    
            res.json(offers);
        });
    }

    create(req, res) {
        const data = req.body;
        const offer = new OfferModel({
            carId: data.carId,
            colors: data.colors,
            options: data.options,
            price: data.price,
            creditPrice: data.creditPrice,
            location: data.location
        });
    
        offer.save().then(() => {
            // res.send({ status: 'ok' });
            CarModel.findOne({ _id: offer.carId }).then((car, err) => {
                if (err) {
                    return res.send(err);
                }

                if (!car.minPrice || car.minPrice > offer.price) {
                    CarModel.findByIdAndUpdate(car._id, {$set: {minPrice: offer.price}}, (err) => {
                        if (err) {
                            return res.send(err);
                        } 
                        
                        // return res.json({ status: 'car price updated' });
                    });
                } if (!car.minCreditPrice || car.minCreditPrice > offer.creditPrice) {
                    CarModel.findByIdAndUpdate(car._id, {$set: {minCreditPrice: offer.creditPrice}}, (err) => {
                        if (err) {
                            return res.send(err);
                        } 
                        
                        return res.json({ status: 'car price updated' });
                    });    
                } else {
                    res.send({"updated": false});
                }
            });
        });

        

    }

    read() {
        OfferModel.findOne({ _id: req.params.id }).then(offer => {
            if (!offer) {
                res.send({ error: 'Not found' });
            } else {
                res.json(offer);
            }
        });
    }

    update(req, res) {
        OfferModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
            if (err) {
                return res.send(err);
            } 
    
            res.json({ status: 'updated' });
        });
    }

    delete(req, res) {
        OfferModel.remove({
            _id: req.param.id
        }).then(offer => {
            if (offer) {
                res.json({ status: 'deleted' });
            } else {
                res.json({ status: 'error' });
            }
    
        });
    }

}

export default OfferController;