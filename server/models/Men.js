import { Schema, model } from "mongoose";

const menSchema = new Schema({
    image: String,
    title: String,
    description: String,
    price: Number
})

const Men = model("men", menSchema)

export default Men