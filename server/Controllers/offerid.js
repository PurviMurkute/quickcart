import offerId from "../models/OfferId.js";

const postOffer = async (req, res) => {
    const {image, title, actualprice, offerprice, discount} = req.body

    const newOffer = new offerId({
        image: image,
        title: title,
        actualprice: actualprice,
        offerprice: offerprice,
        discount: discount
    })

    const savedOffers = await newOffer.save();

    res.json({
        success: true,
        message: "new offer added successfully",
        data: savedOffers
    })
}

const getOffers = async(req, res) => {
    const allOffers = await offerId.find().sort({updatedAt:-1})

    res.json({
        success: true,
        message: "All offers fetched successfully",
        data: allOffers
    })
}

export{
    postOffer,
    getOffers
}