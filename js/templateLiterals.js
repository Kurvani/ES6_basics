"use strict";

//Template literals lets you break apart lines of code without having to concatenate them together manually. QOL
// Using ${..} lets you use variables and functions with template literals

let name = "John";

function makeUppercase(word) {
  return word.toUpperCase();
}

let template = `<h1>${makeUppercase("Hello")}, ${name}</h1>
 <p>This is a simple template in Javascript</p>`;

document.getElementById("template").innerHTML = template;
