// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORT1 = 7000;
var PORT2 = 7500;

// Here we create a generic function to handle requests and responses
function handleRequestOne(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end('You are beautiful.');
}

function handleRequestTwo(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end('You are not beautiful.');
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// Here we start our server so that it can begin listening to client requests.
serverOne.listen(PORT1, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT1);

});

serverTwo.listen(PORT2, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT2);

});
