const Product = require("../ProductModel/index")
const JWT = require("jsonwebtoken")

exports.getProject = async(req,res,next) => {
    return await Product.find({category: "project"}).then(data => {
        let imageArr
        const dataArr = []
        data.map(async(e) => {
            imageArr = null
            await Product.find({category: "image", projectId: e._id}).then(d => {
                imageArr = d
            }).catch(err => {
                imageArr = null
            })
            const body = {
                title: e.title,
                img: e.img,
                images: imageArr
            }
            dataArr.push(body)
        })
        res.status(200).json(dataArr)
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

exports.postProject = async(req,res,next) => {
    try {
        const {token} = req.headers
        await JWT.verify(token,process.env.JWT_KEY)
        const body = {
            category: "project",
            img: req.body.img,
            title: req.body.title
        }
        return await Product.create(body).then(data => {
            res.status(200).json(body)
        }).catch(err => {
            if (!err.statusCode) {
                err.satusCode =500}
            next(err)
        })
    } catch (err) {
        return res.status(404).json({message: "Not Allowed"})
    }
}

exports.putProject = async(req,res,next) => {
    try {
        const {token} = req.headers
        await JWT.verify(token,process.env.JWT_KEY)
        id = req.params.projectId   
        const body = {
            category: "project",
            img: req.body.img,
            title: req.body.title
        }
        return await Product.findByIdAndUpdate(id,body).then(data => {
            res.status(200).json({message: "Project Successfully updated"})
        }).catch(err => {
            if (!err.statusCode) {
                err.satusCode =500}
            next(err)
        })
    } catch (err) {
        return res.status(404).json({message: "Not Allowed"})
    }
}

exports.deleteProject = async(req,res,next) => {
    try {
        const {token} = req.headers
        await JWT.verify(token,process.env.JWT_KEY)
        id = req.params.projectId
        return await Product.findByIdAndDelete(id).then(data => {
            res.status(200).json({message: "Project Successfully Deleted"})
        }).catch(err => {
            if (!err.statusCode) {
                err.satusCode =500}
            next(err)
        })
    } catch (err) {
        return res.status(404).json({message: "Not Allowed"})
    }
}