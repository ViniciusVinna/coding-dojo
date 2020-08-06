const { products } = require('./products.json');
const { 
  getProductsByIds, 
  getProductCategory, 
  getTotalPrice, 
  getCartPromotion,
  getTotalPriceWithPromotion,
} = require('./cart');

const mockGetProductsByIds = [
  {
    "id": 120,
    "name": "DISNEY CRUELLA© T-SHIRT",
    "category": "T-SHIRTS",
    "regularPrice": 114.99,
    "promotions": [
      {
        "looks": ["SINGLE LOOK", "DOUBLE LOOK"],
        "price": 109.99
      },
      {
        "looks": ["TRIPLE LOOK", "FULL LOOK"],
        "price": 99.99
      }
    ]
  },
  {
    "id": 230,
    "name": "KNIT JOGGING PANTS",
    "category": "PANTS",
    "regularPrice": 174.99,
    "promotions": [
      {
        "looks": ["SINGLE LOOK"],
        "price": 174.99
      },
      {
        "looks": ["DOUBLE LOOK"],
        "price": 154.99
      },
      {
        "looks": ["TRIPLE LOOK", "FULL LOOK"],
        "price": 144.99
      }
    ]
  },
  {
    "id": 310,
    "name": "ASYMMETRICAL LEATHER SLIDE HEELS",
    "category": "SHOES",
    "regularPrice": 89.99,
    "promotions": [
      {
        "looks": ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"],
        "price": 79.99
      }
    ]
  },
  {
    "id": 490,
    "name": "SOFT FLAP BACKPACK",
    "category": "BAGS",
    "regularPrice": 99.99,
    "promotions": [
      {
        "looks": ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"],
        "price": 79.99
      }
    ]
  }
];

describe('getProductsByIds', () => {
  it('deveria retornar um array de objetos baseados nos IDS', () => {
    
    const resultado = getProductsByIds([120, 230, 310, 490], products)

    expect(resultado).toEqual(mockGetProductsByIds)
  });
});

describe('getProductCategory', () => {
  it('Deveria retornar a categoria de um produto recebido via props', () => {
    const produtos = getProductsByIds([120, 130, 210, 220], products)
    const resultado = getProductCategory(produtos)
    expect(resultado).toEqual(["T-SHIRTS", "PANTS"])
  })
})

describe('getTotalPrice', () => {
  it('Deveria retornar o valor total sem desconto', () => {
    const produtos = getProductsByIds([120, 230, 310, 490], products)
    const resultado = getTotalPrice(produtos)
    expect(resultado).toBe(479.96)
  })
})

describe('getCartPromotion', () => {
  it('Deveria retornar a promoção que será aplicada', () => {
    const produtos = getProductsByIds([120, 130, 210, 220], products)
    const categories = getProductCategory(produtos)
    const resultado = getCartPromotion(categories)
    expect(resultado).toBe("DOUBLE LOOK")
  })
})

describe('getTotalPriceWithPromotion', () => {
  it('Deveria retornar a promoção que será aplicada', () => {
    const produtos = getProductsByIds([120, 130, 210, 220], products)
    const categories = getProductCategory(produtos)
    const promotion = getCartPromotion(categories)

    const resultado = getTotalPriceWithPromotion(promotion, produtos)

    expect(resultado).toBe(404.96)
  })
})
