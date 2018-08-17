import Humans2 from './human2.json';
import {Caracters} from '../templates/caracters';

/**
 * @class Warrior
 */
export class Human2 extends Caracters {
   /**
    * @constructor
    */
   constructor() {
      super();

      this.name = Humans2.Name;
      this.life = Humans2.Life;
      this.prot = Humans2.Prot;
      this.resume = Humans2.Resume;
      this.sprite = {
         image: Humans2.Sprite,
         sx: 70,
         sy: 10,
         sWidth: 550,
         sHeight: 660,
         dx: 400,
         dy: 200,
         dWidth: 120,
         dHeight: 144,
      };
   }
}
