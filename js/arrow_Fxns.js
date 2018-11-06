"use strict";

// allows you to bind "this" lexically
// normally you'd have to do that = this and then use that, arrows let you just use => and stick with this.

// function Prefixer(prefix) {
//   this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function(arr) {
//   //takes in an array
//   //let that = this;
//   return arr.map(x => {
//     console.log(this.prefix + x);
//   });
// };

// let pre = new Prefixer("Hello ");
// pre.prefixArray(["Brad", "Jeff"]);

// let add = function(a, b) {
//   let sum = a + b;
//   console.log(sum);
//   return false;
// };

// add(2, 2);

let add = (a, b) => {
  let sum = a + b;
  console.log(sum);
  return false;
};

add(10, 2);
