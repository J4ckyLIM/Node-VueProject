const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config')
const app = express();

const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next();
};

// Importing custom routes
const userRouter = require('./routes/users')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors)

app.get('/', function (req, res) {
  res.send('Welcome to App')
});

app.use('/user', userRouter);

app.listen(config.port, function () {
  console.log('App running on localhost:%s', config.port)
});