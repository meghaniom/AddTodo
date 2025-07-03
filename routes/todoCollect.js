const express = require('express');

const router = express.Router();
const todoCollect = require('../controller/todoCollect');


 router.post('/addto',todoCollect.addTodoCollect);
 router.patch("/:id", todoCollect.updateTodoCollect);
 router.get("/",todoCollect.readTodoCollect);
 router.delete("/:id",todoCollect.deleteTodoCollect);


  module.exports = router;