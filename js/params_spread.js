"use strict";

// function greet($greeting = "Hello World") { //put a default value in parameter for when you call w/out parameters
//   console.log($greeting);
// }

// greet();

let args1 = [1, 2, 3];
let args2 = [4, 5, 6];

function test() {
  console.log(args1 + "," + args2);
}

//test.apply(null, args);
test(...args1, ...args2);
