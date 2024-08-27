var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var welcomeRouter = require('./routes/welcome');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rewrite url to '/' if it's not API, images, css, or JS files
app.use(function (req, _res, next) {
    const isImageCssOrJSFile = /\.(jpg|jpeg|png|webp|avif|gif|css|js)$/.test(req.url);
    const isApiUrl = /^\/api\/*/.test(req.url);

    if (!isImageCssOrJSFile && !isApiUrl) {
        req.url = '/';
    }
    next();
});

// Main route for web application
app.use('/', indexRouter);

// All API routes goes here
app.use('/api/welcome', welcomeRouter);

// catch 404 and forward to error handler
app.use(function (_req, _res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, _next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
