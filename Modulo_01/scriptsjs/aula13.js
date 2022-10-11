/** Aula 13 */
// Multi condicionais && e " || <- ou "
// Dupla condicional if else

// let idade = 17;

// if ( idade >=18 )    {
//     if ( idade <60 ) {
//         console.log('Você é um adulto')
//     } else {
//         console.log('Você é um idoso.')
//     }
// } else {
//     console.log('Você é manor de idade')
// }

// Dupla condicional if else
// if (idade >= 18 && idade < 60) {
//   console.log("Você é um adulto");
// } else if (idade >= 60) {
//     console.log("Você é um idoso.");
// } else {
//     console.log("Você é menor de idade");
// }

// Desmistificando o if
let idade = 17;

let verificacao = idade > 18;

if (idade > 18) {
    console.log('Você é um adulto');
}

let ok = false;
// if somente verifica true ou false
if (ok) {
    console.log('Entrou no if');
} else {    
    console.log('Não entrou no if');
}


