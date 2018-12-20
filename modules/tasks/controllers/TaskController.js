const taskService = require("../services/TaskService");

exports.getTasks = (req, res) => {
  taskService.getAllTasks().then(data => {
    res.json(data);
  });
};

exports.getSingleTask = (req, res) => {
  taskService.getSingleTask(req.params.id).then(data => {
    res.json(data);
  });
};

exports.addTask = (req, res) => {
  taskService.addTask(req.body).then(data => res.json(data));
};

exports.removeTask = (req, res) => {
  taskService.removeTask(req.params.id).then(data => res.json(data));
};

exports.updateTask = (req, res) => {
  taskService.updateTask(req.params.id, req.body).then(data => res.json(data));
};
