const jwt = require("jsonwebtoken");
const express = require("express");
const Authentication = require("../middleware/authanticate");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("../db/conn");
const User = require("../models/userSchema");
router.get("/", (req, res) => {
  res.send(`hello from the server`);
});

// router.post("/register", (req, res) => {
//   const { name, email, work, phone, password, cpassword } = req.body;
//   if (!name || !email || !work || !phone || !password || !cpassword) {
//     return res
//       .status(422)
//       .json({ error: "please fill out the all field properly" });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "email already exist" });
//       }
//       const user = new User({ name, email, work, phone, password, cpassword });
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "user registered successfully" });
//         })
//         .catch((err) => res.status(500).json({ error: "failed to register" }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.post("/register", async (req, res) => {
  const { name, email, work, phone, password, cpassword } = req.body;
  if (!name || !email || !work || !phone || !password || !cpassword) {
    return res
      .status(422)
      .json({ error: "please fill out the all field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    } else if (password != cpassword) {
      res.status(422).json({ message: "both password not matched" });
    } else {
      const user = new User({ name, email, work, phone, password, cpassword });
      //const userRegister
      // if (userRegister)
      await user.save();
      res.status(201).json({ message: "user registered successfully" });
    }

    //  else {
    //   res.status(500).json({ error: "failed to register" });
    // }
  } catch (error) {
    console.log(error);
  }
});

router.post("/signin", async (req, res) => {
  try {
    // let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "please fill the field properly" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      console.log(token);
      if (isMatch) {
        res.status(200).json({ message: "user logged in successfully" });
      } else {
        res.status(400).json({ message: "invalid credentials pass" });
      }
    } else {
      res.status(400).json({ message: "invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }

  router.get("/about", Authentication, (req, res) => {
    res.send(`hello about from the server`);
    // res.send(req.rootUser);
  });
});
module.exports = router;
