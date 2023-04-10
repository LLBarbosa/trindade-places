require('dotenv').config()
const express = require('express');
const router = require('./src/routes/router.js');
const connection = require('./src/database');
const app = express();
app.use(router);

app.use(express.json()) // required

connection.authenticate();
connection.sync({alter: true});

const PORT = 3333;

//[M1S09] - Ex 1 - Projeto Trindade Places
app.listen(PORT, () => {
    console.log('Server up on port 3333!');
})