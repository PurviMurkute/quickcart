import { Schema, model } from 'mongoose';

const offeridSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }, 
    actualprice: {
        type: Number,
        required: true
    },
    offerprice: {
        type:   Number,
        required: true
    },
    discount: {
        type: String,
        required: true
    }
})

const offerId = model("offerId", offeridSchema);

export default offerId;