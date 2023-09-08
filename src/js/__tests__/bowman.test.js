import Bowman from '../bowman';

test('testing bowman creation', () => {
  const bowman = new Bowman('Viktor');

  expect(bowman).toEqual({
    name: 'Viktor',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  });
});
