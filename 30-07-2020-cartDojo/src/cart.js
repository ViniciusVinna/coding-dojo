// Receber os arrays e retornar os produtos baseados nos ids
// Descobrir o tipo de desconto que será aplicado baseado nos produtos de entrada
// Pegar o valor total sem descontos
// Pegar o valor total com o desconto
// Calcular o total de desconto
// Calcular a porcentagem de desconto
// Montar o objeto de retorno

const { products } = require('./products.json');

const getProductsByIds = (ids) => {
  return products.filter(item => ids.includes(item.id));
}

module.exports = {
  soma,
}