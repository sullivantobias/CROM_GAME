import {createCanvas} from '../../createFunctions/createCanvas';
import {STATE} from '../../const/const';
import {Human2} from '../../classes/human2/human2';

/**
 * class instance
 */

const human2 = new Human2();

/**
 * warrior
 */

export const human2Screen = () => {
   /**
    * remove old components
    */
   createCanvas();

   /** set state */
   STATE.setTitle('human2Screen');

   /** draw warrior content */
   human2.getContent;
   human2.getDrawStaticSprite;
};
