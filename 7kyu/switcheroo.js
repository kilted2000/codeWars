// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// my solution

function switcheroo(x){
    return x.split('').map(function(char){
      if (char === 'a') {
        return 'b';
      } else if (char === 'b') {
        return 'a';
      } else {
        return char;
      }
    }).join('');
  }