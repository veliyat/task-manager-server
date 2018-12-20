const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
