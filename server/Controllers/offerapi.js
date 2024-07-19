import Offer from '../models/Offer.js';

const getHealth = (req, res) => {
    res.json({
        success: true,
        message: "server is running"
    })
}

const postOffer = async (req, res) => {
    const {
        image,
        logo,
        category,
        discount
    } = req.body

    const newOffer = new Offer({
        image: image,
        logo: logo,
        category: category,
        discount: discount
    })

    const savedOffer = await newOffer.save();

    res.json({
        success: true,
        message: "New offer added successfully",
        data: savedOffer
    })
}

const getOffers = async (req, res) => {

    const allOffers = await Offer.find().sort({updatedAt: -1})
    res.json({
        success: true,
        data: allOffers,
        message: "all offers fetches successfully"
    })
}

export {
    getHealth,
    postOffer,
    getOffers
}