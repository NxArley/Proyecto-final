const express = require('express')
const morgan = require('morgan');
const cors = require('cors');


const app = express();

require('./database');


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors({ origen: '*' }));

app.use('/admin', require('./routes/Admin.route'))
app.use('/empleado', require('./routes/Empleado.route'))
app.use('/pedido', require('./routes/Pedido.route'))


app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), function(){
    console.log('Example app listening on port '+ app.get('puerto'));
});