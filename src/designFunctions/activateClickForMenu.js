import { canvas } from "../createFunctions/createCanvas";
import { STATE } from "../const/const";
import { coorButtons } from "../createFunctions/createButtonsForMenu";

export const choseMenu = (button, button2, hrefButton, hrefButton2) => {
  /**
   * Click Event
   * Choose menu to click
   */

  canvas.addEventListener("click", e => {
    e.preventDefault();
    if (coorButtons(e, button)) {
      hrefButton();
    }

    if (coorButtons(e, button2)) {
      hrefButton2();
    }
  });
};
