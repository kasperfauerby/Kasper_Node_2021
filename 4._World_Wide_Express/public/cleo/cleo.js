console.log("meow meow")

fetch("https://catfact.ninja/fact")
.then(response => response.json())
.then(result => {
const catFactDiv = document.getElementById("cat-facts");
catFactDiv.innerText = result.fact;
});