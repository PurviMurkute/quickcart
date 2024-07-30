import MakeUp from "../models/MakeUp.js";

const postMakeup = async (req, res) => {
    const {
        image,
        title,
        description,
        price
    } = req.body

    const newMakeupProduct = new MakeUp({
        image: image,
        title: title,
        description: description,
        price: price
    })

    const savedMakeup = await newMakeupProduct.save();

    res.json({
        success: true,
        data: savedMakeup,
        message: "New Makeup product added successfully"
    })
}

const getMakeup = async (req, res) => {
    const allMakeupProducts = await MakeUp.find().sort({updatedAt:-1})

    res.json({
        success: true,
        data: allMakeupProducts,
        message: "All makeup products fetched successfully"
    })
}

export {
    postMakeup,
    getMakeup
}