var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/bookdb");

var db =mongoose.connection;
db.on("error",function(){
	console.log("connection error");
});
db.once("open",function() {
	console.log("connection opened");	
});


var UsersSchema=mongoose.Schema({
	username:String,
	password:String,
	book:String
});

var User=mongoose.model("User",UsersSchema);

let save = (data) => {
 
  	var obj = {
  		username:data.username,
  		password:data.password,
  		book:data.book
  	
  	}
  	var user = new User(obj);
  	user.save();

}
module.exports.User = User;
module.exports.save = save;