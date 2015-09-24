//ref: http://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server
//$> npm install connect serve-static
var connect = require('connect');
var serveStatic = require('serve-static');
var port = 8080;
connect().use(serveStatic(__dirname)).listen(port);
console.log("simple http server as %s",port);
//$> node server.js
