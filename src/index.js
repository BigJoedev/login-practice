
const express = require('express');
const path = require('path');
const bcrypt = require("bcrypt");


const app = express();

//use ejs as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});



 


const port = 3000;
app.listen(port, () => {
    console.log('server is running on port 3000');

});