const Todo = require("../models/todoModel");

const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = new Todo({
      title,
      description,
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(400).json({ error: `Server error` });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Update Todo

const updateTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updateTodo = await Todo.findByIdAndUpdate(id, {
      title,
      description,
    });
    if (!updateTodo) {
      return res.status(404).json({ error: `Todo not found` });
    }
    res.status(200).json(updateTodo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete Todo

const deleteTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res
      .status(200)
      .json({ message: "Todo deleted successfully", todo: deletedTodo });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodoById,
  deleteTodoById,
};
