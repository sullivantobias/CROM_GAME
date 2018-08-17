import Humans from './human.json';
import {Caracters} from '../templates/caracters';

/**
 * @class Warrior
 */
export class Human extends Caracters {
   /**
    * @constructor
    */
   constructor() {
      super();
      this.name = Humans.Name;
      this.life = Humans.Life;
      this.prot = Humans.Prot;
      this.resume = Humans.Resume;
      this.sprite = {
         image: Humans.Sprite,
         sx: 70,
         sy: 0,
         sWidth: 600,
         sHeight: 670,
         dx: 400,
         dy: 200,
         dWidth: 120,
         dHeight: 144,
      };
   }
}
