const Potion = require('../lib/Potion');
//sets a default empty string if no name is provided
function Player(name = ''){
    this.name = name;
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];
}

// function Player(name = '', health, strength, agility){
//     this.name = name;
//     this.health = health
//     this.strength = strength;
//     this.agility = agility;
// }

module.exports = Player;