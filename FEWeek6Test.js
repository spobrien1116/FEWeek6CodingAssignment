// Test for FEWeek6CodingAssignment

var expect = chai.expect;

describe('UnitTestFunctions', function() {
    describe('#createPlayer', function() {
        it('should check that the created deck for a player is an array of 26 objects', function() {
            let goodArray = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],
            [12,0],[13,0],[14,0],[15,0],[16,0],[17,0],[18,0],[19,0],[20,0],[21,0],[22,0],[23,0],[24,0],[25,0]];
            let player = [];
            var x = new Player("Player 1");
            player.push(x.createPlayer(goodArray));
            expect(player[0].theDeck.length).to.equal(26);
        });

        it('should throw an error if the player received greater than or less than 26 objects', function() {
            let badArray = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],
            [12,0],[13,0],[14,0],[15,0],[16,0],[17,0],[18,0],[19,0],[20,0],[21,0],[22,0],[23,0],[24,0]];
            expect(function() {
                createPlayer(badArray);
            }).to.throw(Error);
        });
    });
});