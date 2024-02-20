const Product = require("../ProductModel/index")
const JWT = require("jsonwebtoken")

exports.postMessage = async(req,res,next) => {
    const body ={ 
        fullName: req.body.name,
        phone: req.body.phone,
        message: req.body.message,
        category: "message"
    }
    return await Product.create(body).then(data => {
        res.status(200).json(body)
    }).catch(err => {
        if (!err.statusCode) {
            err.satusCode = 500
        }
        next(err)
        }
    )
}

exports.getMessage = async(req,res,next) => {
    try {
        const {token} = req.headers
        await JWT.verify(token,process.env.JWT_KEY)
        return await Product.find({"category": "message"}).then(data => {
            res.status(200).json(data)
        }).catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500
            }
            next(err)
        })
    } catch (error) {
        return res.status(403).json({message: "Not Allowed"})
    }
}