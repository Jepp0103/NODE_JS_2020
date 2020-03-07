const express = require("express");
const app = express();
const request = require("request");

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
 
// parse application/json
app.use(express.json());

app.use(express.static('public'));
app.use(express.static('videos'));


//Listens for a port number
console.log(process.env.PORT);
const port = process.env.PORT ? process.env.PORT : 3000


app.get("/frontpage", (req, res) => {
    return res.sendFile(__dirname + '/public/frontpage.html')
});

app.get("/player/:videoId", (req, res) => {
    return res.sendFile(__dirname + "/public/player/player.html");
});

const server = app.listen(port, (error) => { //callback function
    if (error) {
        console.log("Server could not run", error);
    }
    console.log("Server is running on port", server.address().port);
});
