import Products from "../models/Product.js";

const postProduct = async (req, res) => {
  const {
    image,
    title,
    description,
    price,
    quantity,
    producttype,
    brand,
    category,
  } = req.body;

  const newProduct = new Products({
    image: image,
    title: title,
    description: description,
    price: price,
    quantity: quantity,
    producttype: producttype,
    brand: brand,
    category: category,
  });

  try {
    const savedproduct = await newProduct.save();

    res.status(201).json({
      succes: true,
      data: savedproduct,
      message: "new product added successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: null,
      message: err.message,
    });
  }
};

const getProducts = async (req, res) => {
  const { category } = req.query;
  try {
    const allProducts = await Products.find({ category }).sort({
      updatedAt: -1,
    });

    if (!allProducts) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "Products not found",
      });
    }

    res.status(200).json({
      success: true,
      data: allProducts,
      message: `All ${category} products fetched successfully`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: null,
      message: err.message,
    });
  }
};

export { postProduct, getProducts };
