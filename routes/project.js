const express = require("express")
const router = express.Router()
const projectController = require("../controllers/projectController.js")
 
/**
 * @swagger
 * /api/project:
 *  get:
 *    tags: 
 *      - project
 *    description: Get all the projects from DB
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: data fetched successfully.
 */
router.get("/project", projectController.getProject)

/**
 * @swagger
 * /api/project/{projectId}:
 *  get:
 *    tags: 
 *      - project
 *    description: Get project with Id from DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: projectId
 *        description: get project with Id.
 *        schema:
 *          type: string
 *          required:
 *            - projectId
 *          properties:
 *            projectId:
 *              type: string
 *    responses:
 *      '200':
 *        description: data fetched successfully.
 */
router.get("/project/:projectId", projectController.getProjectId)

/**
 * @swagger
 * /api/project:
 *  post:
 *    security:
 *      - token: []
 *    tags: 
 *      - project
 *    description: Use to post project to DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: enter anything
 *        title: get surname
 *        img: get img
 *        description: get admins in DB.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *            - img
 *          properties:
 *            title:
 *              type: string
 *            img:
 *              type: string
 *    responses:
 *      '200':
 *        description: successfully.
 */
router.post("/project", projectController.postProject)

 /**
 * @swagger
 * /api/projevt/{projectId}:
 *  put:
 *    security:
 *      - token: []
 *    tags:
 *      - project
 *    description: Use to update project in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: projectId
 *      - in : body
 *        name: enter anything
 *        title: update title
 *        img: update img
 *        description: Update project in DB.
 *        schema:
 *          type: object
 *          required:
 *            - title 
 *            - img
 *          properties:
 *            title:
 *              type: string
 *            img:
 *              type: string
 *    responses:
 *      '200':
 *        description: Admin updated successfully.
 */
router.put("/project/:projectId", projectController.putProject)

 /**
 * @swagger
 * /api/project/{projectId}:
 *  delete:
 *    security:
 *      - token: []
 *    tags:
 *     - project 
 *    description: Removes project item from DB.
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: projectId
 *        description: Remove project item from DB.
 *        schema:
 *          type: string
 *          required:
 *            - projectId
 *          properties:
 *            projectId:
 *              type: string
 *    responses:
 *      '200':
 *        description: Project removed successfully.
 */
router.delete("/project/:projectId", projectController.deleteProject)

module.exports = router;