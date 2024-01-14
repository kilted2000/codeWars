// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26

// my solution

function lowercaseCount(str){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (/[a-z]/.test(str[i])) {
        count++;
      }
    }
    return count;
  }
