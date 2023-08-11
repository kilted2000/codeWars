// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// my solution

function nameShuffler(str){
    const names = str.split(' ');
  
  if (names.length >= 2) {
    const lastName = names.pop();
    const firstName = names.join(' ');
    return `${lastName} ${firstName}`;
  } else {
    return str; 
  }
}