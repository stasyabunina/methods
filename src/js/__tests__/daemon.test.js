import Daemon from '../daemon';

test('testing daemon creation', () => {
  const daemon = new Daemon('Michael');

  expect(daemon).toEqual({
    name: 'Michael',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  });
});
