import { Schema, model } from 'mongoose';

const shoesSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
})

const Shoes = model('Shoes', shoesSchema)

export default Shoes;