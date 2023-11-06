// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// my solution

function rot13(message){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const rot13Alphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
 
   function getRot13Char(char) {
     const index = alphabet.indexOf(char);
     if (index === -1) return char; 
     return rot13Alphabet[index];
   }
   const cipheredString = message
     .split('')
     .map((char) => getRot13Char(char))
     .join('');
 
   return cipheredString; 
 }