import {createCanvas} from '../../createFunctions/createCanvas';
import {STATE} from '../../const/const';
import {Mage} from '../../classes/mage/mage';

/**
 * class instance
 */

const mage = new Mage();

/**
 * warrior
 */

export const mageScreen = () => {
   /**
    * remove old components
    */
   createCanvas();

   /** set state */
   STATE.setTitle('mageScreen');

   /** draw warrior content */
   mage.content;
};
