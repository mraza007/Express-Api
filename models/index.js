var mongoose = require('mongoose');
mongoose.set('debug',true);
// mongoose.connect('MLAB Link for the database') 
mongoose.Promise = Promise; 
module.exports.Todo = require("./todo")
