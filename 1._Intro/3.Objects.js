// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {"message": "Hello, earthling! I bring peace."};

const myVal = myObj.message;

// Log the message 

console.log(myVal);

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const person = {
    name: "Kasper",
    age: "24"}

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

stackOverflow.prop = 1;

// make a rule called isAllowed and let the value be true

stackOverflow.isAllowed = true;
console.log(stackOverflow);

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {"description": "The best song in the world."}


// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;

thisSong.about = "Just a tribute."

console.log(thisSong);


// --------------------------------------


