var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI ||
     'mongodb://yarden:mongo17@ds159707.mlab.com:59707/todos' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose: mongoose
};