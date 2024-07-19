import { Schema, model } from "mongoose";

const offerSchema = new Schema({
    image: String,
    logo: String,
    category: String,
    discount: String
})

const Offer = model("Offer", offerSchema)

export default Offer