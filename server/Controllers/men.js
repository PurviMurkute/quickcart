import Men from "../models/Men.js";

const postMens = async (req, res) => {
    const {
        image,
        title,
        description,
        price
    } = req.body

    const newMen = new Men({
        image: image,
        title: title,
        description: description,
        price: price
    })

    const savedMenCard = await newMen.save();

    res.json({
        success: true,
        data: savedMenCard,
        message: "Men card added successfully"
    })
}

const getMens = async (req, res) => {
    const allMenCard = await Men.find().sort({updatedAt: -1})

    res.json({
        success: true,
        data: allMenCard,
        message: "All mens card fetched successfully"
    })
}

export {
    postMens,
    getMens
}