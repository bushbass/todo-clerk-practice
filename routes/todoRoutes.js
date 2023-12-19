const express = require('express');
const {
  createTodo,
  getAllTodos,
  deleteTodo,
} = require('../controllers/todoController');
// const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// require auth for all todo routes
// router.use(requireAuth);

// POST a new todo
router.post('/', createTodo);

// GET all todos
router.get('/', getAllTodos);

// DELETE a todo
router.delete('/:id', deleteTodo);

module.exports = router;
