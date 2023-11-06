// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// my solution


function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    classPoints.push(yourPoints);
    for(let i = 0;i < classPoints.length; i++){
      sum += classPoints[i];
      }
       const average = sum / classPoints.length
       return yourPoints > average;
  }
  
  
  
  //use classPoints.push to add yourPoints
  //iterate though classPoints array
  //find the sum of numbers in classPoints array
  //divide sum by classPoints.length
  //if yourPoints is higher than classPoints return True
  //is not return False