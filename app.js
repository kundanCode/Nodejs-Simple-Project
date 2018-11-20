//Exmaple using express framework
var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static(path.join(__dirname, 'public')));

app.use('/',function (req, res, next){
//    // console.log('Method is:' +req.method+ 'URl is :'+ req.url);         
    console.log('Method is: ' + req.method + ' URL is: ' + req.url);
    next();
});
app.get('/', function(req, res){
console.log("We are at home page");
res.status(200).send("We are at Home Page of sonata");
});

app.get('/htmlfile', function(req, res){
    console.log("We are at home page");
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
    });

 app.get('/json', function(req, res){
 console.log("We are using Json Data");
 res
     .status(200)
     .json({"jsonData" : true});
 });

app.get('/file', function(req, res){
console.log("We are going to open html file")
res
    .status(200)
    .sendFile(path.join(__dirname, 'public', 'routing.js'));
});

var server = app.listen(3001, function() {
    console.log('App listening on port 3001!');
});
//var http 