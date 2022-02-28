// To import express library
const { request, response } = require("express");
const express = require("express");
const req = require("express/lib/request");

// Import data.js
const database = require("./data");

// define a router object
let router = express.Router();

// // define a GET API with path "/home"
// router.get("/home", (request, response) => {
//   response.send("Welcome to Dev Toolkit 2!");
// });

// // define a GET API with path "/sum"
// router.get("/sum", (request, response) => {
//   let sum = request.query.a + request.query.b;
//   response.send("Sum is: " + sum);
// });


// router.post("/sum", (request, response) => {
//   let sum = request.body.a + request.body.b;
//   response.send("Sum is: " + sum);
// });

// define an API to return all the users
router.get("/users/all", (request, response) => {
  let users = database.get_all_users();
  response.send(users);
});

// define an API to get user based on user_id passed in the request.
router.get("/users/by_uid", (request, response) => {
  let user = database.get_user_by_user_id(request.query.uid)
  response.send(user);
});

// define a POST API to add a new user to database. 
// User's information is passed request's body selection
router.post("/users/add", (request, response) => {
  // fetch user details from request.body
  let user = request.body;
  database.add_user(user);
  response.send("User addded!");
});

module.exports = { router };   //export router 
