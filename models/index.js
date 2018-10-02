var mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb://raza:raza1234@ds117423.mlab.com:17423/todo-api') 
mongoose.Promise = Promise; 
module.exports.Todo = require("./todo")