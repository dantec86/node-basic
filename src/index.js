const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./routes')
var app = express();

app.use(express.static(path.join(__dirname,'public')));

app.engine('hbs', handlebars({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

routes(app);




app.listen(3000);