import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import {
  getHealth,
  postOfferbrand,
  getOfferbrands,
} from "./Controllers/offerapi.js";
import {
  getProducts,
  postProduct
} from "./Controllers/products.js";
import { getContact, postContact } from "./Controllers/contact.js";
import { postLogin, postSignup } from "./Controllers/user.js";
import { getOrder, postOrder } from "./Controllers/order.js";
import { getOffers, postOffer } from "./Controllers/offerid.js";

const app = express();
app.use(cors());
app.use(express.json());

const dbConnection = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL);

  if (conn) {
    console.log("MongoDB Connected 📦");
  } else {
    console.log("MongoDB Not Connected");
  }
};
dbConnection();

const PORT = process.env.PORT || 5000;

app.get("/health", getHealth);

app.post("/product", postProduct);

app.get("/products", getProducts);

app.post("/offer", postOfferbrand);

app.get("/offers", getOfferbrands);

app.post("/contact", postContact);

app.get("/contacts", getContact);

app.post("/signup", postSignup);

app.post("/login", postLogin);

app.post("/order", postOrder);

app.get("/orders", getOrder);

app.post("/offer/:category", postOffer);

app.get("/offers/:category", getOffers);

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
