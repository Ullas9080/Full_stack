import { User } from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json({
        success: false,
        message: `All fields are required`,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        sucess: false,
        message: `Email id already register`,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullname,
      email,
      password: hashPassword,
    });

    return res
      .status(200)
      .json({ sucess: true, message: "User has been Register" });
  } catch (error) {
    console.error(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: `All fields are required`,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: `Invalid email or password`,
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: `Invalid email or password`,
      });
    }
    const token = await jwt.sign({ User: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure:false,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        success: true,
        message: `${user.fullname} has logged in successfully`,
        user: {
          id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error", 
    });
  }
};

export const logout = async (req, res) => {
  try {
    return await res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ sucess: true, message: "User has been logout" });
  } catch (error) {
    console.log(error);
  }
};
