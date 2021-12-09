const express = require('express');
const mysql = require('mysql');
const credentials = require("./dbCred");
var app = express();

const port = process.env.PORT || 8080 ;


var con = mysql.createConnection({
    host: "androidclass.ctbicidjx9pg.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "password",
    database: "androidclass"
});


app.get('/', function (req, res) {

    con.connect(function(err) {
        if(err) throw err;
        con.query("SELECT * FROM customers", function (err, result, fields){
            if(err) throw err;
            console.log(result);
        });
    });

    res.send("test")

    //res.send("You have hit root for data. Use... /foodBanks /restaurants");
});



app.get('/foodBanks', function (req, res) {



    res.send("hello");

    /*
    res.json([
        {
            id: 1,
            name: "Buddy's Creations",
            location: "Towson", 
            distance: 5,
            picUrl: "https://dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg",
            isAccepting: true
        },
        {
            id: 2,
            name: "Nacho Mama's",
            location: "Towson", 
            distance: 10,
            picUrl: "https://nachomamasmd.com/wp-content/uploads/2017/08/nacho-mamas-logo.png",
            isAccepting: true
        }
    ]);
    */

});

app.get('/restaurants', function (req, res) {

    res.send("hi");

    /*
    res.json([
        {
            id: 1,
            name: "Buddy's Creations",
            location: "Towson", 
            distance: 5,
            picUrl: "https://dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg",
            isAccepting: true
        },
        {
            id: 2,
            name: "Nacho Mama's",
            location: "Towson", 
            distance: 10,
            picUrl: "https://nachomamasmd.com/wp-content/uploads/2017/08/nacho-mamas-logo.png",
            isAccepting: true
        }
    ]);
    */
});

//var server = 
app.listen(port, function () {
    console.log('Server is running..');
});