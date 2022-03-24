const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req, res){
	res.render("home");
});

app.listen(3000, function(){
	console.log("Server started on port 3000");
});