/**
 * Testing Phase for warrior class.
 */

import { makeWarrior } from "./createCaracter.js";
import CreateCanvas from './createFunctions/createCanvas.js';
import './createFunctions/createMenu.js';

/**
 * Testing Button Create for later.
 */

const createWarrior = document.querySelector("#warrior");
createWarrior.addEventListener("click", function() {
  // Creating The Warrior //
  makeWarrior();
});
