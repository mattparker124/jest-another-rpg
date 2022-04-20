function Character () {}

Character.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};

Character.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    }

    return true;
};

Character.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

Character.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};

module.exports = Character;