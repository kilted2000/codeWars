// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// my solution

let greet = function(name) {
    let lowerName = name.toLowerCase();
    return "Hello " + lowerName.charAt(0).toUpperCase() + lowerName.slice(1) +"!";
  };