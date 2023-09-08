import Swordsman from '../swordsman';

test('testing swordsman creation', () => {
  const swordsman = new Swordsman('John');

  expect(swordsman).toEqual({
    name: 'John',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  });
});
