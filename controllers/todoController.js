const Todo = require('../models/todoModel');
const mongoose = require('mongoose');

// get all  todos
const getAllTodos = async (req, res) => {
  const todos = await Todo.find({}).sort({
    createdAt: -1,
  });

  res.status(200).json(todos);
};

// create new todo
const createTodo = async (req, res) => {
  const { todoName } = req.body;
  // add doc to db
  try {
    // const user_id = req.user._id;
    const todo = await Todo.create({
      todoName,
    });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such todo' });
  }

  const todo = await Todo.findOneAndDelete({ _id: id });

  if (!todo) {
    return res.status(400).json({ error: 'No such todo' });
  }

  res.status(200).json(todo);
};

module.exports = {
  getAllTodos,
  createTodo,
  deleteTodo,
};
