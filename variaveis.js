const prompt = require('prompt-sync')();
var A;
var B;

var A = prompt('Digite: ')
var B = prompt('Digite de novo: ')

let guarda = A;

A = B;
B = guarda;

console.log(A+B)