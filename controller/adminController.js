const AsyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");

const registerAdmin = AsyncHandler(async (req, res) => {
  const { f_name, l_name, p_mail, password, date, month, year, gender } =
    req.body;

  if (
    !f_name ||
    !l_name ||
    !p_mail ||
    !password ||
    !date ||
    !month ||
    !year ||
    !gender
  ) {
    throw new Error("Please enter all the relevant fields");
  }

  const checkUser = await Admin.findOne({ p_mail });

  if (checkUser) {
    throw new Error("This User already Exists!");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedpass = await bcrypt.hash(password, salt);

    const createdUser = await Admin.create({
      f_name,
      l_name,
      p_mail,
      password: hashedpass,
      date,
      month,
      year,
      gender,
    });

    // Respond with the created user
    res.status(201).json(createdUser);
  }
});

// LOG IN
const loginAdmin = AsyncHandler(async (req, res) => {
  const { p_mail, password } = req.body;

  if (!p_mail || !password) {
    res.status(400);
    throw new Error("Please enter the relevant fields");
  }

  const findUser = await Admin.findOne({ p_mail });

  if (!findUser) {
    res.status(404);
    throw new Error("User not found");
  } else {
    const passwordMatch = await bcrypt.compare(password, findUser.password);

    if (passwordMatch) {
      res.status(200).json(findUser);
    } else {
      res.status(401);
      throw new Error("Invalid Credentials");
    }
  }
});

module.exports = {
  registerAdmin,
  loginAdmin,
};
