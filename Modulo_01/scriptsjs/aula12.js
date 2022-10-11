/** Aula 12
 * 
 * Condicionais:
 * 
 *  == & ===
 * == Não verifica a tipagem de dados apenas o conteúdo
 * === Verifica a tipagem de dados
 * 
 */

let idade = 20;

if(idade === 20) {
    console.log("Você têm 20 anos.");
}

let idad = "20";

if (idad == 20) {
    idad = idad + 20;
    console.log('Você têm ' + idad + ' anos.');
}