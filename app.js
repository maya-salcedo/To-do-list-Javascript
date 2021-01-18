const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //require the local file module


const app = express();
app.use(express.static("public")); 
const items = ["Go grocery", "Pick up package", "Pay bills"];
const workItems = [];

app.set('view engine', 'ejs'); //to get view engine to work with ejs, place below express(); 
app.use(bodyParser.urlencoded({extended: true})); //this code is needed to get body-parser to work 

app.get("/", function (req, res) {
    
    const day = date.getDate(); //calls the local module

        res.render("list", {
        listTitle: day,
        newListItems: items
    });
    //render a file named list.ejs from a folder named views
});

app.post("/", function(req, res){
    
    const item = req.body.newItem; //access the input in newItem
    if (req.body.list === "Work"){ //.list refers to the button's value
        workItems.push(item);
        res.redirect("/work");
    } else {
    items.push(item);
    res.redirect("/");
    } //to redirect to app.get res.render; to render to item back to browser
});


app.get("/work", function(req, res){
    res.render("list", {
        listTitle: "Work",
        newListItems: workItems
    });
}); //to create a new page for work list

app.get("/about", function(req, res){
    res.render("about");
}); //to create a new page for about page

app.listen(3000, function () {
    console.log("server is running on port 3000");
});