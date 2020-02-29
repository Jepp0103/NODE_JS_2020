const express = require("express");
const app = express();
const request = require("request");


var cars = [
            { 
                "id": 1, 
                "brand": "Mercedes"
            },           
            {
                "id": 2,
                "brand": "Peugeot"
            },
            {
                "id": 3,
                "brand": "Lamborgini"
            }
            ]

app.get("/", (req, res) => {
    return res.send({about: "Car version 1.0.0"});
});


app.get("/cars", (req, res) => {
    return res.send({cars: cars});
});

app.get("/cars/:id", (req, res) => {
    const car = cars.find(car => car.id === Number(req.params.id));
    return res.send({ car: car }); //id = name we defined ourself in the address
});


//listens for a port number
const PORT = 8080;

const server = app.listen(8080, (error) => { //callback function
    if (error) {
        console.log("Server could not run", error);
    }
    console.log("Server is running on port", server.address().port);
});
