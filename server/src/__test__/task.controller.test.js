const mongoose = require('mongoose');
const request = require('supertest');
const TaskModel = require('../models/task.model');
const testApp = require('./test.app');
const { MongoMemoryServer } = require('mongodb-memory-server');
const {
  describe,
  test,
  expect,
  beforeAll,
  afterAll,
  afterEach,
} = require('@jest/globals');

describe('Task API', () => {
  let mongoServer;
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    console.log('mongoUri:', mongoUri);
    await mongoose.connect(mongoUri);
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });
  afterEach(async () => {
    await TaskModel.deleteMany({});
  });

  test('POST /api/v1/tasks should create a new task', async () => {
    const task = {
      parent_project: 'project1',
      title: 'Task 1',
      created_by: 'user1',
    };
    const response = await request(testApp)
      .post('/api/v1/tasks')
      .send(task)
      .expect(201);

    expect(response.body.message).toContain('created successfully');

    const savedTask = await TaskModel.findById(
      response.body.message.split(' ')[0],
    );
    expect(savedTask.parent_project).toEqual(task.parent_project);
    expect(savedTask.title).toEqual(task.title);
    expect(savedTask.created_by).toEqual(task.created_by);
  });

  test('GET /api/v1/tasks should return all tasks', async () => {
    const tasks = [
      { parent_project: 'project1', title: 'Task 1', created_by: 'user1' },
      { parent_project: 'project2', title: 'Task 2', created_by: 'user2' },
    ];
    await TaskModel.insertMany(tasks);

    const response = await request(testApp).get('/api/v1/tasks').expect(200);

    expect(response.body.length).toEqual(2);
    expect(response.body[0].parent_project).toEqual(tasks[0].parent_project);
    expect(response.body[0].title).toEqual(tasks[0].title);
    expect(response.body[0].created_by).toEqual(tasks[0].created_by);
    expect(response.body[1].parent_project).toEqual(tasks[1].parent_project);
    expect(response.body[1].title).toEqual(tasks[1].title);
    expect(response.body[1].created_by).toEqual(tasks[1].created_by);
  });

  test('GET /api/v1/tasks/:id should return a single task', async () => {
    const task = new TaskModel({
      parent_project: 'project1',
      title: 'Task 1',
      created_by: 'user1',
    });
    await task.save();

    const response = await request(testApp)
      .get(`/api/v1/tasks/${task._id}`)
      .expect(200);

    expect(response.body.parent_project).toEqual(task.parent_project);
    expect(response.body.title).toEqual(task.title);
    expect(response.body.created_by).toEqual(task.created_by);
  });

  test('PATCH /api/v1/tasks/:id should update a task', async () => {
    const task = new TaskModel({
      parent_project: 'project1',
      title: 'Task 1',
      created_by: 'user1',
    });
    await task.save();

    const updatedTaskData = {
      title: 'Updated Task Title',
      content: 'Updated Task Content',
      created_by: 'user2',
      assigned_to: '64c26de6d5351a0d05b7c5bb',
      comment: '64c26de6d5351a0d05b7c5c0',
      due_at: new Date(),
      status: 'in_progress',
    };

    await request(testApp)
      .patch(`/api/v1/tasks/${task._id}`)
      .send(updatedTaskData)
      .expect(204);

    const updatedTask = await TaskModel.findById(task._id);

    expect(updatedTask.title).toEqual(updatedTaskData.title);
    expect(updatedTask.content).toEqual(updatedTaskData.content);
    expect(updatedTask.created_by).toEqual(updatedTaskData.created_by);
    expect(updatedTask.assigned_to.toString()).toEqual(
      updatedTaskData.assigned_to,
    );
    expect(updatedTask.due_at.toISOString()).toEqual(
      updatedTaskData.due_at.toISOString(),
    );
    expect(updatedTask.comment.toString()).toEqual(updatedTaskData.comment);

    expect(updatedTask.status).toEqual(updatedTaskData.status);
  });

  test('DELETE /api/v1/tasks/:id should delete a task', async () => {
    const task = new TaskModel({
      parent_project: 'project1',
      title: 'Task 1',
      created_by: 'user1',
    });
    await task.save();

    const response = await request(testApp)
      .delete(`/api/v1/tasks/${task._id}`)
      .expect(200);

    expect(response.body.message).toContain('Task deleted successfully');

    const deletedTask = await TaskModel.findById(task._id);

    expect(deletedTask).toBeNull();
  });
  test('POST /api/v1/tasks should return 400 Bad Request if required fields are missing', async () => {
    const task = {
      parent_project: 'project1',
      // title is missing
      created_by: 'user1',
    };
    const response = await request(testApp)
      .post('/api/v1/tasks')
      .send(task);
    expect(response.status).toEqual(400);
    expect(response.body.error).toContain('ValidationError');
  });

  test('GET /api/v1/tasks/:id should return 404 Resource not found if task is not found', async () => {
    const nonExistingTaskId = '60f5c5e0c0e6a31f6c8a7f00';
    const response = await request(testApp)
      .get(`/api/v1/tasks/${nonExistingTaskId}`)
      .expect(404);

    expect(response.body.error).toContain('Resource not found');
  });

  test('PATCH /api/v1/tasks/:id should return 404 Resource not found if task is not found', async () => {
    const nonExistingTaskId = '60f5c5e0c0e6a31f6c8a7f00';
    const updatedTaskData = {
      title: 'Updated Task Title',
      content: 'Updated Task Content',
      created_by: 'user2',
      assigned_to: '64c26de6d5351a0d05b7c5bb',
      comment: '64c26de6d5351a0d05b7c5c0',
      due_at: new Date(),
      status: 'in_progress',
    };

    const response = await request(testApp)
      .patch(`/api/v1/tasks/${nonExistingTaskId}`)
      .send(updatedTaskData)
      .expect(404);

    expect(response.body.error).toContain('Resource not found');
  });

  test('DELETE /api/v1/tasks/:id should return 404 Resource not found if task is not found', async () => {
    const nonExistingTaskId = '60f5c5e0c0e6a31f6c8a7f00';
    const response = await request(testApp)
      .delete(`/api/v1/tasks/${nonExistingTaskId}`)
      .expect(404);

    expect(response.body.error).toContain('Resource not found');
  });
});
