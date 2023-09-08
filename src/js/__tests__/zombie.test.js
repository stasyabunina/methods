import Zombie from '../zombie';

test('testing zombie creation', () => {
  const zombie = new Zombie('Felix');

  expect(zombie).toEqual({
    name: 'Felix',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  });
});
