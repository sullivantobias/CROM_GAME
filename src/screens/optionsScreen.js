import { canvas, ctx, createCanvas } from "../createFunctions/createCanvas";
import { STATE } from "../const/const";
import { createButtons } from "../createFunctions/createButtonsForMenu";
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

  /** Create Caracter */
  ctx.fillStyle = resolution.backgroundColor;
  ctx.fillRect(resolution.x, resolution.y, resolution.width, resolution.height);

  ctx.strokeStyle = "grey";
  ctx.lineWidth = "7";
  ctx.strokeRect(
    resolution.x,
    resolution.y,
    resolution.width,
    resolution.height
  );

  ctx.fillStyle = "black";
  ctx.font = "23px Arial Black";
  ctx.fillText(
    resolution.text,
    resolution.x + 10,
    resolution.y + resolution.height / 2 + 5
  );

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
      navigationMenu("Options", optionScreen, "Options");
    },
    resolution,
    cancel
  );

  /**
   * Activate Click
   */

  choseMenu(
    () => {
      navigationMenu("Options", createMenu, "Menu");
    },
    cancel
  );

  choseMenu(
    () => {
      navigationMenu("Options", optionScreen, "Options");
    },
    resolution
  );