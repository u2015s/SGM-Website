var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost/sgm_db");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));


var userSchema = new mongoose.Schema({
        name: String,
        email: String,
        subject: String,
        message: String

});

var User = mongoose.model("User", userSchema);

// User.create(
//     {
//         name:"utkarsh",
//         email:"utkarsh@gmail.com",
//         subject:"Work",
//         message: "How are you"

//     },function(err, User){
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log("user added");
//                 console.log(User);
//             }

//     }


// );

app.get('/',function(req,res ){
    res.render("pages/index");
})

app.get('/about',function(req,res ){
    res.render("pages/about");
})

app.get('/contact',function(req,res ){
    res.render("pages/contact");
})


app.get('/teacher',function(req,res ){
    res.render("pages/teacher");
})

app.get('/info',function(req,res ){
    User.find({},function(err, user){
        if(err){
            console.log(err);
        } else{
            res.render("pages/coninfo",{people:user});
        }
    })

    // res.render("pages/coninfo");
})

app.post("/info",function(req, res){

        var name=req.body.name;
        var email=req.body.email;
        var subject=req.body.subject;
        var message=req.body.message;
        var newUser = {name: name, email:email, subject:subject, message:message};
        
        User.create(newUser, function(err, newCreated){
            if(err){
                console.log(err);
                alert("Wrong entry");

            }else{
                res.redirect("contact");
            }
        })
    })



app.listen(process.env.port || 3000);

console.log('Running at Port 3000');