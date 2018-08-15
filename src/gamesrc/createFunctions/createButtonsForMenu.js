import {ctx, canvas} from './createCanvas';

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
      backgroundColor: backgroundColor,
   };
};

export const coorButtons = (e, object) => {
   const mouse = {
      x: 0,
      y: 0,
   };

   const bounds = canvas.getBoundingClientRect();
   // get the mouse coordinates, subtract the canvas top left and any scrolling
   mouse.x = e.pageX - bounds.left - scrollX;
   mouse.y = e.pageY - bounds.top - scrollY;

   return (
      mouse.x > object.x &&
      mouse.x < object.x + object.width &&
      mouse.y > object.y &&
      mouse.y < object.y + object.height
   );
};

export const drawButtons = (...button) => {
   for (let i = 0; i < button.length; i++) {
      /** button to create */
      ctx.fillStyle = button[i].backgroundColor;
      ctx.fillRect(button[i].x, button[i].y, button[i].width, button[i].height);

      ctx.strokeStyle = 'grey';
      ctx.lineWidth = '7';
      ctx.strokeRect(
         button[i].x,
         button[i].y,
         button[i].width,
         button[i].height
      );

      ctx.fillStyle = 'black';
      ctx.font = '23px Arial Black';
      ctx.fillText(
         button[i].text,
         button[i].x + 10,
         button[i].y + button[i].height / 2 + 5
      );
   }
};
