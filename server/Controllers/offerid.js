import offerId from "../models/OfferId.js";
/* import Offer from "../models/Offer.js"; */

const postOffer = async (req, res) => {
  const { category } = req.params;

  const { image, title, quantity, actualprice, offerprice, discount } =
    req.body;
  try {
    const brand = await offerId.findOne({ category: category });

    if (!brand) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Offer you are providing on brand not found",
      });
    }

    const newOffer = new offerId({
      image: image,
      title: title,
      quantity: quantity,
      actualprice: actualprice,
      offerprice: offerprice,
      discount: discount,
      category: category,
    });

    const savedOffers = await newOffer.save();

    res.status(201).json({
      success: true,
      message: "new offer added successfully",
      data: savedOffers,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      data: null,
      message: e?.message,
    });
  }
};

const getOffers = async (req, res) => {
  const { category } = req.params;

  try {
    const allOffers = await offerId.find({ category }).sort({ updatedAt: -1 });

    res.status(200).json({
      success: true,
      message: "All offers fetched successfully",
      data: allOffers,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      data: null,
      message: e?.message,
    });
  }
};

export { postOffer, getOffers };
