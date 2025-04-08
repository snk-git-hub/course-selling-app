const jwt =require("jsonwebtoken");
require('dotenv').config()

function userMiddleware(req,res,next){
        const token=req.header.token
        const decoded= jwt.verify(token,JWT_SECRET)

        if (decoded) {
            req.userId = decoded.id;
            next()
        } else {
            res.status(403).json({
                message: "You are not signed in"
            })
        }

}

module.exports = {
    userMiddleware: userMiddleware
}
