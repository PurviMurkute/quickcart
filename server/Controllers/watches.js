import Watches from "../models/Watches.js";

const postWatches = async (req, res) => {
    const {
        image,
        title,
        description,
        price
    } = req.body

    const newWatch = new Watches({
        image: image,
        title: title,
        description: description,
        price: price
    })

    const savedWatches = await newWatch.save();

    res.json({
        success: true,
        data: savedWatches,
        message: "New Watch added successfully"
    })
}

const getWatches = async (req, res) => {
    const allWatches = await Watches.find().sort({updatedAt:-1})

    res.json({
        success: true,
        data: allWatches,
        message: "All Watches fetched successfully"
    })
}

export {
    postWatches,
    getWatches
}