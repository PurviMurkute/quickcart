import { Schema, model } from 'mongoose';

const skincareSchema = new Schema({
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

const SkinCare = model('SkinCare', skincareSchema)

export default SkinCare;