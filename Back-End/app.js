var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const  postsRouter = require('./routes/posts');


var app = express();

app.use((req,res,next) =>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join("/images")));



app.use('/api/posts', postsRouter);
app.use('/users', usersRouter);
app.use('/', indexRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.use(cors())

// app.del('/authenticate', cors(), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })



// app.use(function (req, res, next) {
//
//   // // Website you wish to allow to connect
//   // res.setHeader('Access-Control-Allow-Origin', '*');
//   //
//   //
//   // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   //
//   // res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type,X-Requested-With,Accept');
//   //
//   // // res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//   // // res.header('Access-Control-Allow-Headers', 'Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//
//
//    res.setHeader('Access-Control-Allow-Credentials', true);
//
//   next();
// });


module.exports = app;
