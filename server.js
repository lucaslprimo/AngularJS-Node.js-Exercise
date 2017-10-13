// var http = require("http");
// var url = require("url");

var names = ["Adam", "Abe", "Maria", "Rose", "Mario", "Luigi"];
var surnames = ["Lincoln", "Franklin", "Jackson", "Miyazaki", "M'bebe"];
var people = [];

for(var i=0;i<10;i++)
{
    var person = {
        name:(names[Math.floor((Math.random() * names.length))]+ " "+ surnames[Math.floor((Math.random() * surnames.length))]),
        id:i,
        disclosableInfo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit," + 
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini" +
        "m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo c"+
        "onsequat."        
    };

    people.push(person);
}

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src/node/public'));     

app.get('/', function(req, res) {
  res.sendFile('./public/index.html');
});

app.get('/rest/people', function(req, res) {
    res.json(people);
});

var server = app.listen(3000);
console.log('Server started at port %s', server.address().port);
  


// console.log('HTTP server listening on port 80');

// http.createServer(function (request, response) {

//    var page = url.parse(request.url).pathname;

//    if(page == '/rest/people')
//     {
//         //Rest API
//         response.writeHead(200, {'Content-Type': 'application/javascript'});
//         response.end(JSON.stringify(people));
//     }else{
//         //Application Page
//         fs.readFile("../webapp/index.html", function(err, text){
//             response.writeHead(200);
//             response.end(text, "binary");
//         }); 
//         return;
//     }

   
// }).listen(8081);

// Console will print the message
//console.log('Server running at http://127.0.0.1:8081/');