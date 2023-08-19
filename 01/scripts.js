const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

const resultado = frutas.reverse();
console.log(resultado.join(', '));

frutas.shift();
frutas.pop();

console.log(frutas.reverse());
frutas.push('Melão');
console.log(frutas);

