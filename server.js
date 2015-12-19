
/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');

var app = express();

var env = process.env.NODE_ENV || 'development';

// all environments
app.set('port', process.env.PORT || 3001);

app.set('views', path.join(__dirname, './build'));
app.use(express.static(path.join(__dirname, './build')));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(require('body-parser')());

app.use(require('method-override')());

// development only
if ('development' == app.get('env')) {
  app.use(require('errorhandler')());
}

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
