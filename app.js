var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

var campgrounds = [
    {name: "Salmon Mentai", image: "https://via.placeholder.com/150.png"},
    {name: "Tuna Maki", image: "https://via.placeholder.com/150.png"},
    {name: "Yakiniku sashimi", image: "https://via.placeholder.com/150.png"}
]

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add camgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);

    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(3000, process.env.IP, function(){
    console.log("The YelpCamp Server has started");
});