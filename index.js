var express = require("express")
, index = require("serve-index")	
, readdirLife = require('readdir-life');
;

var app = express();

app.use(express.static('recorded'));
app.use("/camera/recorded", index('recorded'));

app.get("/camera", function(req, res){
	readdirLife.latest("./recorded")
    		.then(function(lat){
			res.send(lat.file);
	});	
});

app.listen(3000, function(){
	console.log("WebServer listening on port :3000");
});

