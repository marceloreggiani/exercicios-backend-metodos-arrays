const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

let grupo1 = nomes.slice(0, 4)
let grupo2 = nomes.slice(4)
console.log("Grupo 1: ", grupo1.join(', '));
console.log("Grupo 2: ", grupo2.join(', '));
