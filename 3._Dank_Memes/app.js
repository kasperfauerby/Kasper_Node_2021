
const express = require("express");
const app = express();

app.use(express.json());

const dankMemes = [{
    id: 1,
    topText: "Top Text",
    botttomText : "Bottom Text"
}];

AUTO_INCREMENT = 1;

// get all
app.get("/dankmemes", (req, res) => {

    res.send({memes: dankMemes});

});

// get via id
app.get("/dankmemes/:id",(req,res) => {

const { id } = req.params;

const index = dankMemes.findIndex(p => p.id === id);

const meme = dankMemes.getElementById(index);

return res.send({meme})



});


// post
app.post("/dankmemes", (req,res) => {
    console.log(req.body);
    
    const dankMeme = req.body;

    dankMeme.id = ++AUTO_INCREMENT;


    dankMemes.push(req.body)

    res.send({});
})



// delete
app.delete("/dankmemes/:id", (req,res) => {
    const { id } = req.params;

    const index = dankMemes.findIndex(p => p.id == id);
   
    dankMemes.splice(index, 1);
   
    return res.send();

})

// patch
app.patch("/dankmemes/:id", (req,res) => {
    dankMemes = dankMemes.map(dankMeme => {
        if (dankMeme.id === Number(req.params.id)) {
            console.log("dank me to update was found");
            reg.body.id = dankMeme.id;
            return { ...dankMeme, ...reg.body, id: dankMeme.id};
        }
            return dankMeme;
    })
   
    res.send();

})


app.listen(8080, (error) => {
    if (error) {
       console.log("error is", error); 
    }
    
    console.log("The server is running on port", 8080);
});