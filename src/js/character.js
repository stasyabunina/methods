export default class Character {
  constructor(name, type, attack, defense) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа должно содержать только символы, быть не меньше 2 и не больше 10 символов!');
    } else {
      this.name = name;
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!types.includes(type)) {
      throw new Error('Такой тип персонажа не существует');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defense = defense;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += (this.attack / 100) * 20;
      this.defense += (this.defense / 100) * 20;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить уровень умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defense / 100);
    } else {
      throw new Error('Персонаж уже мертв');
    }
  }
}
