const Task = require('../models/task');
const getAllTasks = (req, res) => {
  res.send("All tasks");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json(task);
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTasks = (req, res) => {
  res.send("Update a task");
};

const deleteTasks = (req, res) => {
  res.send("Delete a task");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTasks,
  deleteTasks,
};
