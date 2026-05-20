// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(g){
  //Perameters
    //you have an array of grades
    //array will never be empty
  //Return
    //add all the grades together and divide by the number of grades
    //round down average to nearest integer 
  //Examples
    console.log(([2,2,2,2]),2);
    console.log(([1,2,3,4,5,]),3);
    console.log(([1,1,1,1,1,1,1,2]),1);
  //Pseudocode
    //take numbers in the array
    //add them all together
      //array.reduce()
      //store sum in sum var
    //divide sum by array length
      //sum / array.length
   //round down to nearest integer
      //Math.floor

function getAverage(grades){
return Math.floor(grades.reduce((acc, currentValue) => acc + currentValue,0) / grades.length)
}
}

//done without using AI