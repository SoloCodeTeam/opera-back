const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const SwaggerOptions = require("./swagger/swagger.json");
const swaggerDocs = swaggerJsDoc(SwaggerOptions);
const dotenv = require("dotenv");
dotenv.config();
//routes
const adminRoute = require("./routes/admin")
const loginRoute = require("./routes/login")
const messageRoute = require("./routes/message")
const imageRoute = require("./routes/images")
const projectRoute = require("./routes/project")

/**
 * @swagger
 * tags: 
 *      - name : login
 *      - name : admin
 *      - name : message
 *      - name : image
 *      - name : project
 */
var options = {
    swaggerOptions:{
        authAction: {JWT: {name: "JWT", schema: {type: "apiKey", in: "header",name: "Authorization", description: ""},value: "Bearer <JWT>"}}
    }
}
app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.json())
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Methods",'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers",'Content-Type,Authorization');
    next();
})
app.use("/api", loginRoute,adminRoute,messageRoute,imageRoute,projectRoute)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs,options))
app.use((error,req,res,next)=>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message:message});
})

mongoose.connect("mongodb+srv://ibrohimov:Abdulloh_070@clusteropera.jnxjp8x.mongodb.net/")
.then(result => {
    app.listen(process.env.PORT || 8080)
    console.log("App started");
}).catch( err => {
    console.log(err);
})