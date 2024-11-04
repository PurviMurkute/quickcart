import Products from '../models/Product.js';

const postProduct = async (req, res)=>{
    const {
        image,
        title,
        description,
        price,
        quantity,
        producttype,
        brand,
        category
    } = req.body

    const newProduct = new Products({
        image: image,
        title: title,
        description: description,
        price: price,
        quantity: quantity,
        producttype: producttype,
        brand: brand,
        category: category
    })

    const savedproduct = await newProduct.save();

    res.json({
        succes: true,
        data: savedproduct,
        message: "new product added successfully"
    })
}

const getProducts = async (req, res) => {
    const {category} = req.query
    const allProducts = await Products.find({category}).sort({updatedAt:-1})

    res.json({
        success: true,
        data: allProducts,
        message: `All ${category} products fetched successfully`
    })
}

export{
    postProduct,
    getProducts
}