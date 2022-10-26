/**
 * Calcule o preço do imóvel
 * m2 = 3.000
 * Se tiver 1 quarto, o m2 é 1x
 * Se tiver 2 quartos, o m2 é 1.2x
 * Se tiver 3 quartos, o m2 é 1.5x
 * Uso da função
 */

function calcImovel(metragem, quartos) {
  let m2 = 3000;
  let preco = 0;
  switch (quartos) {
    case 1:
        preco = metragem * m2;
      break;

    case 2:
        preco = metragem * (m2 * 1.2);
      break;

    case 3:
        preco = metragem * (m2 * 1.5);
      break;

    default:
        preco = metragem * m2;
      break;
  }

  return preco;
}

let metragem = 36;
let quartos = 2;
let preco = calcImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);