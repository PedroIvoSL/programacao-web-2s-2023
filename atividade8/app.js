const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const path = require('path');

const app = express();
const port = 3000;

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Express Validator middleware
app.use(expressValidator());

// Serve static files (Bootstrap)
app.use('/static', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

// Define routes
const indexRoute = require('./routes/indexRoute');
const calculateRoute = require('./routes/calculateRoute');

app.use('/', indexRoute);
app.use('/calculate', calculateRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
