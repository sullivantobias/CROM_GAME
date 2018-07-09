import {createCanvas} from "../createFunctions/createCanvas";
import {STATE} from "../const/const";

const optionsScreen = () => {
  // Reload Canvas //
  createCanvas();
  // Set the Ingame State //
  STATE.setTitle("Options");
};

export default optionsScreen;
