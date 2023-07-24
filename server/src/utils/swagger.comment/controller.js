/**
 * @swagger
 * /api/v1/tasks:
 *   post:
 *     summary: Create a new task
 *     description: Create a new task and save it to the database.
 *     tags:
 *       - Tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               parent_project:
 *                 type: string
 *                 description: The ID of the parent project to which the task belongs.
 *               title:
 *                 type: string
 *                 description: The title of the task.
 *               created_by:
 *                 type: string
 *                 description: The ID of the user who created the task. Should be obtained from req.user.id.
 *     responses:
 *       201:
 *         description: Task.id created successfully.
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Task created successfully"
 */
