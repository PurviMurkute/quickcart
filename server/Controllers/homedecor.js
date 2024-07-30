import HomeDecor from "../models/HomeDecor.js";

const postHomeDecor = async (req, res) => {
    const {
        image,
        title,
        description,
        price
    } = req.body

    const newHDProduct = new HomeDecor({
        image: image,
        title: title,
        description: description,
        price: price
    })

    const savedHDproduct = await newHDProduct.save();

    res.json({
        success: true,
        data: savedHDproduct,
        message: "New HomeDecor product added successfully"
    })
}

const getHomeDecor = async (req, res) => {
    const allHDProducts = await HomeDecor.find().sort({updatedAt:-1})

    res.json({
        success: true,
        data: allHDProducts,
        message: "All HomeDecor products fetched successfully"
    })
}

export {
    postHomeDecor,
    getHomeDecor
}