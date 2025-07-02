const express = require('express');
const router = express.Router();
const todolist = require('../controller/todolist')
router.post('/addtudo',todolist.CreateTodo);

router.patch('/:id', todolist.updateTodo);

router .get('/',todolist.readTodo);

router.get('/:id',todolist.singleTodo);

router.delete('/:id',todolist.deleteTodo);


 module.exports = router;

