var express  = require('express');
var bodyParser  = require('body-parser');
var app = express();
var fs = require('fs');

//endpoint to list whole content of jsonDB

app.get('/listUsers', function(req, res){
    fs.readFile(__dirname+"/"+"users.json", "utf8", function(err, data){
        res.end(data);
    });
});

//endpoint to add a user
var user = {
    "userAdd":{
        "name" : "goutham",
      "password" : "password4",
      "profession" : "sol_eng",
      "id": 10
    }
}

app.post('/addUser', function(req, res){
    fs.readFile(__dirname+"/"+"users.json", "utf8", function(err, data){
        data = JSON.parse(data);

        data["user4"] = user["userAdd"];
        console.log(data);
        fs.writeFile('users.json',JSON.stringify(data), function(err){
            if(err){
                console.log(err);
            }
        });
        res.end(JSON.stringify(data));
    });

})

//using JSON Payload
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.post('/payload', function(req, res){
    console.log(req.body);
})

//to DELETE
app.delete('/deleteUser/:id', function (req, res) {

    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + req.params.id];
        console.log( data );
        res.end( JSON.stringify(data));
    });
 })


var server = app.listen(8100);