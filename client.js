var http = require('http');

var options ={
    host: 'localhost',
    port: '8081',
    path: '/index.html' 
}

//callback is used to deal with response

var callback = function(res){
    var body = '';
    res.on('data', function(data){
        body += data;
    });

    res.on('end', function(){
        console.log(body);
    })
}

//making a http request
var req = http.request(options, callback);
req.end();