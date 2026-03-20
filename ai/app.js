import express from "express";
import User from "./models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const app = express();

app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await User.create({ userName, email, password: hash });

    const token = jwt.sign({id: user._id}, "zaidmalik", {expiresIn: "1d"})

    res.cookie("token", token)

    return res.status(201).json({
      user,
      message: "User created Successfully"
    });

  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
});




export default app;