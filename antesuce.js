const prompt = require('prompt-sync')();

var number = parseInt(prompt('Digite um numero: '));
var antecessor = number - 1;
var sucessor = number + 1; 

console.log('O Antecessor é: '+antecessor+" - E o sucessor é: "+sucessor)