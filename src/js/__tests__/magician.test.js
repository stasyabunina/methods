import Magician from '../magician';

test('testing magician creation', () => {
  const magician = new Magician('Merlin');

  expect(magician).toEqual({
    name: 'Merlin',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  });
});
