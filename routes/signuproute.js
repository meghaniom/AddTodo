const express = require('express');
const router = express.Router();
const signup = require('../controller/Userdata');


 router.post('/user/signup',signup.register);

 router.post('/user/login',signup.login);

  router.post('/token',signup.verify); 


  module.exports = router;