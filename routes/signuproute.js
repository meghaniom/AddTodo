const express = require('express');
const router = express.Router();
const signup = require('../controller/Userdata');


 router.post('/user/signup',signup.register);

 router.post('./user/login',signup.login);

  module.exports = router;