const prompt = require('prompt-sync')();

const pi = 3.14159;
var raio = prompt('Digite o raio: ');
var altura = prompt('digite a altura: ')
var volume = pi * raio ** 2 * altura;

console.log(volume)
