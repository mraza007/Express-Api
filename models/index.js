var mongoose = require('mongoose');
mongoose.set('debug',true);
<<<<<<< HEAD
//mongoose.connect('insert mlab database link')
mongoose.Promise = Promise;
=======
// mongoose.connect('MLAB Link for the database') 
mongoose.Promise = Promise; 
>>>>>>> 4e3776dbec35eedf2c858cca3eae1a26a87b28bf
module.exports.Todo = require("./todo")
