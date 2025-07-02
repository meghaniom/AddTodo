const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const PORT = 4000;

const todoList = require('./routes/Todoroutes');
const signupData = require('./routes/signuproute');


app.use(express.json());


app.use('/api/v1/todo', todoList);
app.use('/api/v1/auth', signupData);


dbConnect()
  .then(() => {
    console.log(` Database connected successfully`);

    app.listen(PORT, () => {
      console.log(` Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(` Database connection error: ${error}`);
  });
