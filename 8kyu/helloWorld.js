// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

// my solution

//The hard way
function greet() {
    const h = String.fromCharCode(104);
    const e = String.fromCharCode(101);
    const l = String.fromCharCode(108);
    const o = String.fromCharCode(111);
    const w = String.fromCharCode(119);
    const r = String.fromCharCode(114);
    const d = String.fromCharCode(100);
    const space = String.fromCharCode(32);
    const exclamation = String.fromCharCode(33);
  
    const greeting = h + e + l + l + o + space + w + o + r + l + d + exclamation;
  
    return greeting;
  }
//The easy way
//   const greet = () => {
//     return "hello world!";
//   }