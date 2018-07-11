import { createCanvas, canvas, ctx } from "../createFunctions/createCanvas";
import { STATE } from "../const/const";
import { createButtons } from "../createFunctions/createButtonsForMenu";
import { activateHovering } from "../designFunctions/activateHovering";
import { choseMenu } from "../designFunctions/activateClickForMenu";
import { createMenu } from "./mainMenu";

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
  createCanvas();
  STATE.setTitle("Ingame");

  if (STATE.getTitle() === "Ingame") {
    /** Create Caracter */
    ctx.fillStyle = createCaracter.backgroundColor;
    ctx.fillRect(
      createCaracter.x,
      createCaracter.y,
      createCaracter.width,
      createCaracter.height
    );

    ctx.strokeStyle = "grey";
    ctx.lineWidth = "7";
    ctx.strokeRect(
      createCaracter.x,
      createCaracter.y,
      createCaracter.width,
      createCaracter.height
    );

    ctx.fillStyle = "black";
    ctx.font = "23px Arial Black";
    ctx.fillText(
      createCaracter.text,
      createCaracter.x + 10,
      createCaracter.y + createCaracter.height / 2 + 5
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
  }
};

/**
 * Call activateHovering() to change the color while hovering buttons
 */

activateHovering(createCaracter, cancel, () => {
  /**
   * If Statement to avoid calling reloadScreen in the prev Frame
   */
  if (STATE.getTitle() === "Ingame") playScreen();
});

/**
 * Call choseMenu(),to trigger the click on the chosen button
 */

choseMenu(createCaracter, cancel, () => {
  /**
   * If Statement to avoid calling reloadScreen in the prev Frame
   */
  if (STATE.getTitle() === "Ingame") console.log("Go Ingame");
  ;
}, () => {
  /**
   * If Statement to avoid calling reloadScreen in the prev Frame
   */
  if (STATE.getTitle() === "Ingame"){
    createMenu()
  };
  ;
});
