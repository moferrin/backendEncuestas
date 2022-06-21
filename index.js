
const express = require('express');
const morgan = require('morgan');
const app = express();
const cort = require('cors');
const {mongoose} = require('./database');

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(cort('http://localhost:4200/'))
app.use('/encuesta1', require('./routes/encuesta1.routes'));
app.use('/encuesta2', require('./routes/encuesta2.routes'));

app.listen(app.get('port'), () => {
  console.log('Server started on port ' + app.get('port'));
});
