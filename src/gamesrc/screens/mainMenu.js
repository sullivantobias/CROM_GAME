import {canvas, ctx} from '../createFunctions/createCanvas';
import {
   createButtons,
   drawButtons,
} from '../createFunctions/createButtonsForMenu';

import version from '../../../package.json';

/**
 * Play Button
 */
export const playButton = createButtons(
   canvas.width / 2 - 100,
   canvas.height / 2 - 100,
   200,
   50,
   'Play the game',
   'white'
);

/**
 * Options Button
 */
export const optionButton = createButtons(
   canvas.width / 2 - 100,
   canvas.height / 2 - 25,
   200,
   50,
   'Options',
   'white'
);

export const createMenu = () => {
   /**
    * Retrieve Game Version
    */
   const gameVersion = 'V ' + version.version;

   // Draw Version in canvas //
   ctx.fillStyle = 'red';
   ctx.font = '15px Arial black';
   ctx.fillText(gameVersion, 50, 50);

   /** Draw button */
   drawButtons(playButton, optionButton);
};
