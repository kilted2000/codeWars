// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// my solution


function longest(s1, s2) {
    
    const mergedString = s1 + s2;
    const charArray = mergedString.split("");
    const charSet = new Set(charArray);
    const distinctCharArray = Array.from(charSet);
    distinctCharArray.sort();
    const sortedString = distinctCharArray.join("");
  
    return sortedString;
  }
  