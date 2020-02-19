import mongoose, { Schema } from 'mongoose';

const OfferSchema = new Schema({
    carId: String,
    colors: [String],
    options: [String],
    price: Number,
    creditPrice: Number,
    location: String
});

const Offer = mongoose.model('Offer', OfferSchema);

export default Offer;