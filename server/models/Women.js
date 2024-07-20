import { Schema, model } from "mongoose";

const womenSchema = new Schema({
    image: String,
    title: String,
    description: String,
    price: Number
})

const Women = model("Women", womenSchema)

export default Women