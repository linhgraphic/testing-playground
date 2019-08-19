import Game from "./";

// main block - the "family" of tests
describe("Game should", () => {
  // sub blocks, all the features we want to test
  it("contain 52 cards", () => {
    const game = new Game();
    expect(game.cards).toHaveLength(52);
  });

  it("convert cards from values 0 - 51", () => {
    expect(Game.cardValue(0)).toBe("Ace of Clubs");
    expect(Game.cardValue(1)).toBe("2 of Clubs");
    expect(Game.cardValue(13)).toBe("Ace of Diamonds");
    expect(Game.cardValue(14)).toBe("2 of Diamonds");
    expect(Game.cardValue(35)).toBe("10 of Hearts");
    expect(Game.cardValue(36)).toBe("Jack of Hearts");
    expect(Game.cardValue(50)).toBe("Queen of Spades");
    expect(Game.cardValue(51)).toBe("King of Spades");
  });

  // add more here :)
});
