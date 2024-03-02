const Product = require("../ProductModel/index")
const JWT = require("jsonwebtoken")

exports.getProject = async (req, res, next) => {
    try {
        const projects = await Product.find({ category: "project" });
        const dataArr = await Promise.all(projects.map(async (project) => {
            const imageArr = await Product.find({ category: "image", projectId: project._id });
            return {
                id: project._id,
                title: project.title,
                img: project.img,
                images: imageArr
            };
        }));
        return res.status(200).json(dataArr);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getProjectId = async(req,res,next) => {
    id = req.params.projectId
    return await Product.find({_id: id,category: "project"}).then(async(d) => {
        const images = await Product.find({category: "image",projectId: id});
        let data
        d.length > 0 ? d.map(async(e) => {
            data = {
                id: e._id,
                title: e.title,
                img: e.img,
                images: images
            }
        }) : res.status(404).json({message: "Project not found!"})
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