import { createCanvas } from "./createCanvas";

import { STATE } from "../const/const";
import { choseMenu } from "../designFunctions/activateClickForMenu";
import { activateHovering } from "../designFunctions/activateHovering";
import { playScreen } from "../screens/playScreen";
import { optionScreen } from "../screens/optionsScreen";
import { createMenu, playButton, optionButton } from "../screens/mainMenu";

if (STATE.getTitle() === "Menu") {
  /**
   * Create the canvas
   */
  createCanvas();

  /**
   * Create the main Menu
   */
  if (STATE.getTitle() === "Menu") createMenu();

  /**
   * Call activateHovering() to change the color while hovering buttons
   */
  activateHovering(playButton, optionButton, () => {
    /**
     * If Statement to avoid calling reloadScreen in the prev or next Frame
     */
    if (STATE.getTitle() === "Menu") createMenu();
  });

  /**
   * Call choseMenu(),to trigger the click on the chosen button
   */
  choseMenu(
    playButton,
    optionButton,
    () => {
      /**
       * If Statement to avoid calling reloadScreen in the prev or next Frame
       */
      if (STATE.getTitle() === "Menu") playScreen();
    },
    () => {
      if (STATE.getTitle() === "Menu") optionScreen();
    }
  );
}
