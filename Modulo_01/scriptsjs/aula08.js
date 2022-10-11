/**     Aula 09 
 * Let
 * Const
 * Var
 */

/** Estes tipos de variáveis podem ser modificadas 
 * Let e var 
*/
// Este tipo de variávcel funciona somente no contexto em que foi criada
let nome = "Welington";
let sobrenome = "Souza";
let idade = 40;
// reescrita da variável
idade = 35;

console.log(nome);
console.log(sobrenome);
console.log(idade);
// Este tipo de variável funciona em qualquer contexto
var cidade = "Blumenau";
var estado = "Santa Catarina";
// Reescrita da variável
cidade = "Gaspar";

console.log(cidade);
console.log(estado);

/** O tipo de variável const 
 * Não pode ser modificada 
 * Variável constante, não pose ser alterada
 * */
const first = "NameFirst";
const second = "NameSecond";

console.log(first);
console.log(second);