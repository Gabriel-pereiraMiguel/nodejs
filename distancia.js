const prompt = require('prompt-sync')();

let tempo = prompt('Digite o tempo: ');
let velocidade = prompt('Digite a velocidade: ');
let distancia = tempo * velocidade;
let litros = distancia / 12;

console.log('A distancia percorrida é: '+ distancia)


console.log('e os litros gastos foram: '+litros)