// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

function shortLongShort(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
}

shortLongShort('hello', 'bob')

//In JavaScript, strings have a .length property too, not just arrays. It returns the number of characters (technically UTF-16 code units) in the string:
//.length counts UTF-16 code units, not visible characters, so something like an emoji ////('😀'.length === 2) can surprise you.