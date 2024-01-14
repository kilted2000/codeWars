// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// my solution

function findAverage(array) {
    if (array.length === 0) {
    return 0; 
  }
  let sum = 0;
  array.forEach( num => {
  sum += num;
}
)
     return sum / array.length;
}