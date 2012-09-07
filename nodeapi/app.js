var path     = require('path'),
    express  = require('express'),
    engines = require('consolidate'),
    mongoose = require('mongoose');

var db = mongoose.createConnection('localhost', 'boardz');

app = express();

app.engine('haml', engines.haml)
   .set('view engine', 'haml')
   .set('view options', {layout: false})
   .set('views', __dirname + '/app/views')
   .set('db', db)
   .set('models', require('./app/models')(db));

require('./app/controller');

app.listen(8080);
console.log("http://localhost:8080/");
