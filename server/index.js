var express =require("express");
var bodyParser = require('body-parser');
var db= require('../db/index.js');
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));
app.get("/",function(req,res){
	console.log(db.User)
		db.User.find({}).exec(function(err, data){

			
				res.send(data);

 	
 });
	//res.send(db.user);
	
	
});
// app.post("/",function(){

// });
app.post('/', function (req, res) {
	console.log(req.body);
  
  	db.save(req.body);
  	res.send(req.body);
 
});
let port = 3000;

app.listen(process.env.PORT || port, function() {
  console.log('listening on port ');
});