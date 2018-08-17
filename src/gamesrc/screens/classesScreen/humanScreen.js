import {createCanvas} from '../../createFunctions/createCanvas';
import {STATE} from '../../const/const';
import {Human} from '../../classes/human/human';

/**
 * class instance
 */

const human = new Human();

/**
 * warrior
 */

export const humanScreen = () => {
   /**
    * remove old components
    */
   createCanvas();

   /** set state */
   STATE.setTitle('humanScreen');

   /** draw warrior content */
   human.getContent;
   human.getDrawStaticSprite;
};
