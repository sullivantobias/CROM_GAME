import {createCanvas} from '../../createFunctions/createCanvas';
import {STATE} from '../../const/const';
import {Warrior} from '../../classes/warrior/warrior';

/**
 * class instance
 */

const warrior = new Warrior();

/**
 * warrior
 */

export const warriorScreen = () => {
   /**
    * remove old components
    */
   createCanvas();

   /** set state */
   STATE.setTitle('warriorScreen');

   /** draw warrior content */
   warrior.content;
};
