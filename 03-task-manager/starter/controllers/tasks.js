const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
//const errorHandlerMiddleware = require("../middleware/error-handler");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(201).json({ tasks });
  // res.status(201).json({ tasks, amount:tasks.length });
  // res.status(201).json({ success: true, data:{tasks,nbHits: tasks.length}});
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id ${taskID} found`,404));

    // return res.status(404).json({ msg: `No task with id ${taskID} found` });
  }
  res.status(200).json({ task });
});

const deleteTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(new createCustomError(`No task with id ${taskID} found`,404));
  }
  res.status(200).json({ task });
  // res.status(200).send());
  // res.status(200).json({ task: null, status: "success" });
});

const updateTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id ${taskID} found`,404));
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTasks,
  deleteTasks,
};
