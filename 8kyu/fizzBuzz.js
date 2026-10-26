// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log("solution =", i);
//     }
//   }
// }

//refactored version
function fizzBuzz(n){
   for (let i = 1; i <= n; i++) {
     i % 3 === 0 && i % 5 === 0 ? console.log("FizzBuzz") 
     : i % 3 === 0 ? console.log("Fizz") 
     : i % 5 === 0 ? console.log("Buzz")
     : console.log(i)
   }
}

fizzBuzz(32);

fizzBuzz(32);

// return stops execution immediately: A return statement exits the entire function on the first iteration ($i = 0$), so the loop never moves on to $1, 2, 3,$ etc.

// A `return` statement immediately terminates the entire function execution—it does not pause the function or move on to the next iteration of the loop.

// Here is step-by-step why your original code stopped after just one step:

// ### 1. `return` ends the entire function call

// When JavaScript hits a `return` keyword, it sends that value back to whoever called the function and destroys the function's execution context. The loop never gets a chance to increment `i` to `1` because the function no longer exists.

// ### 2. Every single path had a `return`

// Your `if / else if / else` structure guaranteed that no matter what value `i` held, one of the branches would run:

// ```javascript
// if (i % 3 === 0 && i % 5 === 0) return "FizzBuzz";
// else if (i % 3 === 0)           return 'fizz';
// else if (i % 5 === 0)           return 'Buzz';
// else                            return i; // If all else fails, this runs!

// // ```

// Because there was no path that didn't contain a `return`, the loop was guaranteed to exit on `i = 0`.

// ### 3. $0$ is divisible by 3 and 5

// On the very first iteration, `i = 0`:

// * `0 % 3 === 0` is `true`
// * `0 % 5 === 0` is `true`

// JavaScript evaluated the very first `if` statement (`i % 3 === 0 && i % 5 === 0`), found it to be `true`, executed `return "FizzBuzz"`, and immediately stopped the entire function.

// ---

// ### What happens if you started at `i = 1`?

// Even if you changed `let i = 0` to `let i = 1`:

// * `1 % 3 === 0` is `false`
// * `1 % 5 === 0` is `false`
// * It would drop down to the `else` block: `return 1`
// * The function would exit immediately returning `1`, never reaching `2` or `3`.

//attempt to come up with better fizzbuzz solution