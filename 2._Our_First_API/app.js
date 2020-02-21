//the way to import a package from node modules 
var express = require("express");
var app = express();
const request = require("request");


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

// var users = [
//             { 
//                 "id": 1, 
//                 "name": "Jeppe"
//             },           
//             {
//                 "id": 2,
//                 "name": "Anders"
//             },
//             {
//                 "id": 3,
//                 "name": "Philip"
//             }
//             ]

    var users = ["Jeppe", "Anders", "Philip"];


//create a get route on /users
app.get("/users/:id", (req, res) => {
    console.log(req.params);
    //userById = users.find(user => user.id === req.params.id);
    //console.log(userById);
    console.log(req.params.id)
    res.send(users[req.params.id]);
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
    return res.send(req.query);
});

app.get("/google", (req, res) => {
  request('http://www.google.com', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.send(body); //defining callback function and displaying page
  });
});

//html files
app.get("/documentationone", (req, res) => {
    console.log(__dirname)
    // return res.redirect("documentationwto"); //redirecting to another page
    return res.sendFile(__dirname + '/public/documentationone.html');
});

app.get("/documentationtwo", (req, res) => {
    return res.sendFile(__dirname + '/public/documentationTwo.html')
});


//listens for a port number
app.listen(3000, error => {
    console.log(error);
    if (error) {
        console.log("Error running the server", error);
    }
    console.log("Server is running on port", 3000)
});

