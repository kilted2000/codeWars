// Remove First and Last Character
// Task
// Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

// Examples
// 'eloquent' --> 'loquen'
// 'country'  --> 'ountr' 
// 'person'   --> 'erso'
// 'ab'       --> '' (empty string)
// 'xyz'      --> 'y'
// Requirements
// The input string will always have at least 2 characters
// For strings with exactly 2 characters, return an empty string
// For strings with 3 or more characters, remove the first and last character
// The function should handle strings containing letters, numbers, and special characters
// Test Cases
// Your solution will be tested against:

// Basic functionality with common words
// Edge cases with 2-character and 3-character strings
// Strings containing numbers and special characters
// Random test cases of varying lengths

function removeChar(str){

let firstLast = str.split("")
firstLast.shift()
firstLast.pop()
return firstLast.join("");
};

//check input str
//check str.length
//if only 2 chars then return empty string
//else remove first and last chars and return what reamins


//string is imputed
//string is at least 2 characters long
//remove first and last chars in str
//if string.length = 2 return empty string
//chars can be letters, numbers or special chars
//great = rea    123 = 2