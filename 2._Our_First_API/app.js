//the way to import a package from node modules 
var express = require("express");
var app = express();

//call back function
//this is overall called a rest API
/*app.get("/", (req, res) => {
    const response = {
        message: "Hello there", 
        id: 2
    }
    res.send(response);
});*/

const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday"];

//routing
app.get("/time", (req, res) => {
    const date = new Date();
    res.send({
        time: date.toString(), 
        day: date.getDay(),
        weekDay: daus[date.getDay()]
    });
});

var users = [
            { 
                "id": 1, 
                "name": "Jeppe"
            },           
            {
                "id": 2,
                "name": "Anders"
            },
            {
                "id": 3,
                "name": "Philip"
            }
            ]


//create a get route on /users
app.get("/users/:id", (req, res) => {
    console.log(req.params);
    userById = users.findIndex(user => user.id === req.params);
    res.send({userById});
});


app.get("/test", (req, res) => {
    if (true) {
        return res.send({message: "Response inside of the if"});
    } else {
        return res.send({message: "Response outside of both"});
    }
    return res.send({message: "Response outside of both"})
});

//query strings
app.get("/search", (req, res) => {
    console.log(req.query);
    res.send(req.query);

});

//listens for a port number
app.listen(3000, error => {
    console.log(error);
    if (error) {
        console.log("Error running the server", error);
    }
    console.log("Server is running on port", 3000)
});

