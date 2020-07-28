const express = require('express');
const app = express();
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
// Run the app by serving the static files
// in the dist directory
server.use(middlewares);
server.use(router);
server.use(express.static(__dirname + '/dist/Ang10Appmultiplemodules'));
// Start the app by listening on the default
// Heroku port
server.listen(process.env.PORT || 8080);