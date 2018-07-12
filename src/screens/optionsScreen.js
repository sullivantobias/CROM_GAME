import { canvas, ctx, createCanvas } from "../createFunctions/createCanvas";
import { STATE } from "../const/const";
import {
  createButtons,
  drawButtons
} from "../createFunctions/createButtonsForMenu";
import { activateHovering } from "../designFunctions/activateHovering";
import { navigationMenu } from "./navigationMenu/navigationMenu";
import { choseMenu } from "../designFunctions/activateClickForMenu";
import { createMenu } from "./mainMenu";

/**
 * Resolution Button
 */

const resolution = createButtons(
  canvas.width / 2 - 100,
  canvas.height / 2 - 100,
  200,
  50,
  "Resolution",
  "white"
);

/**
 * Sound Button
 */

const cancel = createButtons(
  canvas.width / 2 - 100,
  canvas.height / 2 - 25,
  200,
  50,
  "Cancel",
  "white"
);

export const optionScreen = () => {
  /**
   * remove old components
   */
  createCanvas();

  /** Set State */
  STATE.setTitle("Options");

  /** Draw Buttons */
  drawButtons(resolution, cancel);
};

/**
 * Activate Hovering
 */

activateHovering(
  () => {
    navigationMenu("Options", optionScreen, "Options");
  },
  resolution,
  cancel
);

/**
 * Activate Click
 */

choseMenu(() => {
  navigationMenu("Options", createMenu, "Menu");
}, cancel);

choseMenu(() => {
  navigationMenu("Options", optionScreen, "Options");
}, resolution);
