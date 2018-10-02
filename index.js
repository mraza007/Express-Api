var express = require('express')
var app = express();
var parser = require('body-parser')
var todoRoutes = require('./routes/todos')
app.use(parser.json())
app.use(parser.urlencoded({extended:true}));

app.get('/',function(req,res){
	res.send('hello from route')
});

app.use('/api/todos',todoRoutes);




//initializing the port
app.listen('3000',function(){
	console.log('The port is running')
})