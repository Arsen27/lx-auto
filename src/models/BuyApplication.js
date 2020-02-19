import mongoose, { Schema } from 'mongoose';

const BuyAppSchema = new Schema({
    offerId: String,
    name: String,
    number: String
});

const BuyApp = mongoose.model('BuyApplication', BuyAppSchema);

export default BuyApp;