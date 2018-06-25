/**
 * Testing Phase for warrior class.
 */

import { makeWarrior } from "./createCaracter.js";

/**
 * Testing Button Create for later.
 */

const createWarrior = document.querySelector('#warrior');
createWarrior.addEventListener("click", function() {
    // Creating The Warrior //
    makeWarrior();
});
