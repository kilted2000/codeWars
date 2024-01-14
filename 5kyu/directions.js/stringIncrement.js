// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// my solution

function incrementString(string) {
    const parts = string.split(/(\d+)/);
    if (parts.length === 1) {
      return string + '1';
    }
    const numericPart = parts[parts.length - 2]; 
    const parsedNumber = parseInt(numericPart);
    
    if (!isNaN(parsedNumber)) {
  
      const incrementedNumber = (parsedNumber + 1).toString().padStart(numericPart.length, '0');
      
      return parts.slice(0, parts.length - 2).join('') + incrementedNumber;
    } else {
      return string + '1';
      }
    }