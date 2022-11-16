var createError = require('http-errors');
var express = require('express');
var expressWs = require('express-ws');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shopingCartRouter = require('./routes/shopingCart');
var category = require('./routes/category');
var order = require('./routes/order')
var socktRouter = require('./routes/sockt');


var app = express();
expressWs(app)


//post请求不能直接获取参数
app.use(bodyParser.json({ limit: '1mb'}))//body-parser 解析json格式数据
app.use(bodyParser.urlencoded({ extended: true}))
 
app.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');//的允许所有域名的端口请求（跨域解决）
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shopingCart',shopingCartRouter);
app.use('/category',category);
app.use('/order',order);
app.use('/sockt',socktRouter);
app.listen(8090);


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
// app.listen(8080, () => {
//   console.log('Server is running on  http://169.254.57.7:8080');
// });
module.exports = app;
