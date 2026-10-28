// Your phone shows its battery as a row of 5 bars. Each full bar represents 20% of charge. A bar only lights up when its whole 20% is reached.

// Write a function battery_bars(percent) that returns the battery as a string: # for a lit bar, . for an empty one, all wrapped in square brackets.

// Examples
// battery_bars(100)  # => "[#####]"
// battery_bars(70)   # => "[###..]"
// battery_bars(20)   # => "[#....]"
// battery_bars(19)   # => "[.....]"
// battery_bars(0)    # => "[.....]"
// Notes
// percent is an integer from 0 to 100

function batteryBars(p) {
  let full = p / 20;
 if(full < 1){
   return '[.....]'
 }else if( full < 2){
   return '[#....]'
 }else if( full < 3){
   return '[##...]'
 }else if( full < 4){
   return '[###..]'
 }else if( full < 5){
   return '[####.]'
 }else if( full === 5){
   return '[#####]'
 }
}
//or
function batteryBars(percent) {
  return ["[.....]", "[#....]", "[##...]", "[###..]", "[####.]", "[#####]"][
    Math.floor(percent / 20)
  ];
}
//given a percentage as an int
//return an str with []
//# === full bar 20%
//. === empty bar less than 20%
//5 elements in returned str always
//battery_bars(100) [#####]
//battery_bars(70) [###..]
//battery_bars(19) [.....]
//battery_bars(0) [.....]
//take p and divide by 20
//store num in a var
//that num and add same num of #
//the rest . up to and equal to 5