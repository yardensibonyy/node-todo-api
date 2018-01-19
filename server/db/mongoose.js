var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI ||
     'mongodb://yarden:mongo17@ds263837.mlab.com:63837/heroku_297x41zw' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose: mongoose
};