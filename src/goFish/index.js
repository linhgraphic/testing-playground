const cardNames = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
const cardSuits = ["Clubs", "Diamonds", "Hearts", "Spades"];

export default class Game {
  constructor() {
    this.cards = Array.from({ length: 52 }, (_, i) => i);
  }

  static cardValue(cardCode) {
    return `${cardNames[cardCode % 13]} of ${
      cardSuits[Math.floor(cardCode / 13)]
    }`;
  }
}
