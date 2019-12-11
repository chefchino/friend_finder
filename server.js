
var path =  require("path");
var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'app/public')));
require("./app/routing/apiRouting")(app);
require("./app/routing/htmlRouting")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
