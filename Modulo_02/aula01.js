 // Módulo 02 
  
 // Aula 01 - Funções 
 
// Criando a função
// function gravidade() {
//     console.log('A gravidade do planeta é: ');
//     console.log(9.8);
// }

// Aula 02 

// Chamando a função
// gravidade();

// Aula 03

// Passando parâmetros em funções

// function somar(n1, n2) {
//     let resultado = n1 + n2;
//     console.log('Resultado: ' + resultado);
// }

// somar(10, 15);

function nomeCompleto(nome, sobrenome) {
    // console.log(`${nome} ${sobrenome}`);
    return `${nome} ${sobrenome}`;
}
/** Retorno da função aula 05 */
// nomeCompleto('Wellington', 'de Souza');
let completo = nomeCompleto('Wellington', 'de Souza');
console.log('Completo: ' + completo);

