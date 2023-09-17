const prompt = require('prompt-sync')();

var valor = prompt('Valor: ');
var taxa = prompt('Taxa: ');
var tempo = prompt('Tempo: ');
var prestacao = valor+(valor*(taxa/100)*tempo)

console.log(prestacao)

