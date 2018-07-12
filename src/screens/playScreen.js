import { canvas, ctx, createCanvas } from "../createFunctions/createCanvas";
import { STATE } from "../const/const";
import {
  createButtons,
  drawButtons
} from "../createFunctions/createButtonsForMenu";
import { activateHovering } from "../designFunctions/activateHovering";
import { choseMenu } from "../designFunctions/activateClickForMenu";
import { createMenu } from "./mainMenu";
import { navigationMenu } from "./navigationMenu/navigationMenu";
import { choseCaracterScreen } from "./choseCaracterScreen";

/**
 * createCaracter Button
 */

const createCaracter = createButtons(
  canvas.width / 2 - 100,
  canvas.height / 2 - 100,
  200,
  50,
  "Caracter",
  "white"
);

const cancel = createButtons(
  canvas.width / 2 - 100,
  canvas.height / 2 - 25,
  200,
  50,
  "Cancel",
  "white"
);

export const playScreen = () => {
  /**
   * remove old components
   */
  createCanvas();

  /** Set State */
  STATE.setTitle("Ingame");

  /** Draw Button */
  drawButtons(createCaracter, cancel);
};

/**
 * Activate Hovering
 */

activateHovering(
  () => {
    navigationMenu("Ingame", playScreen, "Ingame");
  },
  createCaracter,
  cancel
);

/**
 * Activate Click
 */

choseMenu(() => {
  navigationMenu("Ingame", choseCaracterScreen, "choseCaracter");
}, createCaracter);

choseMenu(() => {
  navigationMenu("Ingame", createMenu, "Menu");
}, cancel);
