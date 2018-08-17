import {canvas, createCanvas} from '../createFunctions/createCanvas';
import {STATE} from '../const/const';
import {
   createButtons,
   drawButtons,
   createPortraits,
   drawPortraits,
} from '../createFunctions/createButtonsForMenu';
import {activateHovering} from '../designFunctions/activateHovering';
import {navigationMenu} from './navigationMenu/navigationMenu';
import {choseMenu} from '../designFunctions/activateClickForMenu';
import {playScreen} from './playScreen';
import {humanScreen} from './classesScreen/humanScreen';
import {human2Screen} from './classesScreen/human2Screen';
import {Human} from '../classes/human/human';
import {Human2} from '../classes/human2/human2';

const human = new Human();

/**
 * human
 */

const humanButton = createPortraits(
   canvas.width / 2 - 300,
   canvas.height / 2 - 200,
   200,
   200
);

const human2 = new Human2();

/**
 * human2
 */

const human2Button = createPortraits(
   canvas.width / 2 + 100,
   canvas.height / 2 - 200,
   200,
   200
);

const cancel = createButtons(
   canvas.width / 2 - 100,
   canvas.height / 2 + 50,
   200,
   50,
   'Cancel'
);

export const choseCaracterScreen = () => {
   /**
    * remove old components
    */
   createCanvas();

   /** Set State */
   STATE.setTitle('choseCaracter');
   /** human */
   drawPortraits(human.portraitSprite, 150, 130, humanButton);
   /** human2 */
   drawPortraits(human2.portraitSprite, 550, 130, human2Button);

   drawButtons(cancel);
};

/**
 * Activate Hovering
 */

activateHovering(() => {
   navigationMenu('choseCaracter', choseCaracterScreen, 'choseCaracter');
}, cancel);

/**
 * Activate Click
 */

choseMenu(() => {
   navigationMenu('choseCaracter', humanScreen, 'humanScreen');
}, humanButton);

choseMenu(() => {
   navigationMenu('choseCaracter', human2Screen, 'human2Screen');
}, human2Button);

choseMenu(() => {
   navigationMenu('choseCaracter', playScreen, 'Ingame');
}, cancel);
