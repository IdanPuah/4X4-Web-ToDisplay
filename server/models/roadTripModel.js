import mongoose from 'mongoose';

const roadTripSchema = new mongoose.Schema({
    title :{
        type: String,
        required: true,
        unique: true
    },
    img: {
        data: Buffer,
        contentType: String
    },
    roadTripImgs: [{
        data: Buffer,
        contentType: String
    }],
    area: {
        type: String,
        required: true
    },
    shortDescription :{
        type: String,
        required: true
    },
    longDescription :{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
}, { collection: '*****' });

const RoadTrip = mongoose.model('RoadTrip', roadTripSchema);
export default RoadTrip;