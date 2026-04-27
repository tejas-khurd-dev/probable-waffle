const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");

const registerUser = async (req, res) => {
    const {name, email, username, password} = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        $or:[
            {username: username},
            {email: email}
        ]
    })

    if (isUserAlreadyExists){
        return res.status(409).json({message: "User already exists"})
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username, email, name, password: hash
    })


    const token = jwt.sign({
       id:user._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message: "Registered successfully"
    })
}

const loginUser = async (req, res) => {
    const {username, email, password}= req.body

    const user = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    }).select("+password");

    if(!user){
        return res.status(404).json({message: "User dont exists"});
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return res.status(401).json({message: "Password is wrong"})
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    res.cookie("token", token)

    res.status(200).json({
        message: "Login successfully"
    })
}

const logoutUser = async (req, res) => {
    res.clearCookie("token");

    res.status(200).json({
        message: "Logout successfully"
    });
};


module.exports = { registerUser, loginUser, logoutUser }