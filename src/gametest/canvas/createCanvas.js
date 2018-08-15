/**
 * Get Canvas
 */

export const canvas = document.querySelector('#testWindow');
export const ctx = canvas.getContext('2d');

export const createCanvas = () => {
   ctx.fillRect(0, 0, canvas.width, canvas.height);
};
