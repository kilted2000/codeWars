// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

// my solution

function odds(values){
    return values.filter(value => value % 2 !== 0)
}