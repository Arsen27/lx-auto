import mongoose, { Schema } from 'mongoose';

const CarSchema = new Schema({
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

const Car = mongoose.model('Car', CarSchema);

export default Car;