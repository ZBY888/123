var http = require("http");
http.createServer(function(req,res){
//	console.log("zby");
//	console.log(req.method);
	res.writeHead(200,{"Content-Type":"text/plain"});//第一个参数表示状态码，第二个参数表示相应的文档类型
	res.write("明天更美好");//向前端传输相应的具体数据
	res.end();//响应结束
}).listen(8888);
