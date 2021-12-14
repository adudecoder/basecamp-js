const alunos = [

    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Duda',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Luiz',
        nota: 3,
        turma: '2C',
    },

];

function alunosAproavados(arr, media) {

    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }

    }

    return aprovados;

}

console.log(alunosAproavados(alunos, 5));