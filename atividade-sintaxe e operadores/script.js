function comparaNumeros(num1, num2) {

   const primeiraFrase = criaPrimeiraFrase(num1, num2);
   const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;

}

function criaPrimeiraFrase(num1, num2) {

    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não'
    }

    return `Os numeros ${num1} e ${num2} ${saoIguais} são iguais.`;

}

function criaSegundaFrase(num1, num2) {

    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {

       resultado10 = 'maior';

    }

    if (compara20) {

        resultado20 = 'maior';

    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`;

}

console.log(comparaNumeros(1, 2));

// function operacao() {

//     let n1 = Number(prompt("Insira o primeiro valor:"));
//     let n2 = Number(prompt("Insira o segundo valor:"));
//     let resultado;

//     function soma() {

//         resultado = n1 + n2;
//         alert(`${n1} + ${n2} = ${resultado}`);

//     }

//     soma();

//     function verificarIgualdade() {

//         if (n1 == n2){
            
//             alert(`Os números ${n1} e ${n2} são iguais. E sua soma é ${resultado}`);

//         } else {

//             alert(`Os números ${n1} e ${n2} são diferentes. E sua soma é ${resultado}`);

//         }

//     }

//     verificarIgualdade();

//     function retornarString() {

//         if (resultado > 10 || resultado < 20) {
//             alert(`${verificarIgualdade()} `)
//         }

//     }

//     retornarString();

// }

// operacao();