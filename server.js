const express = require('express');
const app = express();
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const path=require("path");
// Run the app by serving the static files
// in the dist directory
//server.use(middlewares);
//server.use(router);
//server.use(express.static(__dirname + '/dist/Ang10Appmultiplemodules'));

server.use( express.static(path.join(__dirname, '/dist/Ang10Appmultiplemodules')))
// Start the app by listening on the default
// Avoid CORS issue
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  server.get("/",function (req, res){
    res.sendFile(__dirname + "/dist/Ang10Appmultiplemodules/index.html")
    });
 // server.use(jsonServer.rewriter(routes))
  server.use(router)
// Heroku port
server.listen( 4000);