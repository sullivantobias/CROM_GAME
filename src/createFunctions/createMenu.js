import version from "../../package.json";
import { createCanvas, ctx, canvas } from "./createCanvas";
import PlayScreen from "../screens/playScreen";
import OptionsScreen from "../screens/optionsScreen";
import { STATE } from "../const/const";

/**
 * Play Button
 */
const playButton = {
  x: canvas.width / 2 - 100,
  y: canvas.height / 2 - 100,
  width: 200,
  height: 50,
  text: "Play the game",
  backgroundColor: "white"
};

/**
 * Options Button
 */
const optionButton = {
  xO: canvas.width / 2 - 100,
  yO: canvas.height / 2 - 25,
  widthO: 200,
  heightO: 50,
  textO: "Options",
  backgroundColorO: "white"
};

let { x, y, width, height, text, backgroundColor } = playButton;

let { xO, yO, widthO, heightO, textO, backgroundColorO } = optionButton;

const createMenu = () => {
  if (STATE.getTitle() === "Menu") {
    /**
     * Retrieve Game Version
     */

      const gameVersion = "V " + version.version;

      // Draw Version in canvas //
      ctx.fillStyle = "red";
      ctx.font = "15px Arial black";
      ctx.fillText(gameVersion, 50, 50);

    /**
     * Menu
     */

    /**Play */
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(x, y, width, height);

    ctx.strokeStyle = "grey";
    ctx.lineWidth = "7";
    ctx.strokeRect(x, y, width, height);

    ctx.fillStyle = "black";
    ctx.font = "23px Arial Black";
    ctx.fillText(text, x + 10, y + height / 2 + 5);

    /**Options */
    ctx.fillStyle = backgroundColorO;
    ctx.fillRect(xO, yO, widthO, heightO);

    ctx.strokeStyle = "grey";
    ctx.lineWidth = "7";
    ctx.strokeRect(xO, yO, widthO, heightO);

    ctx.fillStyle = "black";
    ctx.font = "23px Arial Black";
    ctx.fillText(textO, xO + 50, yO + heightO / 2 + 5);
  }
};
createCanvas();
createMenu();

const changeColor = () => {
  if (STATE.getTitle() === "Menu") {
    /**
     * Click event
     */

    canvas.addEventListener("mousemove", e => {
      e.preventDefault();
      if (
        e.clientX > x &&
        e.clientX < x + width + 14 &&
        (e.clientY > y && e.clientY < y + (height + 14))
      ) {
        backgroundColor = "red";
        //console.log("Play");
      } else {
        backgroundColor = "white";
      }

      if (
        e.clientX > xO &&
        e.clientX < xO + widthO + 14 &&
        (e.clientY > yO && e.clientY < yO + (heightO + 14))
      ) {
        backgroundColorO = "red";
      } else {
        backgroundColorO = "white";
      }
      createMenu();
    });
  }
};

changeColor();

const clickOnButtons = () => {
  canvas.addEventListener("click", e => {
    e.preventDefault();
    if (STATE.getTitle() === "Menu") {
      if (
        e.clientX > x &&
        e.clientX < x + width + 14 &&
        (e.clientY > y && e.clientY < y + (height + 14))
      ) {
        PlayScreen();
      }

      if (
        e.clientX > xO &&
        e.clientX < xO + widthO + 14 &&
        (e.clientY > yO && e.clientY < yO + (heightO + 14))
      ) {
        OptionsScreen();
      }
    }
  });
};

clickOnButtons();
