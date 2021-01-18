const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = [];

app.set('view engine', 'ejs'); //to get view engine to work with ejs, place below express(); 
app.use(bodyParser.urlencoded({extended: true})); //this code is needed to get body-parser to work 
app.get("/", function (req, res) {

    var today = new Date();
   
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }; //a javascript object:  Date#toLocaleDateString https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
    
    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {
        kindOfDay: day,
        newListItems: items
    });
    //render a file named list.ejs from a folder named views
})

app.post("/", function(req, res){
    var item = req.body.newItem; //access the input in newItem
    items.push(item);
    res.redirect("/"); //to redirect to app.get res.render; to render to item back to browser
})

app.listen(3000, function () {
    console.log("server is running on port 3000");
})