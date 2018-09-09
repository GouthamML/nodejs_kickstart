var http = require('http');
var fs = require('fs');
var url = require('url');

//creating server
http.createServer(function(req, res){
    //parse request which has file name
    var pathname = url.parse(req.url).pathname;

    //print filename for which request is made
    console.log(pathname+" received");

    fs.readFile(pathname.substr(1), function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type':'text/html'});

        }else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data.toString());
        }
        res.end();
    })
    console.log(pathname.substr(1));
   

}).listen(8081);

console.log('its running :D');