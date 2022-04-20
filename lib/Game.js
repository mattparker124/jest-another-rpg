const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.Player;
}

// Called to start the game
Game.prototype.initializeGame = function() {

    // Populate the enemies to be fought
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'axe'));
    this.enemies.push(new Enemy('skeleton', 'mace'));

    // Set the current enemy to the first enemy
    this.currentEnemy = this.enemies[0];

    // Prompt the user for their name
    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        // Destructure name from the prompt object
        .then(({ name }) => {
            this.player = new Player(name);

            // Test the object creation
            console.log(this.currentEnemy, this.player);
        });
};

module.exports = Game;