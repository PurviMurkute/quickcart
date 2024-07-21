import Shoes from "../models/shoes.js";

const postShoes = async (req, res) => {
    const {
        image,
        title,
        brand,
        price
    } = req.body

    const newShoes = new Shoes({
        image: image,
        title: title,
        brand: brand,
        price: price
    })

    const savedShoes = await newShoes.save();

    res.json({
        success: true,
        data: savedShoes,
        message: "New shoes added successfully"
    })
}

const getShoes = async (req, res) => {
    const allShoes = await Shoes.find().sort({updatedAt:-1})

    res.json({
        success: true,
        data: allShoes,
        message: "All shoes fetched successfully"
    })
}

export {
    postShoes,
    getShoes
}