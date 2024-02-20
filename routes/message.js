const express = require("express")
const router = express.Router()
const messageController = require("../controllers/messageController.js")

/**
 * @swagger
 * /api/message:
 *  post:
 *    tags: 
 *      - message
 *    description: Use to post message in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: get name
 *        phone: get phone
 *        message: get message
 *        description: post message to DB.
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - phone
 *            - message
 *          properties:
 *            name:
 *              type: string
 *            phone:
 *              type: string
 *            message:
 *              type: string
 *    responses:
 *      '200':
 *        description: successfully.
 */
router.post('/message', messageController.postMessage);

/**
 * @swagger
 * /api/message:
 *  get:
 *    security:
 *      - token: []
 *    tags:
 *      - message
 *    description: get messages from DB
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: data fetched successfully
 */
router.get("/message", messageController.getMessage)

module.exports = router;