const prompt = require('prompt-sync')();

var pes = parseFloat(prompt('Digite uma medida em pés: '));
var metros = pes * 0.3048

console.log(metros + " metros")