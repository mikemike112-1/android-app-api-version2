const express = require('express');
const mysql = require('mysql');
const credentials = require("./dbCred");
var app = express();

const port = process.env.PORT || 8080 ;


var con = mysql.createConnection({
    host: "androidclass.ctbicidjx9pg.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "password",
    database: "editables"
});

con.connect(function(err) {
    if(err) throw err;
});

//www.yoursite.com?myparam1={id1}&myparam2={id2} 
//http://localhost:8080/?myparam1={id1}&myparam2={id2}
app.get('/', function (req, res) {

    var idQ = req.query.idP;
    var nameQ = req.query.nameP;
    var locationQ = req.query.locationP;
    var distanceQ = req.query.distanceP;
    var picURLQ = req.query.picURLP;
    var isAcceptingQ = req.query.isAcceptingP;

    //url parameters format is...
    //?idP={idQ}

    console.log(req.query);
    console.log(req.query.myparam1); 

    //"INSERT INTO restaurants (id, name, location, distance, picURL, isAccepting) VALUES ('a', 'b', 'c', 'd', 'e', 'f')";
    //var restaurantQuery = "UPDATE restaurants SET id = 'idB', name = 'nameA', location = 'locationA', distance = 'distanceA', picURL = 'picURLA', isAccepting = 'isAcceptingA'";

    //STOPPED HERE 
    var restaurantQuery 
    = "UPDATE restaurants SET " 
    + "id = '" 
    + idQ 
    + "', name = '"
    + nameQ  
    + "', location = '"
    + locationQ
    + "', distance = '"
    + distanceQ
    + "', picURL = '" 
    + picURLQ
    + "', isAccepting = '"
    + isAcceptingQ
    + "'";

    con.query(restaurantQuery, function (err, result, fields){
            if(err) throw err;
            console.log(result);
            res.send(result);
    });

    //     con.query("SELECT * FROM testTable", function (err, result, fields){
    //         if(err) throw err;
    //         console.log(result);

    // console.log("--------------");
    // //console.log(result.rows);
    // res.send(JSON.parse(JSON.stringify(result)));
    // });


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