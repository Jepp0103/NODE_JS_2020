const express = require('express');
const app = express();

app.use(express.json());

const authRoute = require('./routes/auth.js');

app.use(authRoute);

const { Model } = require('objection');
const Knex = require('knex'); //the library
const knexfile = require('./knexfile.js');

const knex = Knex(knexfile.development); //the connection

Model.knex(knex);

app.get('/', (req, res) => {
    knex('users').select().then(users => {
        return res.send( {response: users});
    });
});


const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on the port", PORT);
});