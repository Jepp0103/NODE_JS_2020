var express = require("express");
var app = express();

app.get("/", (req, res) => {
    const response = {
        message: "Hi, I'm Jeppe",
        boolean: true, 
        id: 3
    }
    res.send(response);
});

app.listen(8080);