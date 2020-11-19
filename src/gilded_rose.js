class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const selectedItem = this.items[i];
      if (
        selectedItem.name != 'Aged Brie' &&
        selectedItem.name != 'Backstage passes to a TAFKAL80ETC concert'
      ) {
        if (selectedItem.quality > 0) {
          if (selectedItem.name != 'Sulfuras, Hand of Ragnaros') {
            selectedItem.quality = selectedItem.quality - 1;
          }
        }
      } else {
        if (selectedItem.quality < 50) {
          selectedItem.quality = selectedItem.quality + 1;
          if (
            selectedItem.name == 'Backstage passes to a TAFKAL80ETC concert'
          ) {
            if (selectedItem.sellIn < 11) {
              if (selectedItem.quality < 50) {
                selectedItem.quality = selectedItem.quality + 1;
              }
            }
            if (selectedItem.sellIn < 6) {
              if (selectedItem.quality < 50) {
                selectedItem.quality = selectedItem.quality + 1;
              }
            }
          }
        }
      }
      if (selectedItem.name != 'Sulfuras, Hand of Ragnaros') {
        selectedItem.sellIn = selectedItem.sellIn - 1;
      }
      if (selectedItem.sellIn < 0) {
        if (selectedItem.name != 'Aged Brie') {
          if (
            selectedItem.name != 'Backstage passes to a TAFKAL80ETC concert'
          ) {
            if (selectedItem.quality > 0) {
              if (selectedItem.name != 'Sulfuras, Hand of Ragnaros') {
                selectedItem.quality = selectedItem.quality - 1;
              }
            }
          } else {
            selectedItem.quality =
              selectedItem.quality - selectedItem.quality;
          }
        } else {
          if (selectedItem.quality < 50) {
            selectedItem.quality = selectedItem.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
