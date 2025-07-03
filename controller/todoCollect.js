const TodoCollect = require('../model/todocollectmodel');

exports.addTodoCollect = async (req, res) => {
  const { taskname } = req.body;

  if (!taskname) {
    return res.status(400).json({ message: 'Task name is required' });
  }

  try {
    const existingTodo = await TodoCollect.findOne({ taskname });

    if (existingTodo) {
      return res.status(400).json({ message: 'Task already exists' });
    }

    const newTask = new TodoCollect({ taskname: taskname.trim() });
    await newTask.save();

    return res.status(201).json({ message: 'Task added successfully', data: newTask });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
