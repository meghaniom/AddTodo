const Signup = require("../model/Signupmodel");
const bcrypt = require("bcrypt");
exports.register = async (req, res) => {
  const { username, email, password, mobile } = req.body;

  try {
    const existemail = await Signup.findOne({ email });
    if (existemail) {
      return res.status(400).json({
        message: "The email already exists.",
      });
    }
    const userSignup = new Signup({
      username,
      email,
      password,
      mobile,
    });
    await userSignup.save();

    res.status(200).json({
      message: "the user was Signup is  successfully",
      userSignup,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to signup user",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Signup.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User  not found .Please register first.",
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Invalid email or password.",
      });
    }
    res.status(200).json({
      message: "Login Successfully.",
      
    });
  } catch (error) {
    console.log("Login error:", error);
    res.status(500).json({
      message: "Login failed. Server error.",
    });
  }
};
