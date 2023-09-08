import Character from '../character';

test('testing character creation', () => {
  const result = new Character('Don', 'Magician', 10, 40);

  expect(result).toEqual({
    name: 'Don',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  });
});

test('testing characters name', () => {
  expect(() => new Character('0', 'Magician', 10, 40)).toThrow(new Error('Имя персонажа должно содержать только символы, быть не меньше 2 и не больше 10 символов!'));
});

test('testing characters type', () => {
  expect(() => new Character('Don', 'Worker', 10, 40)).toThrow(new Error('Такой тип персонажа не существует'));
});

test('testing characters level up', () => {
  const magician = new Character('Don', 'Magician', 10, 40);
  magician.levelUp();

  expect(magician).toEqual({
    attack: 12,
    defense: 48,
    health: 100,
    level: 2,
    name: 'Don',
    type: 'Magician',
  });
});

test('testing characters level up if health is less than 0', () => {
  const magician = new Character('Don', 'Magician', 10, 40);
  magician.health = -1;

  expect(() => magician.levelUp()).toThrow(new Error('Нельзя повысить уровень умершего'));
});

test('testing characters damage return', () => {
  const magician = new Character('Don', 'Magician', 10, 40);
  magician.damage(11);

  expect(magician).toEqual({
    attack: 10,
    defense: 40,
    health: 93.4,
    level: 1,
    name: 'Don',
    type: 'Magician',
  });
});

test('testing characters damage return if health is less than 0', () => {
  const magician = new Character('Don', 'Magician', 10, 40);
  magician.health = -1;

  expect(() => magician.damage(11)).toThrow(new Error('Персонаж уже мертв'));
});
