const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'}) //token expires in 3 days
} 

// login a user
const loginUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.login(email, password) //signup method from userModel

        const token = createToken(user._id) //create jwt

        res.status(200).json({email, token})
    }  catch (error) {
        res.status(400).json({error: error.message})
    }
}

// signup a user
const signupUser = async (req, res) => {
    const {email, password, communityId} = req.body
    try {
        const user = await User.signup({email, password, communityId}) //signup method from userModel
        const token = createToken(user._id) //create jwt

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser, loginUser }