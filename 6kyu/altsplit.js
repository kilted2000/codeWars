// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// my solution

function encrypt(text, n) {
    if (!text || n <= 0) return text;
    let arr = text.split('');
    let odd = [];
    let even = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < arr.length; j++) {
        j % 2 === 0 ? even.push(arr[j]) : odd.push(arr[j]);
        }
        arr = odd.concat(even);
        odd = [];
        even = [];
    }
    return arr.join('');
    }

function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    let arr = encryptedText.split('');
    let odd = [];
    let even = [];
    const half = Math.floor(arr.length / 2);
    for (let i = 0; i < n; i++) {
        odd = arr.slice(0, half);
        even = arr.slice(half);
        arr = [];
        for (let j = 0; j < half; j++) {
        arr.push(even[j], odd[j]);
        }
        if (odd.length < even.length) arr.push(even[even.length - 1]);
    }
    return arr.join('');
    }
    