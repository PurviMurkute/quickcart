import { Schema, model } from 'mongoose';

const homedecorSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

const HomeDecor = model('HomeDecor', homedecorSchema);

export default HomeDecor;