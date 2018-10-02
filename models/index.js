var mongoose = require('mongoose');
mongoose.set('debug',true);
//mongoose.connect('insert mlab database link')
mongoose.Promise = Promise;
module.exports.Todo = require("./todo")
