var express = require("express")
, index = require("serve-index");

var app = express();

app.use(express.static('recorded'));
app.use("/", index('recorded'));

app.listen(3000, function(){
	console.log("WebServer listening on port :3000");
});

