const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || "8000";
const controller = require('./controller')
var bodyParser = require('body-parser')


app.set("view engine", "pug");
app.use(express.static('public'));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({    
  extended: true
})); 

app.get("/index", controller.index);
app.get("/new", function (req, res) {
	res.render("new")
})

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});