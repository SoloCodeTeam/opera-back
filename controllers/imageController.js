const Product = require("../ProductModel/index")
const JWT = require("jsonwebtoken")

exports.postImage = async(req,res,next) => {
    try {
        const {token} = req.headers
        await JWT.verify(token,process.env.JWT_KEY)
        const body = {
            image: req.params.img,
            projectId: req.params.imageId,
            category: "image"
        }
        return await Product.create(body).then(data => {
            res.status(200).json(data)
        }).catch(err => {
            if(!err.statusCode) err.statusCode = 500
            next(err)
        })
    } catch (error) {
        return res.status(403).json("Not Allowed")
    }
}