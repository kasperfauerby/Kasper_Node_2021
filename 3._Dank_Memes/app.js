const app = require("express")();

const dankMemes = [{
    topText: "Top Text",
    botttomText : "Bottom Text"
}];

app.get("/dankmemes", (req, res) => {

    res.send({memes: dankMemes});

});


app.listen(8080, (error) => {
    if (error) {
       console.log("error is", error); 
    }
    
    console.log("The server is running on port", 8080);
});