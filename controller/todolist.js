const Todo = require("../model/Todomodel");

exports.CreateTodo = async (req, res) => {
  const { name, work, completed, email, county } = req.body;

  try {
    const existemail = await Todo.findOne({ email });
    if (existemail) {
      return res.status(400).json({
        message: "The email already exists",
      });
    }

    const todo = new Todo({
      name,
      work,
      email,
      county,
      completed,
    });

    await todo.save();

    res.status(200).json({
      message: "Todo created successfully",
      todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create Todo",
      error: error.message,
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({
      message: "Todo updated successfully",
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update Todo",
      error: error.message,
    });
  }
};

exports.singleTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found with this ID" });
    }

    res.status(200).json({
      message: "Todo retrieved successfully",
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve Todo by ID",
      error: error.message,
    });
  }
};

exports.readTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ message: "message Failed", error: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todos = await Todo.findByIdAndDelete(req.params.id);
    if (!todos) {
      return res.status(400).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "Todo  Delete SuccessFully" });
  } catch (error) {
    res.status(500).json({
      message: "The Todo are not  delete Found",
      error: error.message,
    });
  }
};
