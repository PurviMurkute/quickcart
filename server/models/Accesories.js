import { Schema, model } from 'mongoose';

const accesoriesSchema = new Schema({
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
        type: Number,
        required: true
    }
})

const Accesories = model('Accesories', accesoriesSchema);

export default Accesories;