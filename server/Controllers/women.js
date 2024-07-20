import Women from "../models/Women.js"

const postWomen = async (req, res) => {
    const {
        image,
        title,
        description,
        price
    } = req.body

    const newWomen = new Women({
        image: image,
        title: title,
        description: description,
        price: price
    })

    const savedwomenCard = await newWomen.save()

    res.json({
        success: true,
        message: "Women card added successfully",
        data: savedwomenCard
    })
}

const getWomen = async (req, res) => {
    const allwomenCard = await Women.find().sort({updatedAt: -1})

    res.json({
        success: true,
        data: allwomenCard,
        message: "Women card fetched successfully"
    })
}

export {
    postWomen,
    getWomen
}