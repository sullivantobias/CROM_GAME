/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, private, scripts, keywords, author, license, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"crom-game","version":"0.1.0","description":"","private":true,"scripts":{"dev":"webpack  --watch --config webpack.dev.js"},"keywords":["rpg","js","project"],"author":"Sullivan Tobias","license":"ISC","devDependencies":{"clean-webpack-plugin":"^0.1.19","css-loader":"^0.28.11","style-loader":"^0.21.0","webpack":"^4.12.0","webpack-cli":"^3.0.3","webpack-dev-server":"^3.1.4","webpack-merge":"^4.1.2"},"dependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.4","babel-preset-env":"^1.7.0"}};

/***/ }),

/***/ "./src/const/const.js":
/*!****************************!*\
  !*** ./src/const/const.js ***!
  \****************************/
/*! exports provided: STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE", function() { return STATE; });
/**
 * Declaring useful variables
 */

let STATE = {
  id: 1,

  Title: "Menu",

  setTitle(newTitle) {
    this.Title = newTitle;
  },

  getTitle() {
    return this.Title;
  }
};


/***/ }),

/***/ "./src/createFunctions/createButtonsForMenu.js":
/*!*****************************************************!*\
  !*** ./src/createFunctions/createButtonsForMenu.js ***!
  \*****************************************************/
/*! exports provided: createButtons, coorButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtons", function() { return createButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coorButtons", function() { return coorButtons; });
/**
 *
 * @param {*} x
 * @param {*} y
 * @param {*} width
 * @param {*} height
 * @param {*} text
 * @param {*} backgroundColor
 */

/**
 * Create Buttons and return position
 */

const createButtons = (x, y, width, height, text, backgroundColor) => {
  return {
    x: x,
    y: y,
    width: width,
    height: height,
    text: text,
    backgroundColor: backgroundColor
  };
};

const coorButtons = (e, object) => {
  return (
    e.clientX > object.x &&
    e.clientX < object.x + object.width + 14 &&
    (e.clientY > object.y && e.clientY < object.y + (object.height + 14))
  );
};


/***/ }),

/***/ "./src/createFunctions/createCanvas.js":
/*!*********************************************!*\
  !*** ./src/createFunctions/createCanvas.js ***!
  \*********************************************/
/*! exports provided: canvas, ctx, createCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctx", function() { return ctx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvas", function() { return createCanvas; });
/**
 * Get Canvas
 */

const canvas = document.querySelector("#gameWindow");
const ctx = canvas.getContext("2d");

const createCanvas = () => {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};


/***/ }),

/***/ "./src/createFunctions/createMenu.js":
/*!*******************************************!*\
  !*** ./src/createFunctions/createMenu.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCanvas */ "./src/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/const */ "./src/const/const.js");
/* harmony import */ var _designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../designFunctions/activateClickForMenu */ "./src/designFunctions/activateClickForMenu.js");
/* harmony import */ var _designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../designFunctions/activateHovering */ "./src/designFunctions/activateHovering.js");
/* harmony import */ var _screens_playScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../screens/playScreen */ "./src/screens/playScreen.js");
/* harmony import */ var _screens_optionsScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../screens/optionsScreen */ "./src/screens/optionsScreen.js");
/* harmony import */ var _screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../screens/mainMenu */ "./src/screens/mainMenu.js");









if (_const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].getTitle() === "Menu") {
  /**
   * Create the canvas
   */
  Object(_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();

  /**
   * Create the main Menu
   */
  if (_const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].getTitle() === "Menu") Object(_screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["createMenu"])();

  /**
   * Call activateHovering() to change the color while hovering buttons
   */
  Object(_designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__["activateHovering"])(_screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["playButton"], _screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["optionButton"], () => {
    /**
     * If Statement to avoid calling reloadScreen in the prev or next Frame
     */
    if (_const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].getTitle() === "Menu") Object(_screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["createMenu"])();
  });

  /**
   * Call choseMenu(),to trigger the click on the chosen button
   */
  Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_2__["choseMenu"])(
    _screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["playButton"],
    _screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["optionButton"],
    () => {
      /**
       * If Statement to avoid calling reloadScreen in the prev or next Frame
       */
      if (_const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].getTitle() === "Menu") Object(_screens_playScreen__WEBPACK_IMPORTED_MODULE_4__["playScreen"])();
    },
    () => {
      if (_const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].getTitle() === "Menu") Object(_screens_optionsScreen__WEBPACK_IMPORTED_MODULE_5__["optionScreen"])();
    }
  );
}


/***/ }),

/***/ "./src/designFunctions/activateClickForMenu.js":
/*!*****************************************************!*\
  !*** ./src/designFunctions/activateClickForMenu.js ***!
  \*****************************************************/
/*! exports provided: choseMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choseMenu", function() { return choseMenu; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createFunctions/createCanvas */ "./src/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/const */ "./src/const/const.js");
/* harmony import */ var _createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createFunctions/createButtonsForMenu */ "./src/createFunctions/createButtonsForMenu.js");




const choseMenu = (button, button2, hrefButton, hrefButton2) => {
  /**
   * Click Event
   * Choose menu to click
   */

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].addEventListener("click", e => {
    e.preventDefault();
    if (_const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].getTitle() === "Menu" || _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].getTitle() === "Ingame" ) {
      if (Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["coorButtons"])(e, button)) {
       hrefButton();
      }

      if (Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["coorButtons"])(e, button2)) {
        hrefButton2();
      }
    }
  });
};


/***/ }),

/***/ "./src/designFunctions/activateHovering.js":
/*!*************************************************!*\
  !*** ./src/designFunctions/activateHovering.js ***!
  \*************************************************/
/*! exports provided: activateHovering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateHovering", function() { return activateHovering; });
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/const */ "./src/const/const.js");
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createFunctions/createCanvas */ "./src/createFunctions/createCanvas.js");
/* harmony import */ var _createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createFunctions/createButtonsForMenu */ "./src/createFunctions/createButtonsForMenu.js");






const activateHovering = (button, button2, reloadActualMenu) => {
  if (_const_const__WEBPACK_IMPORTED_MODULE_0__["STATE"].getTitle() === "Ingame") {
    /**
     * Hover event
     */

    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_1__["canvas"].addEventListener("mousemove", e => {
      e.preventDefault();
      if (Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["coorButtons"])(e, button)) {
        button.backgroundColor = "red";
        //console.log("Play");
      } else {
        button.backgroundColor = "white";
      }

      if (Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["coorButtons"])(e, button2)) {
        button2.backgroundColor = "red";
      } else {
        button2.backgroundColor = "white";
      }
      reloadActualMenu ? reloadActualMenu() : console.log("Missing Function Parameter");
    });
  }
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createFunctions_createMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createFunctions/createMenu */ "./src/createFunctions/createMenu.js");


// import { makeWarrior } from "./createCaracter";



/*

const createWarrior = document.querySelector("#warrior");
createWarrior.addEventListener("click", function() {
  // Creating The Warrior //
  makeWarrior();
});
 
*/

/***/ }),

/***/ "./src/screens/mainMenu.js":
/*!*********************************!*\
  !*** ./src/screens/mainMenu.js ***!
  \*********************************/
/*! exports provided: playButton, optionButton, createMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playButton", function() { return playButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionButton", function() { return optionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMenu", function() { return createMenu; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createFunctions/createCanvas */ "./src/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/const */ "./src/const/const.js");
/* harmony import */ var _createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createFunctions/createButtonsForMenu */ "./src/createFunctions/createButtonsForMenu.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);







/**
 * Play Button
 */
const playButton = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createButtons"])(
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 100,
  200,
  50,
  "Play the game",
  "white"
);

/**
 * Options Button
 */
const optionButton = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createButtons"])(
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 25,
  200,
  50,
  "Options",
  "white"
);

const createMenu = () => {
  if (_const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].getTitle() === "Menu" || _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].getTitle() === "Ingame") {
    /**
     * Retrieve Game Version
     */

    const gameVersion = "V " + _package_json__WEBPACK_IMPORTED_MODULE_3__.version;

    // Draw Version in canvas //
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "red";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "15px Arial black";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(gameVersion, 50, 50);

    /**Play */
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = playButton.backgroundColor;
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(
      playButton.x,
      playButton.y,
      playButton.width,
      playButton.height
    );

    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "grey";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = "7";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(
      playButton.x,
      playButton.y,
      playButton.width,
      playButton.height
    );

    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "23px Arial Black";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(
      playButton.text,
      playButton.x + 10,
      playButton.y + playButton.height / 2 + 5
    );

    /**Options */
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = optionButton.backgroundColor;
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(
      optionButton.x,
      optionButton.y,
      optionButton.width,
      optionButton.height
    );

    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "grey";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = "7";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(
      optionButton.x,
      optionButton.y,
      optionButton.width,
      optionButton.height
    );

    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "23px Arial Black";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(
      optionButton.text,
      optionButton.x + 50,
      optionButton.y + optionButton.height / 2 + 5
    );
  }
};


/***/ }),

/***/ "./src/screens/optionsScreen.js":
/*!**************************************!*\
  !*** ./src/screens/optionsScreen.js ***!
  \**************************************/
/*! exports provided: optionScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionScreen", function() { return optionScreen; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createFunctions/createCanvas */ "./src/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/const */ "./src/const/const.js");
/* harmony import */ var _createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createFunctions/createButtonsForMenu */ "./src/createFunctions/createButtonsForMenu.js");




/**
 * Resolution Button
 */

const resolution = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createButtons"])(
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 100,
  200,
  50,
  "Resolution",
  "white"
);

/**
 * Sound Button
 */

const sound = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createButtons"])(
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 25,
  200,
  50,
  "Sound",
  "white"
);

const optionScreen = () => {
  Object(_createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();
  _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].setTitle("Options");
  
  /** Create Caracter */
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = resolution.backgroundColor;
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(resolution.x, resolution.y, resolution.width, resolution.height);

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "grey";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = "7";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(
    resolution.x,
    resolution.y,
    resolution.width,
    resolution.height
  );

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "23px Arial Black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(
    resolution.text,
    resolution.x + 10,
    resolution.y + resolution.height / 2 + 5
  );

  /** Cancel */
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = sound.backgroundColor;
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(sound.x, sound.y, sound.width, sound.height);

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "grey";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = "7";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(sound.x, sound.y, sound.width, sound.height);

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "23px Arial Black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(sound.text, sound.x + 10, sound.y + sound.height / 2 + 5);
};


/***/ }),

/***/ "./src/screens/playScreen.js":
/*!***********************************!*\
  !*** ./src/screens/playScreen.js ***!
  \***********************************/
/*! exports provided: playScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playScreen", function() { return playScreen; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createFunctions/createCanvas */ "./src/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/const */ "./src/const/const.js");
/* harmony import */ var _createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createFunctions/createButtonsForMenu */ "./src/createFunctions/createButtonsForMenu.js");
/* harmony import */ var _designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../designFunctions/activateHovering */ "./src/designFunctions/activateHovering.js");
/* harmony import */ var _designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../designFunctions/activateClickForMenu */ "./src/designFunctions/activateClickForMenu.js");
/* harmony import */ var _mainMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainMenu */ "./src/screens/mainMenu.js");







/**
 * createCaracter Button
 */

const createCaracter = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createButtons"])(
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 100,
  200,
  50,
  "Caracter",
  "white"
);

const cancel = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createButtons"])(
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 25,
  200,
  50,
  "Cancel",
  "white"
);

const playScreen = () => {
  Object(_createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();
  _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].setTitle("Ingame");

  if (_const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].getTitle() === "Ingame") {
    /** Create Caracter */
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = createCaracter.backgroundColor;
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(
      createCaracter.x,
      createCaracter.y,
      createCaracter.width,
      createCaracter.height
    );

    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "grey";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = "7";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(
      createCaracter.x,
      createCaracter.y,
      createCaracter.width,
      createCaracter.height
    );

    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "23px Arial Black";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(
      createCaracter.text,
      createCaracter.x + 10,
      createCaracter.y + createCaracter.height / 2 + 5
    );

    /** Cancel */
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = cancel.backgroundColor;
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(cancel.x, cancel.y, cancel.width, cancel.height);

    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "grey";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = "7";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(cancel.x, cancel.y, cancel.width, cancel.height);

    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "23px Arial Black";
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(cancel.text, cancel.x + 10, cancel.y + cancel.height / 2 + 5);
  }
};

/**
 * Call activateHovering() to change the color while hovering buttons
 */

Object(_designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__["activateHovering"])(createCaracter, cancel, () => {
  /**
   * If Statement to avoid calling reloadScreen in the prev Frame
   */
  if (_const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].getTitle() === "Ingame") playScreen();
});

/**
 * Call choseMenu(),to trigger the click on the chosen button
 */

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_4__["choseMenu"])(createCaracter, cancel, () => {
  /**
   * If Statement to avoid calling reloadScreen in the prev Frame
   */
  if (_const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].getTitle() === "Ingame") console.log("Go Ingame");
  ;
}, () => {
  /**
   * If Statement to avoid calling reloadScreen in the prev Frame
   */
  if (_const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].getTitle() === "Ingame"){
    Object(_mainMenu__WEBPACK_IMPORTED_MODULE_5__["createMenu"])()
  };
  ;
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0L2NvbnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUhvdmVyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9tYWluTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9vcHRpb25zU2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL3BsYXlTY3JlZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRW9DO0FBQ3BCO0FBQ1E7QUFDRztBQUNQO0FBQ0M7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogRGVjbGFyaW5nIHVzZWZ1bCB2YXJpYWJsZXNcbiAqL1xuXG5leHBvcnQgbGV0IFNUQVRFID0ge1xuICBpZDogMSxcblxuICBUaXRsZTogXCJNZW51XCIsXG5cbiAgc2V0VGl0bGUobmV3VGl0bGUpIHtcbiAgICB0aGlzLlRpdGxlID0gbmV3VGl0bGU7XG4gIH0sXG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuVGl0bGU7XG4gIH1cbn07XG4iLCIvKipcbiAqXG4gKiBAcGFyYW0geyp9IHhcbiAqIEBwYXJhbSB7Kn0geVxuICogQHBhcmFtIHsqfSB3aWR0aFxuICogQHBhcmFtIHsqfSBoZWlnaHRcbiAqIEBwYXJhbSB7Kn0gdGV4dFxuICogQHBhcmFtIHsqfSBiYWNrZ3JvdW5kQ29sb3JcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBCdXR0b25zIGFuZCByZXR1cm4gcG9zaXRpb25cbiAqL1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9ucyA9ICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0ZXh0LCBiYWNrZ3JvdW5kQ29sb3IpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB4OiB4LFxuICAgIHk6IHksXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHRleHQ6IHRleHQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3JcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb29yQnV0dG9ucyA9IChlLCBvYmplY3QpID0+IHtcbiAgcmV0dXJuIChcbiAgICBlLmNsaWVudFggPiBvYmplY3QueCAmJlxuICAgIGUuY2xpZW50WCA8IG9iamVjdC54ICsgb2JqZWN0LndpZHRoICsgMTQgJiZcbiAgICAoZS5jbGllbnRZID4gb2JqZWN0LnkgJiYgZS5jbGllbnRZIDwgb2JqZWN0LnkgKyAob2JqZWN0LmhlaWdodCArIDE0KSlcbiAgKTtcbn07XG4iLCIvKipcbiAqIEdldCBDYW52YXNcbiAqL1xuXG5leHBvcnQgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lV2luZG93XCIpO1xuZXhwb3J0IGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDYW52YXMgPSAoKSA9PiB7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUNhbnZhcyB9IGZyb20gXCIuL2NyZWF0ZUNhbnZhc1wiO1xuXG5pbXBvcnQgeyBTVEFURSB9IGZyb20gXCIuLi9jb25zdC9jb25zdFwiO1xuaW1wb3J0IHsgY2hvc2VNZW51IH0gZnJvbSBcIi4uL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUNsaWNrRm9yTWVudVwiO1xuaW1wb3J0IHsgYWN0aXZhdGVIb3ZlcmluZyB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZ1wiO1xuaW1wb3J0IHsgcGxheVNjcmVlbiB9IGZyb20gXCIuLi9zY3JlZW5zL3BsYXlTY3JlZW5cIjtcbmltcG9ydCB7IG9wdGlvblNjcmVlbiB9IGZyb20gXCIuLi9zY3JlZW5zL29wdGlvbnNTY3JlZW5cIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnUsIHBsYXlCdXR0b24sIG9wdGlvbkJ1dHRvbiB9IGZyb20gXCIuLi9zY3JlZW5zL21haW5NZW51XCI7XG5cbmlmIChTVEFURS5nZXRUaXRsZSgpID09PSBcIk1lbnVcIikge1xuICAvKipcbiAgICogQ3JlYXRlIHRoZSBjYW52YXNcbiAgICovXG4gIGNyZWF0ZUNhbnZhcygpO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIG1haW4gTWVudVxuICAgKi9cbiAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IFwiTWVudVwiKSBjcmVhdGVNZW51KCk7XG5cbiAgLyoqXG4gICAqIENhbGwgYWN0aXZhdGVIb3ZlcmluZygpIHRvIGNoYW5nZSB0aGUgY29sb3Igd2hpbGUgaG92ZXJpbmcgYnV0dG9uc1xuICAgKi9cbiAgYWN0aXZhdGVIb3ZlcmluZyhwbGF5QnV0dG9uLCBvcHRpb25CdXR0b24sICgpID0+IHtcbiAgICAvKipcbiAgICAgKiBJZiBTdGF0ZW1lbnQgdG8gYXZvaWQgY2FsbGluZyByZWxvYWRTY3JlZW4gaW4gdGhlIHByZXYgb3IgbmV4dCBGcmFtZVxuICAgICAqL1xuICAgIGlmIChTVEFURS5nZXRUaXRsZSgpID09PSBcIk1lbnVcIikgY3JlYXRlTWVudSgpO1xuICB9KTtcblxuICAvKipcbiAgICogQ2FsbCBjaG9zZU1lbnUoKSx0byB0cmlnZ2VyIHRoZSBjbGljayBvbiB0aGUgY2hvc2VuIGJ1dHRvblxuICAgKi9cbiAgY2hvc2VNZW51KFxuICAgIHBsYXlCdXR0b24sXG4gICAgb3B0aW9uQnV0dG9uLFxuICAgICgpID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgU3RhdGVtZW50IHRvIGF2b2lkIGNhbGxpbmcgcmVsb2FkU2NyZWVuIGluIHRoZSBwcmV2IG9yIG5leHQgRnJhbWVcbiAgICAgICAqL1xuICAgICAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IFwiTWVudVwiKSBwbGF5U2NyZWVuKCk7XG4gICAgfSxcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gXCJNZW51XCIpIG9wdGlvblNjcmVlbigpO1xuICAgIH1cbiAgKTtcbn1cbiIsImltcG9ydCB7IGNhbnZhcyB9IGZyb20gXCIuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzXCI7XG5pbXBvcnQgeyBTVEFURSB9IGZyb20gXCIuLi9jb25zdC9jb25zdFwiO1xuaW1wb3J0IHsgY29vckJ1dHRvbnMgfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51XCI7XG5cbmV4cG9ydCBjb25zdCBjaG9zZU1lbnUgPSAoYnV0dG9uLCBidXR0b24yLCBocmVmQnV0dG9uLCBocmVmQnV0dG9uMikgPT4ge1xuICAvKipcbiAgICogQ2xpY2sgRXZlbnRcbiAgICogQ2hvb3NlIG1lbnUgdG8gY2xpY2tcbiAgICovXG5cbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IFwiTWVudVwiIHx8IFNUQVRFLmdldFRpdGxlKCkgPT09IFwiSW5nYW1lXCIgKSB7XG4gICAgICBpZiAoY29vckJ1dHRvbnMoZSwgYnV0dG9uKSkge1xuICAgICAgIGhyZWZCdXR0b24oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvb3JCdXR0b25zKGUsIGJ1dHRvbjIpKSB7XG4gICAgICAgIGhyZWZCdXR0b24yKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBTVEFURSB9IGZyb20gXCIuLi9jb25zdC9jb25zdFwiO1xuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXNcIjtcbmltcG9ydCB7IGNvb3JCdXR0b25zIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudVwiO1xuXG5cblxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlSG92ZXJpbmcgPSAoYnV0dG9uLCBidXR0b24yLCByZWxvYWRBY3R1YWxNZW51KSA9PiB7XG4gIGlmIChTVEFURS5nZXRUaXRsZSgpID09PSBcIkluZ2FtZVwiKSB7XG4gICAgLyoqXG4gICAgICogSG92ZXIgZXZlbnRcbiAgICAgKi9cblxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGNvb3JCdXR0b25zKGUsIGJ1dHRvbikpIHtcbiAgICAgICAgYnV0dG9uLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJQbGF5XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvb3JCdXR0b25zKGUsIGJ1dHRvbjIpKSB7XG4gICAgICAgIGJ1dHRvbjIuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbjIuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgfVxuICAgICAgcmVsb2FkQWN0dWFsTWVudSA/IHJlbG9hZEFjdHVhbE1lbnUoKSA6IGNvbnNvbGUubG9nKFwiTWlzc2luZyBGdW5jdGlvbiBQYXJhbWV0ZXJcIik7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJcblxuLy8gaW1wb3J0IHsgbWFrZVdhcnJpb3IgfSBmcm9tIFwiLi9jcmVhdGVDYXJhY3RlclwiO1xuaW1wb3J0ICcuL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVNZW51JztcblxuXG4vKlxuXG5jb25zdCBjcmVhdGVXYXJyaW9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3YXJyaW9yXCIpO1xuY3JlYXRlV2Fycmlvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gIC8vIENyZWF0aW5nIFRoZSBXYXJyaW9yIC8vXG4gIG1ha2VXYXJyaW9yKCk7XG59KTtcbiBcbiovIiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhc1wiO1xuaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi4vY29uc3QvY29uc3RcIjtcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbnMgfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51XCI7XG5cbmltcG9ydCB2ZXJzaW9uIGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcblxuXG4vKipcbiAqIFBsYXkgQnV0dG9uXG4gKi9cbmV4cG9ydCBjb25zdCBwbGF5QnV0dG9uID0gY3JlYXRlQnV0dG9ucyhcbiAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgY2FudmFzLmhlaWdodCAvIDIgLSAxMDAsXG4gIDIwMCxcbiAgNTAsXG4gIFwiUGxheSB0aGUgZ2FtZVwiLFxuICBcIndoaXRlXCJcbik7XG5cbi8qKlxuICogT3B0aW9ucyBCdXR0b25cbiAqL1xuZXhwb3J0IGNvbnN0IG9wdGlvbkJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbnMoXG4gIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXG4gIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjUsXG4gIDIwMCxcbiAgNTAsXG4gIFwiT3B0aW9uc1wiLFxuICBcIndoaXRlXCJcbik7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gXCJNZW51XCIgfHwgU1RBVEUuZ2V0VGl0bGUoKSA9PT0gXCJJbmdhbWVcIikge1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIEdhbWUgVmVyc2lvblxuICAgICAqL1xuXG4gICAgY29uc3QgZ2FtZVZlcnNpb24gPSBcIlYgXCIgKyB2ZXJzaW9uLnZlcnNpb247XG5cbiAgICAvLyBEcmF3IFZlcnNpb24gaW4gY2FudmFzIC8vXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgY3R4LmZvbnQgPSBcIjE1cHggQXJpYWwgYmxhY2tcIjtcbiAgICBjdHguZmlsbFRleHQoZ2FtZVZlcnNpb24sIDUwLCA1MCk7XG5cbiAgICAvKipQbGF5ICovXG4gICAgY3R4LmZpbGxTdHlsZSA9IHBsYXlCdXR0b24uYmFja2dyb3VuZENvbG9yO1xuICAgIGN0eC5maWxsUmVjdChcbiAgICAgIHBsYXlCdXR0b24ueCxcbiAgICAgIHBsYXlCdXR0b24ueSxcbiAgICAgIHBsYXlCdXR0b24ud2lkdGgsXG4gICAgICBwbGF5QnV0dG9uLmhlaWdodFxuICAgICk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZXlcIjtcbiAgICBjdHgubGluZVdpZHRoID0gXCI3XCI7XG4gICAgY3R4LnN0cm9rZVJlY3QoXG4gICAgICBwbGF5QnV0dG9uLngsXG4gICAgICBwbGF5QnV0dG9uLnksXG4gICAgICBwbGF5QnV0dG9uLndpZHRoLFxuICAgICAgcGxheUJ1dHRvbi5oZWlnaHRcbiAgICApO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHguZm9udCA9IFwiMjNweCBBcmlhbCBCbGFja1wiO1xuICAgIGN0eC5maWxsVGV4dChcbiAgICAgIHBsYXlCdXR0b24udGV4dCxcbiAgICAgIHBsYXlCdXR0b24ueCArIDEwLFxuICAgICAgcGxheUJ1dHRvbi55ICsgcGxheUJ1dHRvbi5oZWlnaHQgLyAyICsgNVxuICAgICk7XG5cbiAgICAvKipPcHRpb25zICovXG4gICAgY3R4LmZpbGxTdHlsZSA9IG9wdGlvbkJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KFxuICAgICAgb3B0aW9uQnV0dG9uLngsXG4gICAgICBvcHRpb25CdXR0b24ueSxcbiAgICAgIG9wdGlvbkJ1dHRvbi53aWR0aCxcbiAgICAgIG9wdGlvbkJ1dHRvbi5oZWlnaHRcbiAgICApO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJncmV5XCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IFwiN1wiO1xuICAgIGN0eC5zdHJva2VSZWN0KFxuICAgICAgb3B0aW9uQnV0dG9uLngsXG4gICAgICBvcHRpb25CdXR0b24ueSxcbiAgICAgIG9wdGlvbkJ1dHRvbi53aWR0aCxcbiAgICAgIG9wdGlvbkJ1dHRvbi5oZWlnaHRcbiAgICApO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHguZm9udCA9IFwiMjNweCBBcmlhbCBCbGFja1wiO1xuICAgIGN0eC5maWxsVGV4dChcbiAgICAgIG9wdGlvbkJ1dHRvbi50ZXh0LFxuICAgICAgb3B0aW9uQnV0dG9uLnggKyA1MCxcbiAgICAgIG9wdGlvbkJ1dHRvbi55ICsgb3B0aW9uQnV0dG9uLmhlaWdodCAvIDIgKyA1XG4gICAgKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUNhbnZhcywgY2FudmFzLCBjdHggfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhc1wiO1xuaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi4vY29uc3QvY29uc3RcIjtcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbnMgfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51XCI7XG5cbi8qKlxuICogUmVzb2x1dGlvbiBCdXR0b25cbiAqL1xuXG5jb25zdCByZXNvbHV0aW9uID0gY3JlYXRlQnV0dG9ucyhcbiAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgY2FudmFzLmhlaWdodCAvIDIgLSAxMDAsXG4gIDIwMCxcbiAgNTAsXG4gIFwiUmVzb2x1dGlvblwiLFxuICBcIndoaXRlXCJcbik7XG5cbi8qKlxuICogU291bmQgQnV0dG9uXG4gKi9cblxuY29uc3Qgc291bmQgPSBjcmVhdGVCdXR0b25zKFxuICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxuICBjYW52YXMuaGVpZ2h0IC8gMiAtIDI1LFxuICAyMDAsXG4gIDUwLFxuICBcIlNvdW5kXCIsXG4gIFwid2hpdGVcIlxuKTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvblNjcmVlbiA9ICgpID0+IHtcbiAgY3JlYXRlQ2FudmFzKCk7XG4gIFNUQVRFLnNldFRpdGxlKFwiT3B0aW9uc1wiKTtcbiAgXG4gIC8qKiBDcmVhdGUgQ2FyYWN0ZXIgKi9cbiAgY3R4LmZpbGxTdHlsZSA9IHJlc29sdXRpb24uYmFja2dyb3VuZENvbG9yO1xuICBjdHguZmlsbFJlY3QocmVzb2x1dGlvbi54LCByZXNvbHV0aW9uLnksIHJlc29sdXRpb24ud2lkdGgsIHJlc29sdXRpb24uaGVpZ2h0KTtcblxuICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZXlcIjtcbiAgY3R4LmxpbmVXaWR0aCA9IFwiN1wiO1xuICBjdHguc3Ryb2tlUmVjdChcbiAgICByZXNvbHV0aW9uLngsXG4gICAgcmVzb2x1dGlvbi55LFxuICAgIHJlc29sdXRpb24ud2lkdGgsXG4gICAgcmVzb2x1dGlvbi5oZWlnaHRcbiAgKTtcblxuICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICBjdHguZm9udCA9IFwiMjNweCBBcmlhbCBCbGFja1wiO1xuICBjdHguZmlsbFRleHQoXG4gICAgcmVzb2x1dGlvbi50ZXh0LFxuICAgIHJlc29sdXRpb24ueCArIDEwLFxuICAgIHJlc29sdXRpb24ueSArIHJlc29sdXRpb24uaGVpZ2h0IC8gMiArIDVcbiAgKTtcblxuICAvKiogQ2FuY2VsICovXG4gIGN0eC5maWxsU3R5bGUgPSBzb3VuZC5iYWNrZ3JvdW5kQ29sb3I7XG4gIGN0eC5maWxsUmVjdChzb3VuZC54LCBzb3VuZC55LCBzb3VuZC53aWR0aCwgc291bmQuaGVpZ2h0KTtcblxuICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZXlcIjtcbiAgY3R4LmxpbmVXaWR0aCA9IFwiN1wiO1xuICBjdHguc3Ryb2tlUmVjdChzb3VuZC54LCBzb3VuZC55LCBzb3VuZC53aWR0aCwgc291bmQuaGVpZ2h0KTtcblxuICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICBjdHguZm9udCA9IFwiMjNweCBBcmlhbCBCbGFja1wiO1xuICBjdHguZmlsbFRleHQoc291bmQudGV4dCwgc291bmQueCArIDEwLCBzb3VuZC55ICsgc291bmQuaGVpZ2h0IC8gMiArIDUpO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUNhbnZhcywgY2FudmFzLCBjdHggfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhc1wiO1xuaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi4vY29uc3QvY29uc3RcIjtcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbnMgfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51XCI7XG5pbXBvcnQgeyBhY3RpdmF0ZUhvdmVyaW5nIH0gZnJvbSBcIi4uL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUhvdmVyaW5nXCI7XG5pbXBvcnQgeyBjaG9zZU1lbnUgfSBmcm9tIFwiLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlQ2xpY2tGb3JNZW51XCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vbWFpbk1lbnVcIjtcblxuLyoqXG4gKiBjcmVhdGVDYXJhY3RlciBCdXR0b25cbiAqL1xuXG5jb25zdCBjcmVhdGVDYXJhY3RlciA9IGNyZWF0ZUJ1dHRvbnMoXG4gIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXG4gIGNhbnZhcy5oZWlnaHQgLyAyIC0gMTAwLFxuICAyMDAsXG4gIDUwLFxuICBcIkNhcmFjdGVyXCIsXG4gIFwid2hpdGVcIlxuKTtcblxuY29uc3QgY2FuY2VsID0gY3JlYXRlQnV0dG9ucyhcbiAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgY2FudmFzLmhlaWdodCAvIDIgLSAyNSxcbiAgMjAwLFxuICA1MCxcbiAgXCJDYW5jZWxcIixcbiAgXCJ3aGl0ZVwiXG4pO1xuXG5leHBvcnQgY29uc3QgcGxheVNjcmVlbiA9ICgpID0+IHtcbiAgY3JlYXRlQ2FudmFzKCk7XG4gIFNUQVRFLnNldFRpdGxlKFwiSW5nYW1lXCIpO1xuXG4gIGlmIChTVEFURS5nZXRUaXRsZSgpID09PSBcIkluZ2FtZVwiKSB7XG4gICAgLyoqIENyZWF0ZSBDYXJhY3RlciAqL1xuICAgIGN0eC5maWxsU3R5bGUgPSBjcmVhdGVDYXJhY3Rlci5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KFxuICAgICAgY3JlYXRlQ2FyYWN0ZXIueCxcbiAgICAgIGNyZWF0ZUNhcmFjdGVyLnksXG4gICAgICBjcmVhdGVDYXJhY3Rlci53aWR0aCxcbiAgICAgIGNyZWF0ZUNhcmFjdGVyLmhlaWdodFxuICAgICk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZXlcIjtcbiAgICBjdHgubGluZVdpZHRoID0gXCI3XCI7XG4gICAgY3R4LnN0cm9rZVJlY3QoXG4gICAgICBjcmVhdGVDYXJhY3Rlci54LFxuICAgICAgY3JlYXRlQ2FyYWN0ZXIueSxcbiAgICAgIGNyZWF0ZUNhcmFjdGVyLndpZHRoLFxuICAgICAgY3JlYXRlQ2FyYWN0ZXIuaGVpZ2h0XG4gICAgKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmZvbnQgPSBcIjIzcHggQXJpYWwgQmxhY2tcIjtcbiAgICBjdHguZmlsbFRleHQoXG4gICAgICBjcmVhdGVDYXJhY3Rlci50ZXh0LFxuICAgICAgY3JlYXRlQ2FyYWN0ZXIueCArIDEwLFxuICAgICAgY3JlYXRlQ2FyYWN0ZXIueSArIGNyZWF0ZUNhcmFjdGVyLmhlaWdodCAvIDIgKyA1XG4gICAgKTtcblxuICAgIC8qKiBDYW5jZWwgKi9cbiAgICBjdHguZmlsbFN0eWxlID0gY2FuY2VsLmJhY2tncm91bmRDb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoY2FuY2VsLngsIGNhbmNlbC55LCBjYW5jZWwud2lkdGgsIGNhbmNlbC5oZWlnaHQpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJncmV5XCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IFwiN1wiO1xuICAgIGN0eC5zdHJva2VSZWN0KGNhbmNlbC54LCBjYW5jZWwueSwgY2FuY2VsLndpZHRoLCBjYW5jZWwuaGVpZ2h0KTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmZvbnQgPSBcIjIzcHggQXJpYWwgQmxhY2tcIjtcbiAgICBjdHguZmlsbFRleHQoY2FuY2VsLnRleHQsIGNhbmNlbC54ICsgMTAsIGNhbmNlbC55ICsgY2FuY2VsLmhlaWdodCAvIDIgKyA1KTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsIGFjdGl2YXRlSG92ZXJpbmcoKSB0byBjaGFuZ2UgdGhlIGNvbG9yIHdoaWxlIGhvdmVyaW5nIGJ1dHRvbnNcbiAqL1xuXG5hY3RpdmF0ZUhvdmVyaW5nKGNyZWF0ZUNhcmFjdGVyLCBjYW5jZWwsICgpID0+IHtcbiAgLyoqXG4gICAqIElmIFN0YXRlbWVudCB0byBhdm9pZCBjYWxsaW5nIHJlbG9hZFNjcmVlbiBpbiB0aGUgcHJldiBGcmFtZVxuICAgKi9cbiAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IFwiSW5nYW1lXCIpIHBsYXlTY3JlZW4oKTtcbn0pO1xuXG4vKipcbiAqIENhbGwgY2hvc2VNZW51KCksdG8gdHJpZ2dlciB0aGUgY2xpY2sgb24gdGhlIGNob3NlbiBidXR0b25cbiAqL1xuXG5jaG9zZU1lbnUoY3JlYXRlQ2FyYWN0ZXIsIGNhbmNlbCwgKCkgPT4ge1xuICAvKipcbiAgICogSWYgU3RhdGVtZW50IHRvIGF2b2lkIGNhbGxpbmcgcmVsb2FkU2NyZWVuIGluIHRoZSBwcmV2IEZyYW1lXG4gICAqL1xuICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gXCJJbmdhbWVcIikgY29uc29sZS5sb2coXCJHbyBJbmdhbWVcIik7XG4gIDtcbn0sICgpID0+IHtcbiAgLyoqXG4gICAqIElmIFN0YXRlbWVudCB0byBhdm9pZCBjYWxsaW5nIHJlbG9hZFNjcmVlbiBpbiB0aGUgcHJldiBGcmFtZVxuICAgKi9cbiAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IFwiSW5nYW1lXCIpe1xuICAgIGNyZWF0ZU1lbnUoKVxuICB9O1xuICA7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=