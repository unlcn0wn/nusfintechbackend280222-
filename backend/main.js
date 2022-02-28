// import the express library
let express = require("express");     //import and require "express" module
require("dotenv").config();

// import cors to allow running backend on same machine as frontend.
const cors = require("cors");

// import router from routers.js
const { router } = require("./routers")   //import routers.js

// define server instance
let app = express();     //create instance of express module
app.use(cors());
app.use(express.json());


// let router = express.Router();

// // router.get("path", callback); //http://localhost:3000/home
// router.get("/home", (request, response) => {
//     response.send("Welcome to Dev Toolkit 2!");
//   });

// // router.post("path", callback);       //http://localhost:3000/sum?a=2&b=4
// router.get("/sum", (request, response) => {
//     let sum = request.query.a + request.query.b;
//     response.send("Sum is: " + sum);
// })
 
// tell the app to use router for API mappings
app.use(router);

// // tell the app to use router for API mappings
// app.listen(3000, (errors) => {          // initialise - port 3000
//     if(errors) {
//         console.log(errors);
//     }
//     else {
//         console.log("Server started on port 3000")
//     }
// });        

// tell the app to use router for API mappings
app.listen(process.env.PORT, (errors) => {          // initialise - port 3000
    if(errors) {
        console.log(errors);
    }
    else {
        console.log("Server started on port 3000")
    }
});        