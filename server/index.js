var express =require("express");
var bodyParser = require('body-parser');
var db= require('../db/index.js');
var app=express();
let port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));
app.get("/users",function(req,res){
	console.log(db.User)
		db.User.find({}).exec(function(err, data){

			console.log("get data");
			console.log(data)
				res.send(data);

 	
 });
	//res.send(db.user);
	
	
});

app.post('/', function (req, res) {
	console.log(req.body);
  
  	db.save(req.body);
  	res.send(req.body);
 
});


app.listen(process.env.PORT || port, function() {
  console.log('listening on port ');
});