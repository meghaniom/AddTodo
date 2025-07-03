const express = require('express');

const router = express.Router();
const todoCollect = require('../controller/todoCollect');


 router.post('/addto',todoCollect.addTodoCollect);
 router.post("/:id", todoCollect.updateTodoCollect)


  module.exports = router;