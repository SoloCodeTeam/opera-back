const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController.js")

// /**
//  * @swagger
//  * /api/image/{projectId}:
//  *  post:
//  *    security:
//  *      - token: []
//  *    tags:
//  *      - image
//  *    produces:
//  *      - application/json
//  *    parameters:
//  *      - in: path
//  *        name: projectId
//  *      - in: body
//  *        image: get image
//  *        description: post image to DB
//  *        schema:
//  *          type: object
//  *          required:
//  *            - image
//  *          properties:
//  *            image:
//  *              type: string
//  *     responses:
//  *       '200':
//  *         description: successfully.
//  */

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
 *        name: get image url
 *        description: post image to DB.
 *        schema:
 *          type: object
 *          required:
 *            - name
 *          properties:
 *            name:
 *              type: string
 *    responses:
 *      '200':
 *        description: Admin updated successfully.
 */
router.post("/image/:projectId", imageController.postImage)