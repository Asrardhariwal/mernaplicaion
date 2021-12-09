const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const Authentication = async (req, res, next) => {
  try {
    const token = req.cookies.jsonwebtoken;
    const verifyToken = jwt.verify(token, proces.env.SECRET_KEY);
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("user not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (error) {
    res.status(401).send("unauthorized:no token provided");
    console.log(error);
  }
};
module.exports = Authentication;
