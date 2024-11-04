import {model, Schema} from 'mongoose';

const productSchema = new Schema({
    image : {
        type: String,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    description : {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: String
    },
    producttype: {
        type: String
    },
    brand : {
        type: String
    },
    category : {
        type: String,
        required: true
    }
})

const Product = model('Product', productSchema);

export default Product;