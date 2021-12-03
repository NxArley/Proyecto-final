const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/HeladeriaLaEsperanza';

const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(url, options).then(
    () => { console.log('Conectado a DB')},
    err => { console.log(err)}
);

module.exports = mongoose;