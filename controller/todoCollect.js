const TodoCollect = require("../model/todocollectmodel");

exports.addTodoCollect = async (req, res) => {
  const { taskname } = req.body;

  if (!taskname) {
    return res.status(400).json({ message: "Task name is required" });
  }

  try {
    const existingTodo = await TodoCollect.findOne({ taskname });

    if (existingTodo) {
      return res.status(400).json({ message: "Task already exists" });
    }

    const newTask = new TodoCollect({ taskname: taskname.trim() });
    await newTask.save();

    return res
      .status(201)
      .json({ message: "Task added successfully", data: newTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.updateTodoCollect = async (req, res) => {
  try {
    const todo = await TodoCollect.findById(req.params.id, req.body, {
      new: true,
    });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "Todo updated successfully", data: todo });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update Todo", error: error.message });
  }
};
