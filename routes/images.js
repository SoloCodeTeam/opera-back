const express = require("express")
const router = express.Router()
const imageController = require("../controllers/imageController.js")

 /**
 * @swagger
 * /api/image/{projectId}:
 *  post:
 *    security:
 *      - token: []
 *    tags:
 *      - image
 *    description: Use to post image to DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: projectId
 *      - in : body
 *        name: enter anything
 *        image: post image url
 *        description: post image to DB.
 *        schema:
 *          type: object
 *          required:
 *            - image
 *          properties:
 *            image:
 *              type: string
 *    responses:
 *      '200':
 *        description: Admin updated successfully.
 */
router.post("/image/:projectId", imageController.postImage)

 /**
 * @swagger
 * /api/image/{imageId}:
 *  put:
 *    security:
 *      - token: []
 *    tags:
 *      - image
 *    description: Use to update image in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: imageId
 *      - in : body
 *        name: enter anything
 *        image: update image
 *        description: Update image in DB.
 *        schema:
 *          type: object
 *          required:
 *            - image
 *          properties:
 *            image:
 *              type: string
 *    responses:
 *      '200':
 *        description: Image updated successfully.
 */
 router.put("/image/:imageId", imageController.putImage)

/**
 * @swagger
 * /api/image/{imageId}:
 *  delete:
 *    security:
 *      - token: []
 *    tags:
 *      - image
 *    description: Use to delete image from DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: imageId
 *        description: delete image from DB.
 *        schema:
 *          type: object
 *          required:
 *              - imageId
 *          properties:
 *              imageId:
 *                  type: string
 *    responses:
 *      '200':
 *        description: Image deleted successfully.
 */
  router.delete("/image/:imageId", imageController.deleteImage)


module.exports = router