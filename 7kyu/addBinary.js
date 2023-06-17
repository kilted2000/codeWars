// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// my solution

  // 1. Start with the decimal number you want to convert to binary.
    // 2. Initialize an empty list or string to hold the binary digits.
    // 3. Repeat the following steps until the quotient becomes 0:
    //     4. Divide the number by 2.
    //     5. Get the remainder of the division.
    //     6. Append the remainder to the list or string of binary digits.
    //     7. Update the number to be equal to the quotient obtained in step 4.
    // 8. Reverse the order of the binary digits obtained.
    // 9. The reversed binary digits form the binary representation of the original decimal number.

function addBinary(a,b) {
    let sum = a + b;
    let finalNum = [];  
    while(sum > 0){
      let mod = sum % 2;
      finalNum.push(mod);
      sum = Math.floor(sum / 2);
    }
    if(finalNum.length === 0){
      finalNum.push(0);
      }
      finalNum.reverse();
      
      return finalNum.join("");
    }
    
  