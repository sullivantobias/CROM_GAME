import { ctx } from "./createCanvas";

/**
 *
 * @param {*} x
 * @param {*} y
 * @param {*} width
 * @param {*} height
 * @param {*} text
 * @param {*} backgroundColor
 */

/**
 * Create Buttons and return position
 */

export const createButtons = (x, y, width, height, text, backgroundColor) => {
  return {
    x: x,
    y: y,
    width: width,
    height: height,
    text: text,
    backgroundColor: backgroundColor
  };
};

export const coorButtons = (e, object) => {
  return (
    e.clientX > object.x &&
    e.clientX < object.x + object.width + 14 &&
    (e.clientY > object.y && e.clientY < object.y + (object.height + 14))
  );
};

export const drawButtons = (...button) => {
  for (let i = 0; i < button.length; i++) {
    /** button to create */
    ctx.fillStyle = button[i].backgroundColor;
    ctx.fillRect(button[i].x, button[i].y, button[i].width, button[i].height);

    ctx.strokeStyle = "grey";
    ctx.lineWidth = "7";
    ctx.strokeRect(button[i].x, button[i].y, button[i].width, button[i].height);

    ctx.fillStyle = "black";
    ctx.font = "23px Arial Black";
    ctx.fillText(
      button[i].text,
      button[i].x + 10,
      button[i].y + button[i].height / 2 + 5
    );
  }
};
