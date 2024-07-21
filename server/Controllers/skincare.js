import SkinCare from "../models/SkinCare.js";

const postSkincare = async (req, res) => {
    const {
        image,
        title,
        quantity,
        category,
        price
    } = req.body

    const newSCItem = new SkinCare({
        image: image,
        title: title,
        quantity: quantity,
        category: category,
        price: price
    })

    const savedSCitem = await newSCItem.save();

    res.json({
        success: true,
        data: savedSCitem,
        message: "New skincare item added successfully"
    })
}

const getSkincare = async (req, res) => {
    const allSCItems = await SkinCare.find().sort({updatedAt:-1})

    res.json({
        success: true,
        data: allSCItems,
        message: "All skincare items fetched successfully"
    })
}

export{
    postSkincare,
    getSkincare
}