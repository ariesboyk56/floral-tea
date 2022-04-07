import express from "express"
import CryptoJS from "crypto-js"
import jwt from "jsonwebtoken"

import User from "../models/User.js"
import Response from "../utils/Response.js"
const router = express.Router()

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post("/register", async (req, res) => {
    const newUser = new User({
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET_KEY
        ).toString(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });
    try {
        const user = await newUser.save();
        Response.success(res, user)
    } catch (error) {
        console.log(error);
        Response.error(res, error)
    }

})

// @route POST api/auth/login
// @desc Login user
// @access Public
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return Response.message(res, "Wrong password or email!", 401)
        }

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        if (originalPassword !== req.body.password) {
            return Response.message(res, "Wrong password or email!")
        }

        const accessToken = jwt.sign(
            { id: user._id, role: user.roleId },
            process.env.SECRET_KEY,
            { expiresIn: "5d" }
        );

        const { password, ...info } = user._doc;
        const data = { ...info, accessToken }
        console.log(user)
        return Response.success(res, data)
    } catch (error) {
        console.log(error);
        return Response.error(res, error)
    }
});

export default router;