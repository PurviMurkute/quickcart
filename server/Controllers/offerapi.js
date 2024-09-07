import Offer from '../models/Offer.js';

const getHealth = (req, res) => {
    res.json({
        success: true,
        message: "server is running"
    })
}

const postOfferbrand = async (req, res) => {
    const {
        image,
        logo,
        category,
        discount
    } = req.body

    const newOfferbrand = new Offer({
        image: image,
        logo: logo,
        category: category,
        discount: discount
    })

    const savedOfferbrand = await newOfferbrand.save();

    res.json({
        success: true,
        message: "New offer added successfully",
        data: savedOfferbrand
    })
}

const getOfferbrands = async (req, res) => {

    const allOfferbrands = await Offer.find().sort({updatedAt: -1})
    res.json({
        success: true,
        data: allOfferbrands,
        message: "all offers fetches successfully"
    })
}

export {
    getHealth,
    postOfferbrand,
    getOfferbrands
}