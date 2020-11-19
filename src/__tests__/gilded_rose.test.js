const { Shop, Item } = require('../gilded_rose');

describe('Gilded Rose', () => {
  describe('Shop', () => {
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
  describe('Quality', () => {
    const testData = [
      ['foo', 1, 2, { name: 'foo', quality: 1, sellIn: 0 }],
      ['bar', 2, 3, { name: 'bar', quality: 2, sellIn: 1 }],
      ['fizz', 8, 3, { name: 'fizz', quality: 2, sellIn: 7 }],
      ['buzz', 2, 50, { name: 'buzz', quality: 49, sellIn: 1 }],
      ['bizz', -2, 49, { name: 'bizz', quality: 47, sellIn: -3 }],
    ];
    testData.map((testset) => {
      const [name, sellIn, quality, expected] = testset;
      it(`should ${name} with sellIn of '${sellIn}' and a quality of '${quality}' return expected`, () => {
        const gildedRose = new Shop([new Item(name, sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0]).toMatchObject(expected);
      });
    });
  });
});
