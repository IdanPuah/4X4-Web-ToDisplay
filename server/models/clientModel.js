import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    roadTripName: {
        type: String,
    },
}, { collection: '*****' });

const Client = mongoose.model('Client', clientSchema);
export default Client;