// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

// my solution

function generateShape(integer) {
    let str = ''
    for (let i = 0; i < integer; i++) {
        str += '+'.repeat(integer) + '\n'
    }
    return str.trim()
}