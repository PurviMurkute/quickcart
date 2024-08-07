import Order from "../models/Order.js";

const postOrder = async (req, res) => {
    const {
        name,
        email,
        phone,
        address,
        paymentMethod
    } = req.body

    const newOrder = new Order({
        name: name,
        email: email,
        phone: phone,
        address: address,
        paymentMethod: paymentMethod
    })

    try{

        const savedOrder = await newOrder.save();

        res.json({
            success: true,
            data: savedOrder,
            message: "Order Placed Successfully"
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: err.message,
            data: null
        })
    }
};

const getOrder = async (req, res) => {

    const orders = await Order.find().sort({ updatedAt: -1 });

    res.json({
        success: true,
        message: "Order Request fetched successfully",
        data: orders
    });

};

export{
    postOrder,
    getOrder
}