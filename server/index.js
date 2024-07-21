import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()
import { getHealth, postOffer, getOffers } from './Controllers/offerapi.js';
import { postWomen, getWomen } from './Controllers/women.js';
import { postMens, getMens } from './Controllers/men.js';
import { getSkincare, postSkincare } from './Controllers/skincare.js';
import { getShoes, postShoes } from './Controllers/shoes.js';

const app = express();
app.use(cors());
app.use(express.json());

const dbConnection = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL)

    if(conn){
        console.log("MongoDB Connected 📦")
    }
    else{
        console.log("MongoDB Not Connected")
    }
}
dbConnection();

const PORT = process.env.PORT;

app.get('/health', getHealth)

app.post('/offer', postOffer)

app.get('/offers', getOffers)

app.post('/women', postWomen)

app.get('/womens', getWomen)

app.post('/men', postMens)

app.get('/mens', getMens)

app.post('/skincareitem', postSkincare)

app.get('/skincare', getSkincare)

app.post('/shoesitem', postShoes )

app.get('/shoes', getShoes)

app.listen(PORT, ()=>{
    console.log(`server is running on PORT ${PORT}`)
})