const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Auth = require('../models/Auth')

const protect = asyncHandler(async (req, res, next) => {
    let token

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            //get token from header
            token = req.headers.authorization.split(' ')[1]
            console.log(token)

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decoded)
           //get Auth from token
           req.user = await Auth.findById(decoded.id).select('-password')
        }
        catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
    next()
})

module.exports = { protect }