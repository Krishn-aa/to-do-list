const express = require("express")
const bodyParse = require("body-parser")
const ejs = require("ejs")

const app=express();
app.use(bodyParse.urlencoded({extended:true}));
app.use(express.static("public"))

app.set('view engine','ejs');

var items=["Buy food","Cook food","Eat food"]
app.post("/add-item", function(req,res){
    items.push(req.body.newItem);
    res.redirect("/");
});


app.get("/",function(req,res){

    var today = new Date();

    var options = {
        weekday: "long",
        day : "numeric",
        month : "long"
    };

    var day=today.toLocaleDateString("en-US",options);

    res.render("to-do", {currDate : day,newItem : items});
});

app.listen(3000,()=> console.log("The app is live at port 3000"));