import User from "../models/User.js"

const postSignup = async (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            success: false,
            data: null,
            message: "All fields are required"
        })
    }

    const user = new User({
        name: name,
        email: email,
        password: password
    });

    try{
        const savedUser = await user.save();

        res.json({
            success: true,
            data: savedUser,
            message: "SignUp successful"
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: err.message,
            data: null
        })
    }
}

const postLogin = async (req, res) => {
    const {email, password } = req.body;

    const user = await User.findOne({
        email: email,
        password: password
    });

    if(user){
        return res.json({
            success: true,
            message: "Login successful",
            data: user
        })
    }
    else{
        return res.json({
            success: false,
            message: "Invalid credentials",
            data: null
        })
    }
}

const getUser = async (req, res) => {
    const { userId } = req.query;

    const user = await User.findById(userId)

    if(!user){
        return res.json({
            success: false,
            message: "user not found",
            data: null
        })
    }

    const users = await User.find({ user: userId }).sort({ createdAt: -1});

    res.json({
        success: true,
        message: "Signup successful",
        data: users
    })
}

export {
    postSignup,
    postLogin
}