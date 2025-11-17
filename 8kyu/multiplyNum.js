// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

function multiply(num){
  let digitCount = String(Math.abs(num)).length;
  let power = num * (5 ** digitCount);
  return power;
}

//input a number can be 0 or negative
//multiply num by 5 to the power of the number of didgits it has
//output single num

//count the number of digits
//times the num input by 5 to the power of the digit number

//-2 * (5 ** 2)