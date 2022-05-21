//Import our dependencies
require("dotenv").config();
const express = require('express');
const cors = require('cors');


//Import JSON files
const projects = require('./projects.json');
const about = require('./about.json');


//Create our App Object
const app = express();

//Add ours cors middleware
app.use(cors());

//create a home route to test our app
app.get("/", (req, res) => {
    res.send("Hello World")
});

//create a /projects route to retrieve our projects
app.get('/projects', (req, res) => {
    //send projects via JSON
    res.json(projects)
});


//Create an /about route to retrieve our about info
app.get('/about', (req, res) => {
    //send about via JSON
    res.json(about)
});

//Declare variable for PORT
const PORT = process.env.PORT || 4002

//set up server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
