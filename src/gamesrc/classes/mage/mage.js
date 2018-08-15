import Mages from './mage.json';
import {Caracters} from '../templates/caracters';

/**
 * @class Warrior
 */
export class Mage extends Caracters {
   /**
    * @constructor
    */
   constructor() {
      super();

      this.name = Mages.Name;
      this.life = Mages.Life;
      this.prot = Mages.Prot;
      this.resume = Mages.Resume;
      this.sprite = {
         image: Mages.Sprite,
         sx: 24,
         sy: 24,
         sWidth: 102,
         sHeight: 120,
         dx: 400,
         dy: 200,
         dWidth: 96,
         dHeight: 144,
      };
   }
}
