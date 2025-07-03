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
    const todo = await TodoCollect.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators : true});
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

 exports.readTodoCollect = async(req, res) => {
    try {
        const readData = await TodoCollect.find();
         res.status(200).json({message : "Todo successfullu read", readData})
    }
    catch (error) {
       res.status(500).json({message : "Todo not found", error : error.message})
    }
 }

  exports.deleteTodoCollect = async(req, res) => {
    try {
        const deleteData = await TodoCollect.findByIdAndDelete(req.params.id);
         if (!deleteData) {
            return res.status(400).json({ message : "Todo not found"});
         }
          return res.status(200).json({message : "Todo deleted Successfully"});
    }
    catch(error) {
         res.status(500).json({message : "Todo not found", error : error.message})
    }
  }
