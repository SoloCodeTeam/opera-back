const mongoose = require("mongoose")
const productSchema = mongoose.Schema(
    {
        category:{
            type: String,
        },
        title:{
            type: String,
        },  
        img:{
            type: String,
        },  
        image:{
            type: String,
        },  
        projectId:{
            type: String,
        },  
        imageId:{
            type: String,
        },
        text:{
            type: String,
        },
        name:{
            type: String,
        },
        surname:{
            type: String,
        },
        password:{
            type: String,
        },
        phone:{
            type: String,
        },
        message:{
            type: String,
        },
        fullName:{
            type: String,
        }
    },
    {
        timestamps: true
    }
)
const Product = mongoose.model("Product", productSchema)
module.exports = Product