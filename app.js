var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.compress()); //Compressor GZIP
app.use(express.staticCache()); //Static CACHE
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
// app.engine('.html', require('ejs').renderFile);
// // app.set('view engine', 'html');
// app.get("/", function (req, res) {
//     console.log("get /");
//     res.redirect("home");
// });
// app.get('/users', user.list);

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/views/home.html');
});
app.get('/goorahna', function(req, res) {
	res.sendfile(__dirname + '/views/goorahna.html');
});
app.get('/home', function(req, res) {
	res.sendfile(__dirname + '/views/home.html');
});
app.get('/ihsports', function(req, res) {
	res.sendfile(__dirname + '/views/ihsports.html');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
