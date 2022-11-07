import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  describe("Items", () => {
    it("Should have a sellIn value", () => {
      //Given
      const name = "testItem";
      const sellInValue = 10;
      const qualityValue = 5;
      //When
      var item = new Item(name, sellInValue, qualityValue);
      //Then
      expect(item.sellIn).toBe(sellInValue);
    });
    it("Should have a quality value", () => {
      //Given
      const name = "testItem";
      const sellInValue = 10;
      const qualityValue = 5;
      //When
      var item = new Item(name, sellInValue, qualityValue);
      //Then
      expect(item.quality).toBe(qualityValue);
    });
    it("Should have a name", () => {
      //Given
      const name = "testItem";
      const sellInValue = 10;
      const qualityValue = 5;
      //When
      var item = new Item(name, sellInValue, qualityValue);
      //Then
      expect(item.name).toBe(name);
    });
  });
  describe("UpdateRules", () => {
    it("Should decrease  ");
  });
});
