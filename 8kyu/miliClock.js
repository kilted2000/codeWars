// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// my solution

function past(h, m, s){
    if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59) {
    throw new Error("Invalid input. Please make sure hours, minutes, and seconds are within the valid range.");
    }
    const millisecondsPerHour = 60 * 60 * 1000;
    const millisecondsPerMinute = 60 * 1000;
    const millisecondsPerSecond = 1000;
  
    const totalMilliseconds = h * millisecondsPerHour + m * millisecondsPerMinute + s * millisecondsPerSecond;
  
    return totalMilliseconds;
  }