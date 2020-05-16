import faker from 'faker';

const productData = [];

for(let i = 1; i <= 12; i++) {
  productData.push({
    id: i,
    image: 'http://placehold.jp/640x480.png?text=placeholder',
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: `${faker.commerce.productAdjective()}, ${faker.commerce.productAdjective()}, ${faker.commerce.productAdjective()}`
  });
}

export default productData;
