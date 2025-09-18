import Order from "../models/Order.js";

const postOrder = async (req, res) => {
  const { name, email, phone, address, paymentMethod } = req.body;

  if (!name || !email || !phone || !address || !paymentMethod) {
    return res.status(400).json({
      success: false,
      data: null,
      message: "All fields are required",
    });
  }

  const newOrder = new Order({
    name: name,
    email: email,
    phone: phone,
    address: address,
    paymentMethod: paymentMethod,
  });

  try {
    const savedOrder = await newOrder.save();

    res.status(201).json({
      success: true,
      data: savedOrder,
      message: "Order Placed Successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: null,
      message: err?.message,
    });
  }
};

const getOrderByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ _id: userId }).sort({ updatedAt: -1 });

    if (orders.length === 0) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "No orders found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully",
      data: orders,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: null,
      message: error?.message,
    });
  }
};

export { postOrder, getOrderByUser };
