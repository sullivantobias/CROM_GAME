import Warriors from './warrior.json';
import {Caracters} from '../templates/caracters';

/**
 * @class Warrior
 */
export class Warrior extends Caracters {
   /**
    * @constructor
    */
   constructor() {
      super();
      this.name = Warriors.Name;
      this.life = Warriors.Life;
      this.prot = Warriors.Prot;
      this.resume = Warriors.Resume;
      this.sprite = {
         image: Warriors.Sprite,
         sx: 24,
         sy: 12,
         sWidth: 48,
         sHeight: 72,
         dx: 400,
         dy: 200,
         dWidth: 96,
         dHeight: 144,
      };
   }
}
