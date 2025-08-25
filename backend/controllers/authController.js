const bcrypt = require("bcrypt");
const prisma = require("../utils/prisma");
const jwt = require("jsonwebtoken");

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    res.json({
      id: user.id,
      email: user.email,
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

exports.userRegister = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({ massage: "user already exists" });
    }

    //hash password (you should use a library like bcrypt for this)
    const hashPassword = await bcrypt.hash(password, 10);

    //create new user
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashPassword, //In a real application make sure to hash the password before
      },
    });

    //generate toke (you should use library for this jsonwebtoken)
    const token = jwt.sign(
      { useId: newUser.id, email: newUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
