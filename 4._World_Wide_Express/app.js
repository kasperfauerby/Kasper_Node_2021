const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(express.json());


console.log(process.env.PORT);

const PORT = process.env.PORT || 8080;


app.get("/", (req, res) => {

    res.sendFile(__dirname + "/public/index.html");

});

app.get("/cleo", (req, res) => {

    res.sendFile(__dirname + "/public/cleo.html")

});


app.listen(PORT, (error) => {
    if (error) {
       console.log("error is", error); 
    }
    
    console.log("The server is running on port", PORT);
});