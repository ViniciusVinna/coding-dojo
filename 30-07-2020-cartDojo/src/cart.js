// Receber os arrays e retornar os produtos baseados nos ids
// Descobrir o tipo de desconto que será aplicado baseado nos produtos de entrada
// Pegar o valor total sem descontos
// Pegar o valor total com o desconto
// Calcular o total de desconto
// Calcular a porcentagem de desconto
// Montar o objeto de retorno


const getProductsByIds = (ids, products) => {
  return products.filter(item => ids.includes(item.id));
}

const getProductCategory = (products) => {
  const categories = products.map(item => item.category)
  return [...new Set(categories)]
}

const getTotalPrice = (products) => {
   
  const resultado = products.reduce((value, item) => {
    return (value + item.regularPrice)
  }, 0).toFixed(2)

  return parseFloat(resultado)
}

module.exports = {
  getProductsByIds,
  getProductCategory,
  getTotalPrice
}
