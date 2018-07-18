import {canvas, createCanvas} from '../createFunctions/createCanvas';
import {STATE} from '../const/const';
import {
   createButtons,
   drawButtons,
} from '../createFunctions/createButtonsForMenu';
import {activateHovering} from '../designFunctions/activateHovering';
import {navigationMenu} from './navigationMenu/navigationMenu';
import {choseMenu} from '../designFunctions/activateClickForMenu';
import {playScreen} from './playScreen';

/**
 * Warrior
 */

const warrior = createButtons(
   canvas.width / 2 - 100,
   canvas.height / 2 - 100,
   200,
   50,
   'Warrior',
   'white'
);

/**
 * Mage
 */

const mage = createButtons(
   canvas.width / 2 - 100,
   canvas.height / 2 - 25,
   200,
   50,
   'Mage',
   'white'
);

/**
 * Mage
 */

const cancel = createButtons(
   canvas.width / 2 - 100,
   canvas.height / 2 + 50,
   200,
   50,
   'Cancel',
   'white'
);

export const choseCaracterScreen = () => {
   /**
    * remove old components
    */
   createCanvas();

   /** Set State */
   STATE.setTitle('choseCaracter');

   drawButtons(warrior, mage, cancel);
};

/**
 * Activate Hovering
 */

activateHovering(
   () => {
      navigationMenu('choseCaracter', choseCaracterScreen, 'choseCaracter');
   },
   warrior,
   mage,
   cancel
);

/**
 * Activate Click
 */

choseMenu(() => {
   navigationMenu('choseCaracter', choseCaracterScreen, 'choseCaracter');
}, warrior);

choseMenu(() => {
   navigationMenu('choseCaracter', choseCaracterScreen, 'choseCaracter');
}, mage);

choseMenu(() => {
   navigationMenu('choseCaracter', playScreen, 'Ingame');
}, cancel);
