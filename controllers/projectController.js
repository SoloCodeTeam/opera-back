const Product = require("../ProductModel/index")
const JWT = require("jsonwebtoken")

exports.getProject = async(req,res,next) => {
    return await Product.find({category: "project"}).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        if (!err.statusCode) {
            err.satusCode =500}
        next(err)
    })
}

exports.getProjectId = async(req,res,next) => {
    id = req.params.projectId
    return await Product.find({_id: id}).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        if (!err.statusCode) {
            err.satusCode =500}
        next(err)
    })
}

exports.getProject = async(req,res,next) => {
    try {
        const {token} = req.headers
        await JWT.verify(token,process.env.JWT_KEY)
        
    } catch (err) {
        
    }
    return await Product.find({category: "project"}).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        if (!err.statusCode) {
            err.satusCode =500}
        next(err)
    })
}