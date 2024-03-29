// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


// my solution

function high(x){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let words = x.split(' ');
    let scores = [];
    for (let i = 0; i < words.length; i++) {
      let score = 0;
      for (let j = 0; j < words[i].length; j++) {
        score += alphabet.indexOf(words[i][j]) + 1;
      }
      scores.push(score);
    }
    return words[scores.indexOf(Math.max(...scores))];
  }