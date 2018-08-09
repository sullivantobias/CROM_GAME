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
   }
}
