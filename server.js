const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const db = require('./Controllers/db');
const Register = require('./Controllers/Register');
const Signin = require('./Controllers/Signin');
const Cars = require('./Controllers/carsDefault');
const Infocars = require('./Controllers/InfoCars');

const app = express();
app.use(bodyParser.json());
app.use('/car-images', express.static(__dirname + '/car-images'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//POST request for signin
app.post('/signin', (req, res) => {
  Signin.handleSignin(req, res, db, bcrypt);
});

//POST request for register
app.post('/register', (req, res) => {
  Register.handleRegister(req, res, db, bcrypt);
});

//POST request to fill database with random cars 
app.post('/cars', (req, res) => {
  Cars.handleCars(req, res, db); 
})

//GET request to get cars-info for the FRONT-END
app.get('/info-cars', (req, res) => {
 Infocars.handleInfoCars(req, res, db);
})
  
//Listening to server 2000   
app.listen(2001, () => {
  console.log('Listening to port 2001');
});
