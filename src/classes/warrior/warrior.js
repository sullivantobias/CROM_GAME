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
   }
}
