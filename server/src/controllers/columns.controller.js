const pino = require('pino');
const ColumnModel = require('../models/column.model');
const NotFoundError = require('../errors/not.found');

const logger = pino(); // Create the logger instance

const createColumn = async (req, res, next) => {
  // get userId from req.body for testing purpose, should be req.user.id
  logger.info('createColumn');
  const { parent_project, name } = req.body;
  // const created_by = req.user.id
  try {
    const column = new ColumnModel({
      parent_project,
      name,
    });

    await column.save();
    res.status(201).json({ message: `${column.id} created successfully` });
    // Log successful creation
    logger.info(`Column ${column.id} created successfully`);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getColumnById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const column = await ColumnModel.findById(id);
    if (!column) {
      throw new NotFoundError(`ColumnId ${id} not found`);
    }
    res.json(column);
    logger.info(`Column ${id} retrieved successfully`);
  } catch (error) {
    next(error);
  }
};

const getAllColumns = async (req, res, next) => {
  const { parent_project } = req.body;
  try {
    const columns = await ColumnModel.find({ parent_project });
    res.json(columns);
    logger.info(`Retrieved ${columns.length} columns`);
  } catch (error) {
    next(error);
  }
};

const updateColumnById = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const column = await ColumnModel.findByIdAndUpdate(id, {
      name,
    });
    if (!column) {
      throw new NotFoundError(`ColumnId ${id} not found`);
    }
    res.status(204).send();
    logger.info(`Column ${id} updated successfully`);
  } catch (error) {
    next(error);
  }
};

const deleteColumnById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const column = await ColumnModel.findByIdAndDelete(id);
    if (!column) {
      throw new NotFoundError(`ColumnId ${id} not found`);
    }
    res.status(204).send();
    logger.info(`Column ${id} deleted successfully`);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createColumn,
  getColumnById,
  getAllColumns,
  updateColumnById,
  deleteColumnById,
};
