const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function encontrarDonoDoPet(petProcurado) {
    for (const usuario of usuarios) {
        if (usuario.pets.includes(petProcurado)) {
            console.log(`O dono(a) do(a) ${petProcurado} é o(a) ${usuario.nome}.`);
            return;
        }
    }
    console.log(`Que pena ${petProcurado}, não encontramos seu dono(a).`);
}

encontrarDonoDoPet('Max');
encontrarDonoDoPet('Pingo');
encontrarDonoDoPet('Lessie');
encontrarDonoDoPet('Lola');