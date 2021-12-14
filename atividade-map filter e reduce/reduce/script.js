// Primeira atividade dentro do reduce
function somaNumero(arr) {
    arr.reduce(function(prev, current) {
        return prev + current;
    });
}

const ARRAY = [1, 2];
console.log(somaNumero(ARRAY)); // Fechamento da primeira atividade


// Segunda atividade dentro do reduce
const LISTA = [
    {
        name: 'Sabão em pó',
        preco: 30,
    },
    {
        name: 'Cereal',
        preco: 12,
    },
    {
        name: 'Toalha',
        preco: 30,
    },
];

const SALDO_DISPONIVEL = 100;

function calculaSaldo(SALDO_DISPONIVEL, LISTA) {
    return LISTA.reduce(function(prev, current) {
        return prev - current.preco;
    }, SALDO_DISPONIVEL);
}

console.log(calculaSaldo(SALDO_DISPONIVEL, LISTA));