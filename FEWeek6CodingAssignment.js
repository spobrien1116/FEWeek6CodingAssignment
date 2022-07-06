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
    
    constructor() {
        this.deck = [];
    }

    createDeck() {
        for (let i = 2; i < 15; i++) {
            let cardSpade = new Card(i, 'Spades');
            this.deck.push(cardSpade.cardCreator());
        }

        for (let i = 2; i < 15; i++) {
            let cardHeart = new Card(i, 'Hearts');
            this.deck.push(cardHeart.cardCreator());
        }

        for (let i = 2; i < 15; i++) {
            let cardClub = new Card(i, 'Clubs');
            this.deck.push(cardClub.cardCreator());
        }

        for (let i = 2; i < 15; i++) {
            let cardDiamond = new Card(i, 'Diamonds');
            this.deck.push(cardDiamond.cardCreator());
        }

        return this.deck;
    }

}


// Class designed to create a player for the game. Two players should be created in total.
class Player {
    
    constructor (player) {
        this.player = player;
        this.playerScore = 0;
    }

    createPlayer(randomDeck) {
        let firstHalfOfDeck = [];
        let secondHalfOfDeck = [];
        console.log(`${this.player} has been created. They start off with a score of ${this.playerScore} points.`);
        if (this.player === "Player 1") {
            for (let i = 0; i < 26; i++) {
                firstHalfOfDeck.push(randomDeck[i]);
            }
            console.log(this.player + "'s starting deck:");
            console.log(firstHalfOfDeck);
        }
        if (this.player === "Player 2") {
            for (let i = 26; i < 52; i++) {
                secondHalfOfDeck.push(randomDeck[i]);
            }
            console.log(this.player + "'s starting deck:");
            console.log(secondHalfOfDeck);
        }
    }

}


// Class designed to start the game. No input should be necessary from the user.
class Game {
    
    constructor() {
        this.deck = [];
    }
    
    createCardsAndDeck() {    
        let createTheCardsAndDeck = new Deck();
        let newDeck = (createTheCardsAndDeck.createDeck());
        // This should show the non-shuffled deck.
        console.log("Here is the created deck, unshuffled.");
        console.log(newDeck);
        this.deck = newDeck;
        // This part is included to randomize the array of cards that were just created.
        // for (let i = this.deck.length - 1; i > 0; i--) {
        //     let r = Math.floor(Math.random() * (i + 1));
        //     let temp = this.deck[i];
        //     this.deck[i] = this.deck[r];
        //     this.deck[r] = temp;
        // }
        // console.log("Here is the new randomized deck. It consists of cards in this order: " + this.deck);
    }
    
    createPlayers() {
        let player1 = new Player("Player 1");
        let player2 = new Player("Player 2");
        player1.createPlayer(this.deck);
        player2.createPlayer(this.deck);
    }

}

let game = new Game();
game.createCardsAndDeck();
game.createPlayers();