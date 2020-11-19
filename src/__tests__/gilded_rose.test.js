const { Shop, Item } = require('../gilded_rose');

describe('Gilded Rose', () => {
  it('should retain list when > 0 passed to Shop', () => {
    const testData = [
      new Item('foo', 1, 3),
      new Item('bar', 2, 2),
      new Item('fizz', 3, 1),
    ];
    const gildedRose = new Shop(testData);
    expect(gildedRose).toMatchObject({
      items: [
        { name: 'foo', quality: 3, sellIn: 1 },
        { name: 'bar', quality: 2, sellIn: 2 },
        { name: 'fizz', quality: 1, sellIn: 3 },
      ],
    });
  });
});
