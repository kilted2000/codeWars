// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// my solution

function divCon(x) {
    let num = 0;
    let str = 0;
    x.forEach(element => {
        if (typeof element === 'number') {
            num += element;
        } else {
            str += Number(element);
        }
    });
    return num - str;
}