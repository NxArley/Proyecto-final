//const express = require('express');
//const morgan = require('morgan');
//const cors = require('cors');
// Para acceder al directorio actual
//const path = require('path');

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

const mongoose = require('mongoose');
//const uri = 'mongodb://localhost:27017/Rollshake';
const uri = 'mongodb+srv://user_cristian:Rollshake2021@storagecv.kprqp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB') },
    err => { console.log(err) }
);

//middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/api', require('./routes/pedidos'));
/*app.get('/', (req, res) => {
    res.send('Hello World!');
});*/

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

// puerto 
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port: '+ app.get('puerto'));
});