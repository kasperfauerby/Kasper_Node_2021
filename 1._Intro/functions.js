// functioner bliver "hoisted" (kan kaldes før de deklareres)
// greetings();
// function uden navn er anonym 


function greetings(){
console.log("Hello World");
}

const newGreetings = function () {
    console.log("Hello World");
}

//console.log(newGreetings);
//newGreetings();


function interact(anyFunctionReference){
    //callback function
anyFunctionReference();
}

interact(() => console.log("Kick"));

interact(function() {
    console.log("pooke");
});



function interactWithSomeone(anyFunction, name){
anyFunction(name);
}

const callBackLater = (name) => console.log("Hi, " + name + ". I'm ready to help")


interactWithSomeone(callBackLater, "Kasper");


