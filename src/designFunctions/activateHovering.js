import { canvas } from "../createFunctions/createCanvas";
import { coorButtons } from "../createFunctions/createButtonsForMenu";



export const activateHovering = (button, button2, reloadActualMenu) => {
    /**
     * Hover event
     */

    canvas.addEventListener("mousemove", e => {
      e.preventDefault();
      if (coorButtons(e, button)) {
        button.backgroundColor = "red";
        //console.log("Play");
      } else {
        button.backgroundColor = "white";
      }

      if (coorButtons(e, button2)) {
        button2.backgroundColor = "red";
      } else {
        button2.backgroundColor = "white";
      }
      reloadActualMenu ? reloadActualMenu() : console.log("Missing Function Parameter");
    });
};
