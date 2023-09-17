const prompt = require('prompt-sync')();

var fahrenheit = prompt('Digite os graus em fahrenheit: ');
var celsius = ((fahrenheit-32)*5)/9

console.log('O valor convertido em graus celsius é: '+celsius)