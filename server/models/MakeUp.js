import { Schema, model } from 'mongoose';

const makeupSchema = new Schema({
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

const MakeUp = model('MakeUp', makeupSchema);

export default MakeUp;