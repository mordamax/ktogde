
/**
 * Module dependencies.
 */

var express = require('express')
,   routes = require('./routes')
,   api = require('./routes/api')
,   http = require('http')
,   path = require('path')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {
    layout: false
});
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/partials/:name', routes.partials);
app.get("/api/places", api.getAllPlaces);
app.get("/api/place/:id", api.getOnePlace);

app.all('*', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
