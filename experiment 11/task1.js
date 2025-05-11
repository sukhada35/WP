// Write a node.js program for making for http response
// var http=require('http');
// http.createServer(function(req,res){
//     res.write('Hello Sukhada!');
//     res.end();
// }).listen(3000);

var http = require('http');

http.createServer(function (req, res) {
    res.write('Hello Student!');
    res.end();
}).listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

