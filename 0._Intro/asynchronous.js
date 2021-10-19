// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try {
//             throw new Error("shoot");
//             resolve("Everything went well.");
//         } catch {
//             reject("Rejected");
//         }
//     }, 4000);
// })

//     .then(message => console.log("The message is:", message))
//     .catch(errorMessage => console.log("Error:", errorMessage));




function nodeIsAMood() {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Noice");
            } catch {
                reject("Damn");
            }
        }, 3000);
    });
}

// nodeIsAMood()
// .then(console.log)
// .catch(console.log);

(async function asynchronousFunction() {
    const message = await nodeIsAMood();
    console.log(message);
})()

