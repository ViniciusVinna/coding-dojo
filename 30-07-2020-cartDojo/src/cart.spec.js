const { products } = require('./products.json');
const { soma } = require('./cart');

describe('getProductsByIds', () => {
  it('deveria retornar um array de objetos baseados nos IDS', () => {
    const resultado = getProductsByIds([120, 230, 310, 490])

    expect(resultado).toEqual([])
  });
});