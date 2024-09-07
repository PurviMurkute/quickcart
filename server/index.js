import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()
import { getHealth, postOfferbrand, getOfferbrands } from './Controllers/offerapi.js';
import { postWomen, getWomen } from './Controllers/women.js';
import { postMens, getMens } from './Controllers/men.js';
import { getSkincare, postSkincare } from './Controllers/skincare.js';
import { getShoes, postShoes } from './Controllers/shoes.js';
import { getHairCare, postHairCare } from './Controllers/haircare.js';
import { getAccesories, postAccesories } from './Controllers/accesories.js';
import { getWatches, postWatches } from './Controllers/watches.js';
import { getMakeup, postMakeup } from './Controllers/makeup.js';
import { getHomeDecor, postHomeDecor } from './Controllers/homedecor.js';
import { getContact, postContact } from './Controllers/contact.js';
import { postLogin, postSignup } from './Controllers/user.js';
import { getOrder, postOrder } from './Controllers/order.js';
import { getOffers, postOffer } from './Controllers/offerid.js';

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

const PORT = process.env.PORT || 5000;

app.get('/health', getHealth)

app.post('/offer', postOfferbrand)

app.get('/offers', getOfferbrands)

app.post('/women', postWomen)

app.get('/womens', getWomen)

app.post('/men', postMens)

app.get('/mens', getMens)

app.post('/skincareitem', postSkincare)

app.get('/skincare', getSkincare)

app.post('/shoesitem', postShoes )

app.get('/shoes', getShoes)

app.post('/haircareitem', postHairCare)

app.get('/haircare', getHairCare)

app.post('/accesoriesitem', postAccesories)

app.get('/accesories', getAccesories)

app.post('/watch', postWatches)

app.get('/watches', getWatches)

app.post('/makeupproduct', postMakeup)

app.get('/makeup', getMakeup)

app.post('/homedecoritem', postHomeDecor)

app.get('/homedecor', getHomeDecor)

app.post('/contact', postContact)

app.get('/contacts', getContact)

app.post('/signup', postSignup)

app.post('/login', postLogin)

app.post('/order', postOrder)

app.get('/orders', getOrder)

app.post('/offer/:id', postOffer)

app.get('/offers/:id', getOffers)


app.listen(PORT, ()=>{
    console.log(`server is running on PORT ${PORT}`)
})