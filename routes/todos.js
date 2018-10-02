var express = require('express');
var app = express()
var router = express.Router();

var db = require('../models')
// parser will allow us to parse json data


// In this file we will be defining routes
router.get('/',function(req,res){
	db.Todo.find()
	.then(function(todos){
		res.json(todos)
	})
	.catch(function(err){
		res.send(err)
	})
})

router.post('/',function(req,res){
	db.Todo.create(req.body)
	.then(function(newTodo){
		res.json(newTodo)
	})
	.catch(function(err){
		res.send(err)
	})
	// console.log(req.body)
})

module .exports = router