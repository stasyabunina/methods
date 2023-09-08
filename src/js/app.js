import Bowman from './bowman';
import Swordsman from './swordsman';
import Magician from './magician';
import Undead from './undead';
import Zombie from './zombie';
import Daemon from './daemon';
import Character from './character';

const warrior = new Character('Don', 'Swordsman', 100, 1, 40, 10);
console.log(warrior);

const bowman = new Bowman('Viktor');
const swordsman = new Swordsman('John');
const magician = new Magician('Merlin');
const undead = new Undead('Boris');
const zombie = new Zombie('Felix');
const daemon = new Daemon('Michael');

console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(undead);
console.log(zombie);
console.log(daemon);
