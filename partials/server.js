// Dependencies
// ============
const express        = require('express');
const path           = require('path');
const bodyParser     = require('body-parser');

const PORT = process.env.PORT || 3000;



// Express settings
// ================
// instantiate our app
const app            = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));

//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



require('./routes')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  if(err) {
    console.log(err);
    throw err;
  }
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  })
});


// our module get's exported as app.
module.exports = app;


// Where's the listen? Open up bin/www, and read the comments.

app.listen(PORT, function() {
  console.log("listening on port", PORT);
});