const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const controllers = require('./controllers/router');
const helpers = require('./views/helpers/index');
const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers: helpers
  })
);

app.set('port', process.env.PORT || 8181);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);
app.use(bodyParser.json());

module.exports = app;
