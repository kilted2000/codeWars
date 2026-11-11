// This code should store "codewa.rs" as a variable called name (Name in C#, $name in Ruby) but it's not working. Can you figure out why?

//Solution I overthought

let a = "code";
let b = "wa.rs";
let name = `${a}` + `${b}`;

//alt

let a2 = "code";
let b2 = "wa.rs";
let name2 = a2 + b2;

//alt:

let name3 = "codewa.rs"
