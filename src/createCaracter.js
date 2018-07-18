import {Warrior} from './warrior.js';

export const makeWarrior = () => {
   const oneWarrior = new Warrior();

   let {warriorLife, warriorProt} = oneWarrior;
   const warriorresume = `Warrior Created |
  Life : ${warriorLife} / Prot : ${warriorProt}
  `;
   document.querySelector('#resume').innerHTML = warriorresume;
};
