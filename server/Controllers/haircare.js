import HairCare from "../models/HairCare.js";

const postHairCare = async (req, res) => {
    const {
        image,
        title, 
        quantity,
        category,
        price
    } = req.body

    const newHairCare = new HairCare({
        image: image,
        title: title,
        quantity: quantity,
        category: category,
        price: price
    })

    const savedHCitem = await newHairCare.save();

    res.json({
        success: true,
        data: savedHCitem,
        message: "New HairCare item added successfully"
    })
}

const getHairCare = async (req, res) => {
    const allHCitems = await HairCare.find().sort({updatedAt:-1})

    res.json({
        success: true,
        data: allHCitems,
        message: "All HairCare items fetched successfully"
    })
}

export {
    postHairCare,
    getHairCare
}