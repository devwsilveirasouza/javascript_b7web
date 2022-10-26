/*
Crie uma função que valide usuário e senha.
Usuário correto: pedro
Senha correta: 123
*/

function validar(usuario, senha) {
    if(usuario === 'wellington' && senha === '1234') {
        return true;
    } else {
        return false;
    }
}

let usuario = 'wellington';
let senha = '1234';
let validacao = validar(usuario, senha);

if(validacao) {
    console.log('Acesso concedido!');
} else {
    console.log('Acesso negado.');
}