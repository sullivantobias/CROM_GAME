import { createCanvas, canvas, ctx } from "../createFunctions/createCanvas";
import { STATE } from "../const/const";

/**
 * Options Button
 */
const playScreenButton = {
  x: canvas.width / 2 - 100,
  y: canvas.height / 2 - 25,
  width: 220,
  height: 50,
  text: "Create Caracter",
  backgroundColor: "white"
};

let { x, y, width, height, text, backgroundColor } = playScreenButton;

const playScreen = () => {
  createCanvas();
  STATE.setTitle("Ingame");

  /**Play */
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(x, y, width, height);

  ctx.strokeStyle = "grey";
  ctx.lineWidth = "7";
  ctx.strokeRect(x, y, width, height);

  ctx.fillStyle = "black";
  ctx.font = "23px Arial Black";
  ctx.fillText(text, x + 10, y + height / 2 + 5);
};

export default playScreen;
