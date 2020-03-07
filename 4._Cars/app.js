const express = require("express");
const app = express();
const request = require("request");

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
 
// parse application/json
app.use(express.json());

let currentId = 3;

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


app.get("/cars", (req, res) => { //Rest API
    return res.send({cars: cars});
});

app.get("/cars/:id", (req, res) => {
    const car = cars.find(car => car.id === Number(req.params.id));
    return res.send({ car: car }); //id = name we defined ourself in the address
});

// app.post("/cars", (req, res) => { Min løsning!
//     console.log(req.body);
//     var maxid = 0;

//     cars.map(function(car){     
//         if (car.id > maxid) 
//         maxid = car.id;    
//     });
//     console.log(maxid);
//     maxid += 1;
//     console.log(maxid);

//     newCar = req.body;
//     newCar.id = maxid;
    
//     console.log(newCar.id);

//     cars.push(newCar);
    
//     return res.send({cars});
// });

app.post("/cars", (req, res) => {
    console.log(req.body);

    let newCar = req.body;
    newCar.id = ++currentId;
    console.log(newCar);
    cars.push(newCar);

    return res.send({response: {}});
});

app.put("cars/:id", (req, res) => {
    const foundIndex = cars.findIndex(car => car.id === Number(req.params.id));
    delete req.body.id;
    console.log("0000", foundIndex);
    const updatedCar = { ...cars[foundIndex], ...req.body };
    cars[foundIndex] = updatedCar;

    return res.send({ response: cars});
});

app.delete("/cars/:id", (req, res) => {
    cars = cars.filter(car => car.id !== Number(req.params.id)) //looping through each car in the list and getting the id from the body
    //Number passes a string to an int
    return res.send({ response: cars });
});

//Listens for a port number
console.log(process.env.PORT);
const port = process.env.PORT ? process.env.PORT : 3000
// const PORT = 3000;

const server = app.listen(port, (error) => { //callback function
    if (error) {
        console.log("Server could not run", error);
    }
    console.log("Server is running on port", server.address().port);
});
