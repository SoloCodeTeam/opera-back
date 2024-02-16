const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const SwaggerOptions = require("./swagger/swagger.json")
const SwaggerDocs = swaggerJsDoc(SwaggerOptions)
const dotenv = require("dotenv")
dotenv.config()

mongoose.connect("mongodb+srv://ibrohimov:Abdulloh_070@clusteropera.jnxjp8x.mongodb.net/")
.then(result => {
    app.listen(process.env.PORT || 8080)
    console.log("App started");
}).catch( err => {
    console.log(err);
})