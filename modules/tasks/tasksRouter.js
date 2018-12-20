const TaskController = require("./controllers/TaskController");
const router = require("express").Router();

router.get("/", TaskController.getTasks);

router.get("/:id", TaskController.getSingleTask);

router.post("/", TaskController.addTask);

router.put("/:id", TaskController.updateTask);

router.delete("/:id", TaskController.removeTask);

module.exports = router;
