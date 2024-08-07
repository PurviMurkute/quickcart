import Accesories from "../models/Accesories.js";

const postAccesories = async (req, res) => {
    const {
        image,
        title,
        description,
        price
    } = req.body

    const newAccesoriesItem = new Accesories({
        image: image,
        title: title,
        description: description,
        price: price
    })

    const savedAccesories = await newAccesoriesItem.save();

    res.json({
        success: true,
        data: savedAccesories,
        message: "New Accesories added successfully"
    })
}

const getAccesories = async (req, res) => {
    const allAccesories = await Accesories.find().sort({updatedAt:-1})

    res.json({
        success: true,
        data: allAccesories,
        message: "All Accesories fetched successfully"
    })
}

export {
    postAccesories,
    getAccesories
}