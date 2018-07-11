import { canvas, ctx } from "../createFunctions/createCanvas";
import { STATE } from "../const/const";
import { createButtons } from "../createFunctions/createButtonsForMenu";

import version from '../../package.json'


/**
 * Play Button
 */
export const playButton = createButtons(
  canvas.width / 2 - 100,
  canvas.height / 2 - 100,
  200,
  50,
  "Play the game",
  "white"
);

/**
 * Options Button
 */
export const optionButton = createButtons(
  canvas.width / 2 - 100,
  canvas.height / 2 - 25,
  200,
  50,
  "Options",
  "white"
);

export const createMenu = () => {
  if (STATE.getTitle() === "Menu" || STATE.getTitle() === "Ingame") {
    /**
     * Retrieve Game Version
     */

    const gameVersion = "V " + version.version;

    // Draw Version in canvas //
    ctx.fillStyle = "red";
    ctx.font = "15px Arial black";
    ctx.fillText(gameVersion, 50, 50);

    /**Play */
    ctx.fillStyle = playButton.backgroundColor;
    ctx.fillRect(
      playButton.x,
      playButton.y,
      playButton.width,
      playButton.height
    );

    ctx.strokeStyle = "grey";
    ctx.lineWidth = "7";
    ctx.strokeRect(
      playButton.x,
      playButton.y,
      playButton.width,
      playButton.height
    );

    ctx.fillStyle = "black";
    ctx.font = "23px Arial Black";
    ctx.fillText(
      playButton.text,
      playButton.x + 10,
      playButton.y + playButton.height / 2 + 5
    );

    /**Options */
    ctx.fillStyle = optionButton.backgroundColor;
    ctx.fillRect(
      optionButton.x,
      optionButton.y,
      optionButton.width,
      optionButton.height
    );

    ctx.strokeStyle = "grey";
    ctx.lineWidth = "7";
    ctx.strokeRect(
      optionButton.x,
      optionButton.y,
      optionButton.width,
      optionButton.height
    );

    ctx.fillStyle = "black";
    ctx.font = "23px Arial Black";
    ctx.fillText(
      optionButton.text,
      optionButton.x + 50,
      optionButton.y + optionButton.height / 2 + 5
    );
  }
};
