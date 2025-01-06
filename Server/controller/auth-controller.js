import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const age = 1000 * 60 * 60 * 24 * 7;

  try {

    const user = await prisma.user.findUnique({
      where:{ username }
    })

    if(!user) return res.status(401).json({message: "Invalid Credentials!"});

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) return res.status(401).json({message: "Invalid Credentials!"});
    
    res.cookie("test", "myValue", {
      httpOnly: true,
      secure: true,
      maxAge: age,
    })
    .status(200)
    .json({ message: "Login Successful" });
    
  } catch (error) {
    res.status(500).json({message: "Failed to login!"});
  }

};

export const logout = (req, res) => {};
