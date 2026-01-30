const express = require('express');
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

module.exports = app;
