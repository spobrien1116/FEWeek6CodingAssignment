// Test for FEWeek6CodingAssignment
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
    
    constructor(emptyDeck) {
        this.deck = emptyDeck;
        this.shuffledDeck = [];
    }

    // Using 4 for loops, calls on the Card class to create the 52 cards and push them into the array of this.deck.
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

    // This part is included to randomize the array of cards that were just created.
    shuffleDeck(newDeck) {
        for (let i = 0; i < newDeck.length; i++) {
            this.shuffledDeck.push(newDeck[i]);
        }

        for (let i = this.shuffledDeck.length - 1; i > 0; i--) {
            let r = Math.floor(Math.random() * (i + 1));
            let temp = this.shuffledDeck[i];
            this.shuffledDeck[i] = this.shuffledDeck[r];
            this.shuffledDeck[r] = temp;
        }

        return this.shuffledDeck;
    }

}


// Class designed to create a player for the game. Two players should be created in total.
class Player {
    
    constructor (player) {
        this.player = player;
        this.playerScore = 0;
    }

    createPlayer(randomDeck) {
        const thePlayer = {
            name: this.player,
            score: this.playerScore,
            theDeck: randomDeck
        };
        console.log(`${this.player} has been created. They start off with a score of ${this.playerScore} points.`);   
        console.log(this.player + "'s starting deck:");
        console.log(thePlayer.theDeck);
        return thePlayer;
    }

}


// Class designed to start the game. No input should be necessary from the user.
class Game {
    
    constructor() {
        this.deck = [];
        this.random = [];
        this.player1Deck = [];
        this.player2Deck = [];
        this.player1 = [];
        this.player2 = [];
    }
    
    createCardsAndDeck() {    
        let createTheCardsAndDeck = new Deck(this.deck);
        let newDeck = (createTheCardsAndDeck.createDeck());
        // This should show the non-shuffled deck.
        console.log("Here is the created deck, unshuffled.");
        console.log(newDeck);
        let random = (createTheCardsAndDeck.shuffleDeck(newDeck));
        console.log("Here is the new randomized deck. It consists of cards in this order: ");
        console.log(random);
        this.random = random;
        for (let i = 0; i < 26; i++) {
            this.player1Deck.push(this.random[i]);
        }
        for (let i = 26; i < 52; i++) {
            this.player2Deck.push(this.random[i]);
        }
    }
    
    createPlayers() {
        let player1 = new Player("Player 1");
        let player2 = new Player("Player 2");
        this.player1.push(player1.createPlayer(this.player1Deck));
        this.player2.push(player2.createPlayer(this.player2Deck));
        console.log("This is Player 1 ", this.player1);
        console.log("This is Player 2 ", this.player2);
    }

    beginFlipping() {
        for (let i = 0; i < this.player1Deck.length; i++) {
            console.log(this.player1[0].name + " has revealed the " + this.player1Deck[i].cardName + " of " + this.player1Deck[i].suit + ".");
            console.log(this.player2[0].name + " has revealed the " + this.player2Deck[i].cardName + " of " + this.player2Deck[i].suit + ".");
            if (this.player1Deck[i].value > this.player2Deck[i].value) {
                this.player1[0].score++;
                console.log(this.player1[0].name + " was awarded 1 point.");
            } else if (this.player1Deck[i].value < this.player2Deck[i].value) {
                this.player2[0].score++;
                console.log(this.player2[0].name + " was awarded 1 point.");
            } else {
                console.log("It was a tie. No points awarded to either player.");
            }
            console.log(this.player1[0].name + " currently has a score of " + this.player1[0].score + " points.");
            console.log(this.player2[0].name + " currently has a score of " + this.player2[0].score + " points.");
        }
        console.log(this.player1[0].name + " ends the game with a score of " + this.player1[0].score + " points.");
        console.log(this.player2[0].name + " ends the game with a score of " + this.player2[0].score + " points.");
        if (this.player1[0].score > this.player2[0].score) {
            console.log(this.player1[0].name + " is the winner!");
        } else if (this.player2[0].score > this.player1[0].score) {
            console.log(this.player2[0].name + " is the winner!");
        } else {
            console.log("The game ended in a tie.");
        }
    }

}

let game = new Game();
game.createCardsAndDeck();
game.createPlayers();
game.beginFlipping();