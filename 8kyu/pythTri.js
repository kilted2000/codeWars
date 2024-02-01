// Complete challenging Kata to earn honor and ranks. Re-train to hone technique
// Freestyle Sparring
// Take turns remixing and refactoring others code through Kumite
// COMMUNITY
// Leaderboards
// Achieve honor and move up the global leaderboards
// Chat
// Join our Discord server and chat with your fellow code warriors
// Discussions
// View our Github Discussions board to discuss general Codewars topics
// ABOUT
// Docs
// Learn about all of the different aspects of Codewars
// kilted2000 Avatar
// 4 kyu
// 970
// 8 kyu
// Pythagorean Triple
// 1215189% of 1,5893,544 of 14,465elexie3 Issues Reported
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

// A Pythagorean Triple consists of arranging 3 integers, such that:

// a2 + b2 = c2

// Examples
// [5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

// [3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

// [13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132

// [100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, you will never find a way to satisfy the equation a2 + b2 = c2

// Return Values
// For Python: return True or False
// For JavaScript: return true or false
// Other languages: return 1 or 0 or refer to Sample Tests.

// my solution

function pythagoreanTriple(integers) {
    integers.sort((a, b) => a - b)
    return integers[0] ** 2 + integers[1] ** 2 === integers[2] ** 2
}