//const express = require("express");
//const app = express();

const app = require("express")();

const cake = require("./cake.json");
console.log(cake);


//        request  response
app.get("/", (req, res) => {

    res.send({});

});

app.get("/adventureTime", (req, res) => {

    res.send({time: "Adventure"});

});

app.get("/senddata", (req, res) => {

    const que = req.query.svar;

    console.log(req.query);

    res.send({"svar" : que});

});

app.get("/favoriteNumber/:number", (req, res) => {

    console.log(req.params.number);

    res.send({
        number : req.params.number,
        nice : req.params.number < 5    
    });

});

app.get("/frontpage", (req,res) => {
    res.send ({ message : "Welcome"});
})



app.listen(3000);