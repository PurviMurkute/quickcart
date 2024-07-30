import { Schema, model } from 'mongoose';

const haircareSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
})

const HairCare = model('HairCare', haircareSchema)

export default HairCare;