import { Schema, model } from 'mongoose';

const watchesSchema = new Schema({
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

const Watches = model('Watches', watchesSchema);

export default Watches;