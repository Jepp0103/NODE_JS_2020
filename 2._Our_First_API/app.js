//the way to import a package from node modules 
var express = require("express");
var app = express();

//call back function
//this is overall called a rest API
app.get("/", (req, res) => {
    const response = {
        message: "Hello there", 
        id: 2
    }
    res.send(response);
});

app.listen(3000); //listens for a port number