const Task = require("../models/Task");

exports.getAllTasks = () => Task.find();

exports.getSingleTask = id => Task.findById(id);

exports.addTask = data => Task.insertMany([data]);

exports.removeTask = id => Task.findByIdAndDelete(id);

exports.updateTask = (id, data) => Task.findByIdAndUpdate(id, data);
