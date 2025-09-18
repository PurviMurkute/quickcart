import User from "../models/User.js";
import bcrypt from "bcrypt";

const postSignup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      data: null,
      message: "All fields are required",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    name: name,
    email: email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();

    res.status(201).json({
      success: true,
      data: savedUser,
      message: "SignUp successful",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: true,
        message: "Invalid email or password",
        data: null,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Invalid email or password",
      });
    }

    user.password = undefined;

    return res.status(201).json({
      success: true,
      data: user,
      message: "Login Successful",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      data: null,
      message: error?.message,
    });
  }
};

export { postSignup, postLogin };
