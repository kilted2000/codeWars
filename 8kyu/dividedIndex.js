
// this is the goal Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

function multipleOfIndex(array) {
  let out = [];
 
  for(let i = 0;i <= array.length;i++){
    //modulo num by index
    //retun all that = 0
  if (i === 0 && array[i] === 0) {
      out.push(array[i]);
    } else if (i !== 0 && array[i] % i === 0) {
      out.push(array[i]);
      }
  }
  return out;
}

// let nums = [1,2,3,4,5,6,7,8,9,10];
// let mods = [];
// for(let i =0;i<=nums.length;i++){
//   if(i % 3 == 0){
//    mods.push(i)
//   }
//   console.log(mods);
// }

//go thru array
//no funny biz
//check if a number is divisible by its index
//return those nums