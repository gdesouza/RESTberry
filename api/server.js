
// Setup Express HTTP server
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

// bodyParser is used to parse http parameters
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import and register routes
var routes = require('./routes/gpio.routes'); 
routes(app); 

// Start APP  
app.listen(port);

// Show init message
console.log('RESTberry API server started on: ' + port);
