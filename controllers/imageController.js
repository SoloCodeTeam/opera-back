const Product = require("../ProductModel/index")
const JWT = require("jsonwebtoken")

exports.postImage = async(req,res,next) => {
    try {
        const {token} = req.headers
        await JWT.verify(token,process.env.JWT_KEY)
        req.body.images.length > 0 ? req.body.images.map(async(e) => {
            const body = {
                image: e,
                projectId: req.params.projectId,
                category: "image"
            } 
            await Product.create(body).catch(err => {
                if(!err.statusCode) err.statusCode = 500
                next(err)
            })
        }) : null
        return res.stauts(200)
    } catch (error) {
        return res.status(403).json("Not Allowed")
    }
}

exports.putImage = async(req,res,next) => {
    try {
        const {token} = req.headers
        await JWT.verify(token,process.env.JWT_KEY)
        let projectId = null
        const id = req.params.imageId
        await Product.find({_id: id}).then(data => {
            if(data.length > 0) data.map(e => {projectId = e.projectId})
            else {return res.status(404).json({status:404,message: `Image not found on ${id}`})}
        })
        const body = {
            image: req.body.image,
            projectId: projectId,
            category: "image"
        }
        return await Product.findByIdAndUpdate(id,body).then(data => {
            res.status(200).json({message: "Updated successfully"})
        }).catch(err => {
            if(!err.statusCode) err.statusCode = 500
            next(err)
        })
    } catch (error) {
        return res.status(403).json("Not Allowed")
    }
}

exports.deleteImage = async(req,res,next) => {
    try {
        const {token} = req.headers
        await JWT.verify(token,process.env.JWT_KEY)
        const id = req.params.imageId
        await Product.find({_id: id}).then(data => {
            if(data.length == 0) return res.status(404).json({status:404,message: `Image not found on ${id}`})
        })
        return await Product.findByIdAndDelete(id).then(() => {
            res.status(200).json({message: "Image Deleted Successfully"})
        }).catch(err => {
            if (!err.statusCode) {
                err.satusCode = 500
            }
            next(err)
        })
    } catch (error) {
        return res.status(403).json("Not Allowed")
    }
} 