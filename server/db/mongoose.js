var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://yarden:mongo17@ds159707.mlab.com:59707/todos' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose: mongoose
};