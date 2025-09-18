import Offer from "../models/Offer.js";

const getHealth = (req, res) => {
  res.json({
    success: true,
    message: "server is running",
  });
};

const postOfferbrand = async (req, res) => {
  const { image, logo, category, discount } = req.body;

  const newOfferbrand = new Offer({
    image: image,
    logo: logo,
    category: category,
    discount: discount,
  });

  try {
    const savedOfferbrand = await newOfferbrand.save();

    res.status(201).json({
      success: true,
      message: "New offer added successfully",
      data: savedOfferbrand,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      data: null,
      message: error?.message,
    });
  }
};

const getOfferbrands = async (req, res) => {
  const allOfferbrands = await Offer.find().sort({ updatedAt: -1 });
  res.status(200).json({
    success: true,
    data: allOfferbrands,
    message: "all offers fetches successfully",
  });
};

export { getHealth, postOfferbrand, getOfferbrands };
