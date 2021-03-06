const express = require("express");
const app = express();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

app.use(express.static("public"));

app.use(express.json());


// console.log(process.env.PORT);

const PORT = process.env.PORT || 8080;


app.get("/", (req, res) => {

    res.sendFile(__dirname + "/public/frontpage/index.html");

});

app.get("/cleo", (req, res) => {

    res.sendFile(__dirname + "/public/cleo/cleo.html")

});


app.get("/teenageroom", (req, res) => {
    res.sendFile(__dirname + "/public/teenageroom/teenageroom.html")
});

app.get("/creditor", (req, res) => {
res.send({ message: "you won't get what you want" })
});


app.get("/sausage/:id", (req, res) => {
    const { id } = req.params;
 if (id > 24){
     res.send({sausage: "orm i dej"})
 } else {
     res.redirect("/creditor")
 }
});

app.get("/sausage", (req, res) => {
    const  id  = req.query.money;
 if (id > 24){
     res.send({sausage: "orm i dej"})
 } else {
     res.redirect("/creditor")
 }
});




app.get("/proxy", async (req, res) => {
    // fetch("https://www.google.com")
    // .then(respond => respond.text())
    // .then(result => res.send(result));

    const response = await fetch("https://www.google.com");
    const result = await response.text();
    res.send(result);
})




app.listen(PORT, (error) => {
    if (error) {
       console.log("error is", error); 
    }
    
    console.log("The server is running on port", PORT);
});