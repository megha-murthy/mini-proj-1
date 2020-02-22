const express = require("express");
const path = require('path');
const Reservation = require('./reservation');
const Restaurant = require('./resturant');
const app = express();
const PORT = 3000;



const restaurant = new Restaurant();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/make', (req, res) => {
    const newReservation = new Reservation(req.body);
    // console.log(newReservation);
    restaurant.addReservation(newReservation);
    // console.log(restaurant.tables);
    console.log(restaurant.waitList);
});

app.get('/api/table', (req, res) => {
    res.json(tables);
});

app.get('/api/reservations', (req, res) => {
    res.json(reservations);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, 'view.html'));
});

app.get('/make', (req, res) => {
    res.sendFile(path.join(__dirname, 'make.html'));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});