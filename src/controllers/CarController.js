import CarModel from '../models/Car';

class CarController {

    index(req, res) {
        CarModel.find().then((err, cars) => {
            if (err) {
                return res.send(err);
            }
    
            res.json(cars);
        });
    }

    create(req, res) {
        const data = req.body;
        const car = new CarModel({
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
    
        car.save().then(() => {
            res.send({ status: 'ok' });
        });
    }

    read() {
        CarModel.findOne({ _id: req.params.id }).then(car => {
            if (!car) {
                res.send({ error: 'Not found' });
            } else {
                res.json(car);
            }
        });
    }

    update(req, res) {
        CarModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
            if (err) {
                return res.send(err);
            } 
    
            res.json({ status: 'updated' });
        });
    }

    delete(req, res) {
        CarModel.remove({
            _id: req.param.id
        }).then(car => {
            if (car) {
                res.json({ status: 'deleted' });
            } else {
                res.json({ status: 'error' });
            }
    
        });
    }

}

export default CarController;