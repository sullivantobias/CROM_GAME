import { createCanvas, canvas, ctx } from "../createFunctions/createCanvas";
import { STATE } from "../const/const";
import { createButtons } from "../createFunctions/createButtonsForMenu";

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

const sound = createButtons(
  canvas.width / 2 - 100,
  canvas.height / 2 - 25,
  200,
  50,
  "Sound",
  "white"
);

export const optionScreen = () => {
  createCanvas();
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
  ctx.fillStyle = sound.backgroundColor;
  ctx.fillRect(sound.x, sound.y, sound.width, sound.height);

  ctx.strokeStyle = "grey";
  ctx.lineWidth = "7";
  ctx.strokeRect(sound.x, sound.y, sound.width, sound.height);

  ctx.fillStyle = "black";
  ctx.font = "23px Arial Black";
  ctx.fillText(sound.text, sound.x + 10, sound.y + sound.height / 2 + 5);
};
