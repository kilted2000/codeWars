// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// my solution

function cubeOdd(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return undefined
        } else if (arr[i] % 2 !== 0) {
            sum += Math.pow(arr[i], 3)
        }
    }
    return sum
}