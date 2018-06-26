/**
 * Testing Phase for warrior class.
 */

import { makeWarrior } from "./createCaracter.js";

/**
 * Testing Button Create for later.
 */

const createWarrior = document.querySelector("#warrior");
createWarrior.addEventListener("click", function() {
  // Creating The Warrior //
  makeWarrior();
});

/**
 * Get Canvas
 */

const canvas = document.querySelector("#gameWindow");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
