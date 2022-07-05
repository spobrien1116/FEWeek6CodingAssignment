// Class designed to create all 52 cards.
class Card {
    
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
        this.cardName = '';
    }

    cardCreator() {
        if (this.value === 11) {
            this.cardName = 'Jack';
        } else if (this.value === 12) {
            this.cardName = 'Queen';
        } else if (this.value === 13) {
            this.cardName = 'King';
        } else if (this.value === 14) {
            this.cardName = 'Ace';
        } else {
            this.cardName = this.value;
        }

        const card = {
            value: this.value,
            suit: this.suit,
            cardName: this.cardName
        };
        
        console.log(`A card has been created. It has a value of ${this.value}. It is the ${this.cardName} of ${this.suit}.`);
        return card;
    }

}


// Class designed to create a deck of all 52 cards.
class Deck {

}


// Class designed to create a player for the game. Two players should be created in total.
class Player {
    
    constructor (player) {
        this.player = player;
        this.playerScore = 0;
    }

    createPlayer() {
        console.log(`${this.player} has been created. They start off with a score of ${this.playerScore} points.`);
    }

}


// Class designed to start the game. No input should be necessary from the user.
class Game {
    
    constructor() {
        this.deck = [];

    }

    createCards() {
        for (let i = 2; i < 14; i++) {
            let cardSpade = new Card(i, 'Spades');
            console.log(cardSpade.cardCreator());
        }
    }
    
    createPlayers() {
        let player1 = new Player("Player 1");
        let player2 = new Player("Player 2");
        player1.createPlayer();
        player2.createPlayer();
    }

}

let game = new Game();
game.createCards();
game.createPlayers();