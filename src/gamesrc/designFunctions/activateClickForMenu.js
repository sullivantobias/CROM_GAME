import {canvas} from '../createFunctions/createCanvas';
import {coorButtons} from '../createFunctions/createButtonsForMenu';

export const choseMenu = (href, button) => {
   /**
    * Click Event
    * Choose menu to click
    */
   canvas.addEventListener('click', (e) => {
      e.preventDefault();
      if (button) {
         if (coorButtons(e, button)) {
            href();
         }
      }
   });
};
