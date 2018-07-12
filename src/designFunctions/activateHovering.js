import { canvas } from "../createFunctions/createCanvas";
import { coorButtons } from "../createFunctions/createButtonsForMenu";

export const activateHovering = (reloadActualMenu, ...button) => {
  /**
   * Hover event
   */
  if (button.length) {
    canvas.addEventListener("mousemove", e => {
      e.preventDefault();

      for (let i = 0; i < button.length; i++) {
        if (coorButtons(e, button[i])) {
          button[i].backgroundColor = "red";
          //console.log("Play");
        } else {
          button[i].backgroundColor = "white";
        }
      }

      reloadActualMenu
        ? reloadActualMenu()
        : console.log("Missing Function Parameter");
    });
  }
};
