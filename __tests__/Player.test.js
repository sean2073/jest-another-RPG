
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');

console.log(new Potion());

const Player = require('../lib/Player.js');



test('creates a player object', () => {
    const player = new Player('Sean');
  
    expect(player.name).toBe('Sean');
    
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
      );
  });

//   test('creates a player object', () => {
//     const player = new Player('Sean', 12, 2, 1);
  
//     expect(player.name).toBe('Sean');
//     expect(player.health).toBe(12);
//     expect(player.strength).toBe(2);
//     expect(player.agility).toBe(1);
   
//   });