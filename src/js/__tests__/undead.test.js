import Undead from '../undead';

test('testing undead creation', () => {
  const undead = new Undead('Boris');

  expect(undead).toEqual({
    name: 'Boris',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  });
});
