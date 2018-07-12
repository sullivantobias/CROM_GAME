import { createCanvas } from "./createCanvas";

import { STATE } from "../const/const";
import { choseMenu } from "../designFunctions/activateClickForMenu";
import { activateHovering } from "../designFunctions/activateHovering";
import { playScreen } from "../screens/playScreen";
import { optionScreen } from "../screens/optionsScreen";
import { createMenu, playButton, optionButton } from "../screens/mainMenu";
import { navigationMenu } from "../screens/navigationMenu/navigationMenu";

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
   * Activate Hovering
   */

  activateHovering(
    () => {
      navigationMenu("Menu", createMenu, "Menu");
    },
    playButton,
    optionButton
  );

  /**
   * Activate Click
   */

  choseMenu(
    () => {
      navigationMenu("Menu", playScreen, "Ingame");
    },
    playButton
  );

  choseMenu(
    () => {
      navigationMenu("Menu", optionScreen, "Options");
    },
    optionButton
  );
}
