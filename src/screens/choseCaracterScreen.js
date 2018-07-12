import { canvas, ctx, createCanvas } from "../createFunctions/createCanvas";
import { STATE } from "../const/const";
import { createButtons } from "../createFunctions/createButtonsForMenu";
import { activateHovering } from "../designFunctions/activateHovering";
import { navigationMenu } from "./navigationMenu/navigationMenu";
import { choseMenu } from "../designFunctions/activateClickForMenu";
import { playScreen } from "./playScreen";

/**
 * Warrior
 */

const warrior = createButtons(
  canvas.width / 2 - 100,
  canvas.height / 2 - 100,
  200,
  50,
  "Warrior",
  "white"
);

/**
 * Mage
 */

const mage = createButtons(
  canvas.width / 2 - 100,
  canvas.height / 2 - 25,
  200,
  50,
  "Mage",
  "white"
);

/**
 * Mage
 */

const cancel = createButtons(
  canvas.width / 2 - 100,
  canvas.height / 2 + 50,
  200,
  50,
  "Cancel",
  "white"
);

export const choseCaracterScreen = () => {
  /**
   * remove old components
   */
  createCanvas();

  /** Set State */
  STATE.setTitle("choseCaracter");

  /** Warrior */
  ctx.fillStyle = warrior.backgroundColor;
  ctx.fillRect(warrior.x, warrior.y, warrior.width, warrior.height);

  ctx.strokeStyle = "grey";
  ctx.lineWidth = "7";
  ctx.strokeRect(warrior.x, warrior.y, warrior.width, warrior.height);

  ctx.fillStyle = "black";
  ctx.font = "23px Arial Black";
  ctx.fillText(
    warrior.text,
    warrior.x + 10,
    warrior.y + warrior.height / 2 + 5
  );

  /** Mage */
  ctx.fillStyle = mage.backgroundColor;
  ctx.fillRect(mage.x, mage.y, mage.width, mage.height);

  ctx.strokeStyle = "grey";
  ctx.lineWidth = "7";
  ctx.strokeRect(mage.x, mage.y, mage.width, mage.height);

  ctx.fillStyle = "black";
  ctx.font = "23px Arial Black";
  ctx.fillText(mage.text, mage.x + 10, mage.y + mage.height / 2 + 5);

  /** Cancel */
  ctx.fillStyle = cancel.backgroundColor;
  ctx.fillRect(cancel.x, cancel.y, cancel.width, cancel.height);

  ctx.strokeStyle = "grey";
  ctx.lineWidth = "7";
  ctx.strokeRect(cancel.x, cancel.y, cancel.width, cancel.height);

  ctx.fillStyle = "black";
  ctx.font = "23px Arial Black";
  ctx.fillText(cancel.text, cancel.x + 10, cancel.y + cancel.height / 2 + 5);
};

/**
 * Activate Hovering
 */

activateHovering(
  () => {
    navigationMenu("choseCaracter", choseCaracterScreen, "choseCaracter");
  },
  warrior,
  mage,
  cancel
);

/**
 * Activate Click
 */

choseMenu(() => {
  navigationMenu("choseCaracter", choseCaracterScreen, "choseCaracter");
}, warrior);

choseMenu(() => {
  navigationMenu("choseCaracter", choseCaracterScreen, "choseCaracter");
}, mage);

choseMenu(() => {
  navigationMenu("choseCaracter", playScreen, "Ingame");
}, cancel);
