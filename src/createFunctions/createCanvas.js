import version from "../../package.json";

/**
 * Get Canvas
 */

export const canvas = document.querySelector("#gameWindow");
export const ctx = canvas.getContext("2d")

export const createCanvas = () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  /**
   * Retrieve Game Version
   */
  const gameVersion = "V " + version.version;

  // Draw Version in canvas //
  ctx.fillStyle = "red";
  ctx.font = "15px Arial black";
  ctx.fillText(gameVersion, 50, 50);
};

createCanvas();
