// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// my solution

const isAnagram = function(test, original) {
    let str1 = test.toLowerCase();
    let str2 = original.toLowerCase();
    
    const sorted_str1 = str1.split('').sort().join('');
    const sorted_str2 = str2.split('').sort().join('');

    return sorted_str1 === sorted_str2;
};