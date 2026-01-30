const express = require('express');
const router = express.Router();
const {
  addTodo,
  getUserTodos,
  updateTodo,
  deleteTodo
} = require('../controllers/todoController');

router.post('/add-todo', addTodo);
router.get('/get-my-todo/:userId', getUserTodos);
router.put('/update-todo/:todoId', updateTodo);
router.delete('/delete-todo/:todoId', deleteTodo);

module.exports = router;
