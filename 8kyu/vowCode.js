// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// my solution

function isVow(a) {
    const vowels = [97, 101, 105, 111, 117];
    const result = a.map((num) => {
        if (vowels.includes(num)) {
            return String.fromCharCode(num);
        } else {
            return num;
        }
    });
    return result;
}