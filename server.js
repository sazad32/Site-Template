const express = require('express');
const request = require('request');
const fs = require('fs');
var app = express();


app.set('view engine', 'hbs');


app.use((req,res,next) => {
    var now = new Date().toDateString();
    var log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log',log + '\n', (err) => {
        if(err){
            console.log('Unable to append to log.');
        }
    });
    next();
});

//app.use((req,res,next) => {
//    res.render('maintenance.hbs',{
//        pageTitle:'Maintenace',
//        message: 'Site under maintanence'        
//    });
//
//});

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
    //res.send('hello express!');
    res.render('home.hbs', {
        pageTitle:'Home Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about',(req,res) => {
    //res.send('hello express!');
    res.render('about.hbs', {
        pageTitle:'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/projects',(req,res) => {
    //res.send('hello express!');
    res.render('projects.hbs', {
        pageTitle:'Project Page',
        currentYear: new Date().getFullYear()
    });
});




app.listen(3000);