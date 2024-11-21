const Todo = require("../models/todoModel");

const createTodo = async (req, res) => {
  try {
    const {title, description} = req.body;
    new todo = new Todo({
        title,
        description,
    })
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
