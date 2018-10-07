var mongoose = require('mongoose');
// This file will contain the schema for our database
var todoScheme = new mongoose.Schema({
	name : {
		type:String,
		require:'Name Cannot be Blank'
	},
	complete :{
		type:Boolean,
		default:false
	},
	created_data : {
		type: Date,
		default:Date.now		
	}
});

var Todo = mongoose.model('Todo',todoScheme)
module.exports = Todo;