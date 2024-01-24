// Immediately Invoked Function Expressions (IIFE)
//used to avoid pollutioning that maybe caused by the variables present in the global scope 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  //this semi-colon is important to mark the end of a particular IIFE scope 

( (name) => {  
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')  //passing arguments 

