// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// my solution

function findLongest(array){
    return array.reduce((acc, curr) => {
      if (String(curr).length > String(acc).length) {
        return curr;
      } else {
        return acc;
      }
    })
  }