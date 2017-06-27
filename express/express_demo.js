var express = require("express");
var app = express();
app.get("/",function(req,res){
	console.log(req.url);
	res.send("明天生活更美好");
})
app.listen(8888,function(){
	console.log("连接成功");
	
})
