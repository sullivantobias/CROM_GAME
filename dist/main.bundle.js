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
/* harmony import */ var _screens_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../screens/navigationMenu/navigationMenu */ "./src/screens/navigationMenu/navigationMenu.js");










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
   * Activate Hovering
   */

  Object(_designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__["activateHovering"])(
    () => {
      Object(_screens_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_7__["navigationMenu"])("Menu", _screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["createMenu"], "Menu");
    },
    _screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["playButton"],
    _screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["optionButton"]
  );

  /**
   * Activate Click
   */

  Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_2__["choseMenu"])(
    () => {
      Object(_screens_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_7__["navigationMenu"])("Menu", _screens_playScreen__WEBPACK_IMPORTED_MODULE_4__["playScreen"], "Ingame");
    },
    _screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["playButton"]
  );

  Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_2__["choseMenu"])(
    () => {
      Object(_screens_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_7__["navigationMenu"])("Menu", _screens_optionsScreen__WEBPACK_IMPORTED_MODULE_5__["optionScreen"], "Options");
    },
    _screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["optionButton"]
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
/* harmony import */ var _createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createFunctions/createButtonsForMenu */ "./src/createFunctions/createButtonsForMenu.js");



const choseMenu = (href, button) => {
  /**
   * Click Event
   * Choose menu to click
   */
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].addEventListener("click", e => {
    e.preventDefault();
    if (button) {
      if (Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_1__["coorButtons"])(e, button)) {
        href();
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
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createFunctions/createCanvas */ "./src/createFunctions/createCanvas.js");
/* harmony import */ var _createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createFunctions/createButtonsForMenu */ "./src/createFunctions/createButtonsForMenu.js");



const activateHovering = (reloadActualMenu, ...button) => {
  /**
   * Hover event
   */
  if (button.length) {
    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].addEventListener("mousemove", e => {
      e.preventDefault();

      for (let i = 0; i < button.length; i++) {
        if (Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_1__["coorButtons"])(e, button[i])) {
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

/***/ "./src/screens/choseCaracterScreen.js":
/*!********************************************!*\
  !*** ./src/screens/choseCaracterScreen.js ***!
  \********************************************/
/*! exports provided: choseCaracterScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choseCaracterScreen", function() { return choseCaracterScreen; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createFunctions/createCanvas */ "./src/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/const */ "./src/const/const.js");
/* harmony import */ var _createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createFunctions/createButtonsForMenu */ "./src/createFunctions/createButtonsForMenu.js");
/* harmony import */ var _designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../designFunctions/activateHovering */ "./src/designFunctions/activateHovering.js");
/* harmony import */ var _navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigationMenu/navigationMenu */ "./src/screens/navigationMenu/navigationMenu.js");
/* harmony import */ var _designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../designFunctions/activateClickForMenu */ "./src/designFunctions/activateClickForMenu.js");
/* harmony import */ var _playScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playScreen */ "./src/screens/playScreen.js");








/**
 * Warrior
 */

const warrior = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createButtons"])(
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 100,
  200,
  50,
  "Warrior",
  "white"
);

/**
 * Mage
 */

const mage = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createButtons"])(
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 25,
  200,
  50,
  "Mage",
  "white"
);

/**
 * Mage
 */

const cancel = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createButtons"])(
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 + 50,
  200,
  50,
  "Cancel",
  "white"
);

const choseCaracterScreen = () => {
  /**
   * remove old components
   */
  Object(_createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();

  /** Set State */
  _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].setTitle("choseCaracter");

  /** Warrior */
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = warrior.backgroundColor;
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(warrior.x, warrior.y, warrior.width, warrior.height);

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "grey";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = "7";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(warrior.x, warrior.y, warrior.width, warrior.height);

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "23px Arial Black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(
    warrior.text,
    warrior.x + 10,
    warrior.y + warrior.height / 2 + 5
  );

  /** Mage */
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = mage.backgroundColor;
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(mage.x, mage.y, mage.width, mage.height);

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "grey";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = "7";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(mage.x, mage.y, mage.width, mage.height);

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "23px Arial Black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(mage.text, mage.x + 10, mage.y + mage.height / 2 + 5);

  /** Cancel */
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = cancel.backgroundColor;
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(cancel.x, cancel.y, cancel.width, cancel.height);

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "grey";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = "7";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(cancel.x, cancel.y, cancel.width, cancel.height);

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "23px Arial Black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(cancel.text, cancel.x + 10, cancel.y + cancel.height / 2 + 5);
};

/**
 * Activate Hovering
 */

Object(_designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__["activateHovering"])(
  () => {
    Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])("choseCaracter", choseCaracterScreen, "choseCaracter");
  },
  warrior,
  mage,
  cancel
);

/**
 * Activate Click
 */

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(() => {
  Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])("choseCaracter", choseCaracterScreen, "choseCaracter");
}, warrior);

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(() => {
  Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])("choseCaracter", choseCaracterScreen, "choseCaracter");
}, mage);

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(() => {
  Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])("choseCaracter", _playScreen__WEBPACK_IMPORTED_MODULE_6__["playScreen"], "Ingame");
}, cancel);


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
/* harmony import */ var _createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createFunctions/createButtonsForMenu */ "./src/createFunctions/createButtonsForMenu.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/const */ "./src/const/const.js");






/**
 * Play Button
 */
const playButton = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_1__["createButtons"])(
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
const optionButton = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_1__["createButtons"])(
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 25,
  200,
  50,
  "Options",
  "white"
);

const createMenu = () => {
  /**
   * Retrieve Game Version
   */
  const gameVersion = "V " + _package_json__WEBPACK_IMPORTED_MODULE_2__.version;

  // Draw Version in canvas //
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "red";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "15px Arial black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(gameVersion, 50, 50);

  /**Play */
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = playButton.backgroundColor;
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(playButton.x, playButton.y, playButton.width, playButton.height);

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
};


/***/ }),

/***/ "./src/screens/navigationMenu/navigationMenu.js":
/*!******************************************************!*\
  !*** ./src/screens/navigationMenu/navigationMenu.js ***!
  \******************************************************/
/*! exports provided: navigationMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationMenu", function() { return navigationMenu; });
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ "./src/const/const.js");


const navigationMenu = (actualState, screenLoaded, stateLoaded) => {
  if (_const_const__WEBPACK_IMPORTED_MODULE_0__["STATE"].getTitle() === actualState) {
    return new Promise((success, error) => {
      if (_const_const__WEBPACK_IMPORTED_MODULE_0__["STATE"].getTitle() === actualState) {
        success(() => screenLoaded());
      } else {
        error(console.log("Error, Wrong STATE Title"));
      }
    }).then(() => {
      if (_const_const__WEBPACK_IMPORTED_MODULE_0__["STATE"].getTitle() === actualState)
        setTimeout(() => {
          _const_const__WEBPACK_IMPORTED_MODULE_0__["STATE"].setTitle(stateLoaded);
          screenLoaded();
        }),
          50;
    });
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
/* harmony import */ var _designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../designFunctions/activateHovering */ "./src/designFunctions/activateHovering.js");
/* harmony import */ var _navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigationMenu/navigationMenu */ "./src/screens/navigationMenu/navigationMenu.js");
/* harmony import */ var _designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../designFunctions/activateClickForMenu */ "./src/designFunctions/activateClickForMenu.js");
/* harmony import */ var _mainMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainMenu */ "./src/screens/mainMenu.js");









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

const cancel = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createButtons"])(
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 25,
  200,
  50,
  "Cancel",
  "white"
);

const optionScreen = () => {
  /**
   * remove old components
   */
  Object(_createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();

  /** Set State */
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
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = cancel.backgroundColor;
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(cancel.x, cancel.y, cancel.width, cancel.height);

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "grey";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = "7";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(cancel.x, cancel.y, cancel.width, cancel.height);

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "23px Arial Black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(cancel.text, cancel.x + 10, cancel.y + cancel.height / 2 + 5);
};

 /**
   * Activate Hovering
   */

  Object(_designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__["activateHovering"])(
    () => {
      Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])("Options", optionScreen, "Options");
    },
    resolution,
    cancel
  );

  /**
   * Activate Click
   */

  Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(
    () => {
      Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])("Options", _mainMenu__WEBPACK_IMPORTED_MODULE_6__["createMenu"], "Menu");
    },
    cancel
  );

  Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(
    () => {
      Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])("Options", optionScreen, "Options");
    },
    resolution
  );

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
/* harmony import */ var _navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigationMenu/navigationMenu */ "./src/screens/navigationMenu/navigationMenu.js");
/* harmony import */ var _choseCaracterScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./choseCaracterScreen */ "./src/screens/choseCaracterScreen.js");









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
  /**
   * remove old components
   */
  Object(_createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();

  /** Set State */
  _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].setTitle("Ingame");

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
};

/**
   * Activate Hovering
   */

  Object(_designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__["activateHovering"])(
    () => {
      Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_6__["navigationMenu"])("Ingame", playScreen, "Ingame");
    },
    createCaracter,
    cancel
  );

  /**
   * Activate Click
   */

  Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_4__["choseMenu"])(
    () => {
      Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_6__["navigationMenu"])("Ingame", _choseCaracterScreen__WEBPACK_IMPORTED_MODULE_7__["choseCaracterScreen"], "choseCaracter");
    },
    createCaracter
  );

  Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_4__["choseMenu"])(
    () => {
      Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_6__["navigationMenu"])("Ingame", _mainMenu__WEBPACK_IMPORTED_MODULE_5__["createMenu"], "Menu");
    },
    cancel
  );

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0L2NvbnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUhvdmVyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9jaG9zZUNhcmFjdGVyU2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL21haW5NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL29wdGlvbnNTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvcGxheVNjcmVlbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdvQztBQUNwQjtBQUNRO0FBQ0c7QUFDUDtBQUNDO0FBQ0k7QUFDSzs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEkiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxyXG4gKiBEZWNsYXJpbmcgdXNlZnVsIHZhcmlhYmxlc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBsZXQgU1RBVEUgPSB7XHJcbiAgaWQ6IDEsXHJcblxyXG4gIFRpdGxlOiBcIk1lbnVcIixcclxuXHJcbiAgc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgIHRoaXMuVGl0bGUgPSBuZXdUaXRsZTtcclxuICB9LFxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLlRpdGxlO1xyXG4gIH1cclxufTtcclxuIiwiLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0geFxyXG4gKiBAcGFyYW0geyp9IHlcclxuICogQHBhcmFtIHsqfSB3aWR0aFxyXG4gKiBAcGFyYW0geyp9IGhlaWdodFxyXG4gKiBAcGFyYW0geyp9IHRleHRcclxuICogQHBhcmFtIHsqfSBiYWNrZ3JvdW5kQ29sb3JcclxuICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlIEJ1dHRvbnMgYW5kIHJldHVybiBwb3NpdGlvblxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b25zID0gKHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHQsIGJhY2tncm91bmRDb2xvcikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiB4LFxyXG4gICAgeTogeSxcclxuICAgIHdpZHRoOiB3aWR0aCxcclxuICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgdGV4dDogdGV4dCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb29yQnV0dG9ucyA9IChlLCBvYmplY3QpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgZS5jbGllbnRYID4gb2JqZWN0LnggJiZcclxuICAgIGUuY2xpZW50WCA8IG9iamVjdC54ICsgb2JqZWN0LndpZHRoICsgMTQgJiZcclxuICAgIChlLmNsaWVudFkgPiBvYmplY3QueSAmJiBlLmNsaWVudFkgPCBvYmplY3QueSArIChvYmplY3QuaGVpZ2h0ICsgMTQpKVxyXG4gICk7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBHZXQgQ2FudmFzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZVdpbmRvd1wiKTtcclxuZXhwb3J0IGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQ2FudmFzID0gKCkgPT4ge1xyXG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDYW52YXMgfSBmcm9tIFwiLi9jcmVhdGVDYW52YXNcIjtcclxuXHJcbmltcG9ydCB7IFNUQVRFIH0gZnJvbSBcIi4uL2NvbnN0L2NvbnN0XCI7XHJcbmltcG9ydCB7IGNob3NlTWVudSB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnVcIjtcclxuaW1wb3J0IHsgYWN0aXZhdGVIb3ZlcmluZyB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZ1wiO1xyXG5pbXBvcnQgeyBwbGF5U2NyZWVuIH0gZnJvbSBcIi4uL3NjcmVlbnMvcGxheVNjcmVlblwiO1xyXG5pbXBvcnQgeyBvcHRpb25TY3JlZW4gfSBmcm9tIFwiLi4vc2NyZWVucy9vcHRpb25zU2NyZWVuXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnUsIHBsYXlCdXR0b24sIG9wdGlvbkJ1dHRvbiB9IGZyb20gXCIuLi9zY3JlZW5zL21haW5NZW51XCI7XHJcbmltcG9ydCB7IG5hdmlnYXRpb25NZW51IH0gZnJvbSBcIi4uL3NjcmVlbnMvbmF2aWdhdGlvbk1lbnUvbmF2aWdhdGlvbk1lbnVcIjtcclxuXHJcbmlmIChTVEFURS5nZXRUaXRsZSgpID09PSBcIk1lbnVcIikge1xyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSB0aGUgY2FudmFzXHJcbiAgICovXHJcbiAgY3JlYXRlQ2FudmFzKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSB0aGUgbWFpbiBNZW51XHJcbiAgICovXHJcbiAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IFwiTWVudVwiKSBjcmVhdGVNZW51KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdGl2YXRlIEhvdmVyaW5nXHJcbiAgICovXHJcblxyXG4gIGFjdGl2YXRlSG92ZXJpbmcoXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIG5hdmlnYXRpb25NZW51KFwiTWVudVwiLCBjcmVhdGVNZW51LCBcIk1lbnVcIik7XHJcbiAgICB9LFxyXG4gICAgcGxheUJ1dHRvbixcclxuICAgIG9wdGlvbkJ1dHRvblxyXG4gICk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdGl2YXRlIENsaWNrXHJcbiAgICovXHJcblxyXG4gIGNob3NlTWVudShcclxuICAgICgpID0+IHtcclxuICAgICAgbmF2aWdhdGlvbk1lbnUoXCJNZW51XCIsIHBsYXlTY3JlZW4sIFwiSW5nYW1lXCIpO1xyXG4gICAgfSxcclxuICAgIHBsYXlCdXR0b25cclxuICApO1xyXG5cclxuICBjaG9zZU1lbnUoXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIG5hdmlnYXRpb25NZW51KFwiTWVudVwiLCBvcHRpb25TY3JlZW4sIFwiT3B0aW9uc1wiKTtcclxuICAgIH0sXHJcbiAgICBvcHRpb25CdXR0b25cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGNhbnZhcyB9IGZyb20gXCIuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzXCI7XHJcbmltcG9ydCB7IGNvb3JCdXR0b25zIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNob3NlTWVudSA9IChocmVmLCBidXR0b24pID0+IHtcclxuICAvKipcclxuICAgKiBDbGljayBFdmVudFxyXG4gICAqIENob29zZSBtZW51IHRvIGNsaWNrXHJcbiAgICovXHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChidXR0b24pIHtcclxuICAgICAgaWYgKGNvb3JCdXR0b25zKGUsIGJ1dHRvbikpIHtcclxuICAgICAgICBocmVmKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2FudmFzIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXNcIjtcclxuaW1wb3J0IHsgY29vckJ1dHRvbnMgfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51XCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aXZhdGVIb3ZlcmluZyA9IChyZWxvYWRBY3R1YWxNZW51LCAuLi5idXR0b24pID0+IHtcclxuICAvKipcclxuICAgKiBIb3ZlciBldmVudFxyXG4gICAqL1xyXG4gIGlmIChidXR0b24ubGVuZ3RoKSB7XHJcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBlID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoY29vckJ1dHRvbnMoZSwgYnV0dG9uW2ldKSkge1xyXG4gICAgICAgICAgYnV0dG9uW2ldLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUGxheVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnV0dG9uW2ldLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlbG9hZEFjdHVhbE1lbnVcclxuICAgICAgICA/IHJlbG9hZEFjdHVhbE1lbnUoKVxyXG4gICAgICAgIDogY29uc29sZS5sb2coXCJNaXNzaW5nIEZ1bmN0aW9uIFBhcmFtZXRlclwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIiwiLy8gaW1wb3J0IHsgbWFrZVdhcnJpb3IgfSBmcm9tIFwiLi9jcmVhdGVDYXJhY3RlclwiO1xyXG5pbXBvcnQgXCIuL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVNZW51XCI7XHJcblxyXG4vKlxyXG5cclxuY29uc3QgY3JlYXRlV2FycmlvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2FycmlvclwiKTtcclxuY3JlYXRlV2Fycmlvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgLy8gQ3JlYXRpbmcgVGhlIFdhcnJpb3IgLy9cclxuICBtYWtlV2FycmlvcigpO1xyXG59KTtcclxuIFxyXG4qL1xyXG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCwgY3JlYXRlQ2FudmFzIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXNcIjtcclxuaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi4vY29uc3QvY29uc3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnV0dG9ucyB9IGZyb20gXCIuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnVcIjtcclxuaW1wb3J0IHsgYWN0aXZhdGVIb3ZlcmluZyB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZ1wiO1xyXG5pbXBvcnQgeyBuYXZpZ2F0aW9uTWVudSB9IGZyb20gXCIuL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51XCI7XHJcbmltcG9ydCB7IGNob3NlTWVudSB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnVcIjtcclxuaW1wb3J0IHsgcGxheVNjcmVlbiB9IGZyb20gXCIuL3BsYXlTY3JlZW5cIjtcclxuXHJcbi8qKlxyXG4gKiBXYXJyaW9yXHJcbiAqL1xyXG5cclxuY29uc3Qgd2FycmlvciA9IGNyZWF0ZUJ1dHRvbnMoXHJcbiAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcclxuICBjYW52YXMuaGVpZ2h0IC8gMiAtIDEwMCxcclxuICAyMDAsXHJcbiAgNTAsXHJcbiAgXCJXYXJyaW9yXCIsXHJcbiAgXCJ3aGl0ZVwiXHJcbik7XHJcblxyXG4vKipcclxuICogTWFnZVxyXG4gKi9cclxuXHJcbmNvbnN0IG1hZ2UgPSBjcmVhdGVCdXR0b25zKFxyXG4gIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXHJcbiAgY2FudmFzLmhlaWdodCAvIDIgLSAyNSxcclxuICAyMDAsXHJcbiAgNTAsXHJcbiAgXCJNYWdlXCIsXHJcbiAgXCJ3aGl0ZVwiXHJcbik7XHJcblxyXG4vKipcclxuICogTWFnZVxyXG4gKi9cclxuXHJcbmNvbnN0IGNhbmNlbCA9IGNyZWF0ZUJ1dHRvbnMoXHJcbiAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcclxuICBjYW52YXMuaGVpZ2h0IC8gMiArIDUwLFxyXG4gIDIwMCxcclxuICA1MCxcclxuICBcIkNhbmNlbFwiLFxyXG4gIFwid2hpdGVcIlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNob3NlQ2FyYWN0ZXJTY3JlZW4gPSAoKSA9PiB7XHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIG9sZCBjb21wb25lbnRzXHJcbiAgICovXHJcbiAgY3JlYXRlQ2FudmFzKCk7XHJcblxyXG4gIC8qKiBTZXQgU3RhdGUgKi9cclxuICBTVEFURS5zZXRUaXRsZShcImNob3NlQ2FyYWN0ZXJcIik7XHJcblxyXG4gIC8qKiBXYXJyaW9yICovXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHdhcnJpb3IuYmFja2dyb3VuZENvbG9yO1xyXG4gIGN0eC5maWxsUmVjdCh3YXJyaW9yLngsIHdhcnJpb3IueSwgd2Fycmlvci53aWR0aCwgd2Fycmlvci5oZWlnaHQpO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZXlcIjtcclxuICBjdHgubGluZVdpZHRoID0gXCI3XCI7XHJcbiAgY3R4LnN0cm9rZVJlY3Qod2Fycmlvci54LCB3YXJyaW9yLnksIHdhcnJpb3Iud2lkdGgsIHdhcnJpb3IuaGVpZ2h0KTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICBjdHguZm9udCA9IFwiMjNweCBBcmlhbCBCbGFja1wiO1xyXG4gIGN0eC5maWxsVGV4dChcclxuICAgIHdhcnJpb3IudGV4dCxcclxuICAgIHdhcnJpb3IueCArIDEwLFxyXG4gICAgd2Fycmlvci55ICsgd2Fycmlvci5oZWlnaHQgLyAyICsgNVxyXG4gICk7XHJcblxyXG4gIC8qKiBNYWdlICovXHJcbiAgY3R4LmZpbGxTdHlsZSA9IG1hZ2UuYmFja2dyb3VuZENvbG9yO1xyXG4gIGN0eC5maWxsUmVjdChtYWdlLngsIG1hZ2UueSwgbWFnZS53aWR0aCwgbWFnZS5oZWlnaHQpO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZXlcIjtcclxuICBjdHgubGluZVdpZHRoID0gXCI3XCI7XHJcbiAgY3R4LnN0cm9rZVJlY3QobWFnZS54LCBtYWdlLnksIG1hZ2Uud2lkdGgsIG1hZ2UuaGVpZ2h0KTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICBjdHguZm9udCA9IFwiMjNweCBBcmlhbCBCbGFja1wiO1xyXG4gIGN0eC5maWxsVGV4dChtYWdlLnRleHQsIG1hZ2UueCArIDEwLCBtYWdlLnkgKyBtYWdlLmhlaWdodCAvIDIgKyA1KTtcclxuXHJcbiAgLyoqIENhbmNlbCAqL1xyXG4gIGN0eC5maWxsU3R5bGUgPSBjYW5jZWwuYmFja2dyb3VuZENvbG9yO1xyXG4gIGN0eC5maWxsUmVjdChjYW5jZWwueCwgY2FuY2VsLnksIGNhbmNlbC53aWR0aCwgY2FuY2VsLmhlaWdodCk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JleVwiO1xyXG4gIGN0eC5saW5lV2lkdGggPSBcIjdcIjtcclxuICBjdHguc3Ryb2tlUmVjdChjYW5jZWwueCwgY2FuY2VsLnksIGNhbmNlbC53aWR0aCwgY2FuY2VsLmhlaWdodCk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgY3R4LmZvbnQgPSBcIjIzcHggQXJpYWwgQmxhY2tcIjtcclxuICBjdHguZmlsbFRleHQoY2FuY2VsLnRleHQsIGNhbmNlbC54ICsgMTAsIGNhbmNlbC55ICsgY2FuY2VsLmhlaWdodCAvIDIgKyA1KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBY3RpdmF0ZSBIb3ZlcmluZ1xyXG4gKi9cclxuXHJcbmFjdGl2YXRlSG92ZXJpbmcoXHJcbiAgKCkgPT4ge1xyXG4gICAgbmF2aWdhdGlvbk1lbnUoXCJjaG9zZUNhcmFjdGVyXCIsIGNob3NlQ2FyYWN0ZXJTY3JlZW4sIFwiY2hvc2VDYXJhY3RlclwiKTtcclxuICB9LFxyXG4gIHdhcnJpb3IsXHJcbiAgbWFnZSxcclxuICBjYW5jZWxcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBBY3RpdmF0ZSBDbGlja1xyXG4gKi9cclxuXHJcbmNob3NlTWVudSgoKSA9PiB7XHJcbiAgbmF2aWdhdGlvbk1lbnUoXCJjaG9zZUNhcmFjdGVyXCIsIGNob3NlQ2FyYWN0ZXJTY3JlZW4sIFwiY2hvc2VDYXJhY3RlclwiKTtcclxufSwgd2Fycmlvcik7XHJcblxyXG5jaG9zZU1lbnUoKCkgPT4ge1xyXG4gIG5hdmlnYXRpb25NZW51KFwiY2hvc2VDYXJhY3RlclwiLCBjaG9zZUNhcmFjdGVyU2NyZWVuLCBcImNob3NlQ2FyYWN0ZXJcIik7XHJcbn0sIG1hZ2UpO1xyXG5cclxuY2hvc2VNZW51KCgpID0+IHtcclxuICBuYXZpZ2F0aW9uTWVudShcImNob3NlQ2FyYWN0ZXJcIiwgcGxheVNjcmVlbiwgXCJJbmdhbWVcIik7XHJcbn0sIGNhbmNlbCk7XHJcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnV0dG9ucyB9IGZyb20gXCIuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnVcIjtcclxuXHJcbmltcG9ydCB2ZXJzaW9uIGZyb20gXCIuLi8uLi9wYWNrYWdlLmpzb25cIjtcclxuaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi4vY29uc3QvY29uc3RcIjtcclxuXHJcbi8qKlxyXG4gKiBQbGF5IEJ1dHRvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBsYXlCdXR0b24gPSBjcmVhdGVCdXR0b25zKFxyXG4gIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXHJcbiAgY2FudmFzLmhlaWdodCAvIDIgLSAxMDAsXHJcbiAgMjAwLFxyXG4gIDUwLFxyXG4gIFwiUGxheSB0aGUgZ2FtZVwiLFxyXG4gIFwid2hpdGVcIlxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgQnV0dG9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgb3B0aW9uQnV0dG9uID0gY3JlYXRlQnV0dG9ucyhcclxuICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxyXG4gIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjUsXHJcbiAgMjAwLFxyXG4gIDUwLFxyXG4gIFwiT3B0aW9uc1wiLFxyXG4gIFwid2hpdGVcIlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgR2FtZSBWZXJzaW9uXHJcbiAgICovXHJcbiAgY29uc3QgZ2FtZVZlcnNpb24gPSBcIlYgXCIgKyB2ZXJzaW9uLnZlcnNpb247XHJcblxyXG4gIC8vIERyYXcgVmVyc2lvbiBpbiBjYW52YXMgLy9cclxuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICBjdHguZm9udCA9IFwiMTVweCBBcmlhbCBibGFja1wiO1xyXG4gIGN0eC5maWxsVGV4dChnYW1lVmVyc2lvbiwgNTAsIDUwKTtcclxuXHJcbiAgLyoqUGxheSAqL1xyXG4gIGN0eC5maWxsU3R5bGUgPSBwbGF5QnV0dG9uLmJhY2tncm91bmRDb2xvcjtcclxuICBjdHguZmlsbFJlY3QocGxheUJ1dHRvbi54LCBwbGF5QnV0dG9uLnksIHBsYXlCdXR0b24ud2lkdGgsIHBsYXlCdXR0b24uaGVpZ2h0KTtcclxuXHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJncmV5XCI7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IFwiN1wiO1xyXG4gIGN0eC5zdHJva2VSZWN0KFxyXG4gICAgcGxheUJ1dHRvbi54LFxyXG4gICAgcGxheUJ1dHRvbi55LFxyXG4gICAgcGxheUJ1dHRvbi53aWR0aCxcclxuICAgIHBsYXlCdXR0b24uaGVpZ2h0XHJcbiAgKTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICBjdHguZm9udCA9IFwiMjNweCBBcmlhbCBCbGFja1wiO1xyXG4gIGN0eC5maWxsVGV4dChcclxuICAgIHBsYXlCdXR0b24udGV4dCxcclxuICAgIHBsYXlCdXR0b24ueCArIDEwLFxyXG4gICAgcGxheUJ1dHRvbi55ICsgcGxheUJ1dHRvbi5oZWlnaHQgLyAyICsgNVxyXG4gICk7XHJcblxyXG4gIC8qKk9wdGlvbnMgKi9cclxuICBjdHguZmlsbFN0eWxlID0gb3B0aW9uQnV0dG9uLmJhY2tncm91bmRDb2xvcjtcclxuICBjdHguZmlsbFJlY3QoXHJcbiAgICBvcHRpb25CdXR0b24ueCxcclxuICAgIG9wdGlvbkJ1dHRvbi55LFxyXG4gICAgb3B0aW9uQnV0dG9uLndpZHRoLFxyXG4gICAgb3B0aW9uQnV0dG9uLmhlaWdodFxyXG4gICk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JleVwiO1xyXG4gIGN0eC5saW5lV2lkdGggPSBcIjdcIjtcclxuICBjdHguc3Ryb2tlUmVjdChcclxuICAgIG9wdGlvbkJ1dHRvbi54LFxyXG4gICAgb3B0aW9uQnV0dG9uLnksXHJcbiAgICBvcHRpb25CdXR0b24ud2lkdGgsXHJcbiAgICBvcHRpb25CdXR0b24uaGVpZ2h0XHJcbiAgKTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICBjdHguZm9udCA9IFwiMjNweCBBcmlhbCBCbGFja1wiO1xyXG4gIGN0eC5maWxsVGV4dChcclxuICAgIG9wdGlvbkJ1dHRvbi50ZXh0LFxyXG4gICAgb3B0aW9uQnV0dG9uLnggKyA1MCxcclxuICAgIG9wdGlvbkJ1dHRvbi55ICsgb3B0aW9uQnV0dG9uLmhlaWdodCAvIDIgKyA1XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi4vLi4vY29uc3QvY29uc3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uTWVudSA9IChhY3R1YWxTdGF0ZSwgc2NyZWVuTG9hZGVkLCBzdGF0ZUxvYWRlZCkgPT4ge1xyXG4gIGlmIChTVEFURS5nZXRUaXRsZSgpID09PSBhY3R1YWxTdGF0ZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChzdWNjZXNzLCBlcnJvcikgPT4ge1xyXG4gICAgICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gYWN0dWFsU3RhdGUpIHtcclxuICAgICAgICBzdWNjZXNzKCgpID0+IHNjcmVlbkxvYWRlZCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlcnJvcihjb25zb2xlLmxvZyhcIkVycm9yLCBXcm9uZyBTVEFURSBUaXRsZVwiKSk7XHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gYWN0dWFsU3RhdGUpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBTVEFURS5zZXRUaXRsZShzdGF0ZUxvYWRlZCk7XHJcbiAgICAgICAgICBzY3JlZW5Mb2FkZWQoKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICAgIDUwO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCwgY3JlYXRlQ2FudmFzIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXNcIjtcclxuaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi4vY29uc3QvY29uc3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnV0dG9ucyB9IGZyb20gXCIuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnVcIjtcclxuaW1wb3J0IHsgYWN0aXZhdGVIb3ZlcmluZyB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZ1wiO1xyXG5pbXBvcnQgeyBuYXZpZ2F0aW9uTWVudSB9IGZyb20gXCIuL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51XCI7XHJcbmltcG9ydCB7IGNob3NlTWVudSB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnVcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gXCIuL21haW5NZW51XCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlc29sdXRpb24gQnV0dG9uXHJcbiAqL1xyXG5cclxuY29uc3QgcmVzb2x1dGlvbiA9IGNyZWF0ZUJ1dHRvbnMoXHJcbiAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcclxuICBjYW52YXMuaGVpZ2h0IC8gMiAtIDEwMCxcclxuICAyMDAsXHJcbiAgNTAsXHJcbiAgXCJSZXNvbHV0aW9uXCIsXHJcbiAgXCJ3aGl0ZVwiXHJcbik7XHJcblxyXG4vKipcclxuICogU291bmQgQnV0dG9uXHJcbiAqL1xyXG5cclxuY29uc3QgY2FuY2VsID0gY3JlYXRlQnV0dG9ucyhcclxuICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxyXG4gIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjUsXHJcbiAgMjAwLFxyXG4gIDUwLFxyXG4gIFwiQ2FuY2VsXCIsXHJcbiAgXCJ3aGl0ZVwiXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3Qgb3B0aW9uU2NyZWVuID0gKCkgPT4ge1xyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSBvbGQgY29tcG9uZW50c1xyXG4gICAqL1xyXG4gIGNyZWF0ZUNhbnZhcygpO1xyXG5cclxuICAvKiogU2V0IFN0YXRlICovXHJcbiAgU1RBVEUuc2V0VGl0bGUoXCJPcHRpb25zXCIpO1xyXG5cclxuICAvKiogQ3JlYXRlIENhcmFjdGVyICovXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHJlc29sdXRpb24uYmFja2dyb3VuZENvbG9yO1xyXG4gIGN0eC5maWxsUmVjdChyZXNvbHV0aW9uLngsIHJlc29sdXRpb24ueSwgcmVzb2x1dGlvbi53aWR0aCwgcmVzb2x1dGlvbi5oZWlnaHQpO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZXlcIjtcclxuICBjdHgubGluZVdpZHRoID0gXCI3XCI7XHJcbiAgY3R4LnN0cm9rZVJlY3QoXHJcbiAgICByZXNvbHV0aW9uLngsXHJcbiAgICByZXNvbHV0aW9uLnksXHJcbiAgICByZXNvbHV0aW9uLndpZHRoLFxyXG4gICAgcmVzb2x1dGlvbi5oZWlnaHRcclxuICApO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gIGN0eC5mb250ID0gXCIyM3B4IEFyaWFsIEJsYWNrXCI7XHJcbiAgY3R4LmZpbGxUZXh0KFxyXG4gICAgcmVzb2x1dGlvbi50ZXh0LFxyXG4gICAgcmVzb2x1dGlvbi54ICsgMTAsXHJcbiAgICByZXNvbHV0aW9uLnkgKyByZXNvbHV0aW9uLmhlaWdodCAvIDIgKyA1XHJcbiAgKTtcclxuXHJcbiAgLyoqIENhbmNlbCAqL1xyXG4gIGN0eC5maWxsU3R5bGUgPSBjYW5jZWwuYmFja2dyb3VuZENvbG9yO1xyXG4gIGN0eC5maWxsUmVjdChjYW5jZWwueCwgY2FuY2VsLnksIGNhbmNlbC53aWR0aCwgY2FuY2VsLmhlaWdodCk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JleVwiO1xyXG4gIGN0eC5saW5lV2lkdGggPSBcIjdcIjtcclxuICBjdHguc3Ryb2tlUmVjdChjYW5jZWwueCwgY2FuY2VsLnksIGNhbmNlbC53aWR0aCwgY2FuY2VsLmhlaWdodCk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgY3R4LmZvbnQgPSBcIjIzcHggQXJpYWwgQmxhY2tcIjtcclxuICBjdHguZmlsbFRleHQoY2FuY2VsLnRleHQsIGNhbmNlbC54ICsgMTAsIGNhbmNlbC55ICsgY2FuY2VsLmhlaWdodCAvIDIgKyA1KTtcclxufTtcclxuXHJcbiAvKipcclxuICAgKiBBY3RpdmF0ZSBIb3ZlcmluZ1xyXG4gICAqL1xyXG5cclxuICBhY3RpdmF0ZUhvdmVyaW5nKFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBuYXZpZ2F0aW9uTWVudShcIk9wdGlvbnNcIiwgb3B0aW9uU2NyZWVuLCBcIk9wdGlvbnNcIik7XHJcbiAgICB9LFxyXG4gICAgcmVzb2x1dGlvbixcclxuICAgIGNhbmNlbFxyXG4gICk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdGl2YXRlIENsaWNrXHJcbiAgICovXHJcblxyXG4gIGNob3NlTWVudShcclxuICAgICgpID0+IHtcclxuICAgICAgbmF2aWdhdGlvbk1lbnUoXCJPcHRpb25zXCIsIGNyZWF0ZU1lbnUsIFwiTWVudVwiKTtcclxuICAgIH0sXHJcbiAgICBjYW5jZWxcclxuICApO1xyXG5cclxuICBjaG9zZU1lbnUoXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIG5hdmlnYXRpb25NZW51KFwiT3B0aW9uc1wiLCBvcHRpb25TY3JlZW4sIFwiT3B0aW9uc1wiKTtcclxuICAgIH0sXHJcbiAgICByZXNvbHV0aW9uXHJcbiAgKTsiLCJpbXBvcnQgeyBjYW52YXMsIGN0eCwgY3JlYXRlQ2FudmFzIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXNcIjtcclxuaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi4vY29uc3QvY29uc3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnV0dG9ucyB9IGZyb20gXCIuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnVcIjtcclxuaW1wb3J0IHsgYWN0aXZhdGVIb3ZlcmluZyB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZ1wiO1xyXG5pbXBvcnQgeyBjaG9zZU1lbnUgfSBmcm9tIFwiLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlQ2xpY2tGb3JNZW51XCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tYWluTWVudVwiO1xyXG5pbXBvcnQgeyBuYXZpZ2F0aW9uTWVudSB9IGZyb20gXCIuL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51XCI7XHJcbmltcG9ydCB7IGNob3NlQ2FyYWN0ZXJTY3JlZW4gfSBmcm9tIFwiLi9jaG9zZUNhcmFjdGVyU2NyZWVuXCI7XHJcblxyXG4vKipcclxuICogY3JlYXRlQ2FyYWN0ZXIgQnV0dG9uXHJcbiAqL1xyXG5cclxuY29uc3QgY3JlYXRlQ2FyYWN0ZXIgPSBjcmVhdGVCdXR0b25zKFxyXG4gIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXHJcbiAgY2FudmFzLmhlaWdodCAvIDIgLSAxMDAsXHJcbiAgMjAwLFxyXG4gIDUwLFxyXG4gIFwiQ2FyYWN0ZXJcIixcclxuICBcIndoaXRlXCJcclxuKTtcclxuXHJcbmNvbnN0IGNhbmNlbCA9IGNyZWF0ZUJ1dHRvbnMoXHJcbiAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcclxuICBjYW52YXMuaGVpZ2h0IC8gMiAtIDI1LFxyXG4gIDIwMCxcclxuICA1MCxcclxuICBcIkNhbmNlbFwiLFxyXG4gIFwid2hpdGVcIlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBsYXlTY3JlZW4gPSAoKSA9PiB7XHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIG9sZCBjb21wb25lbnRzXHJcbiAgICovXHJcbiAgY3JlYXRlQ2FudmFzKCk7XHJcblxyXG4gIC8qKiBTZXQgU3RhdGUgKi9cclxuICBTVEFURS5zZXRUaXRsZShcIkluZ2FtZVwiKTtcclxuXHJcbiAgLyoqIENyZWF0ZSBDYXJhY3RlciAqL1xyXG4gIGN0eC5maWxsU3R5bGUgPSBjcmVhdGVDYXJhY3Rlci5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgY3R4LmZpbGxSZWN0KFxyXG4gICAgY3JlYXRlQ2FyYWN0ZXIueCxcclxuICAgIGNyZWF0ZUNhcmFjdGVyLnksXHJcbiAgICBjcmVhdGVDYXJhY3Rlci53aWR0aCxcclxuICAgIGNyZWF0ZUNhcmFjdGVyLmhlaWdodFxyXG4gICk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JleVwiO1xyXG4gIGN0eC5saW5lV2lkdGggPSBcIjdcIjtcclxuICBjdHguc3Ryb2tlUmVjdChcclxuICAgIGNyZWF0ZUNhcmFjdGVyLngsXHJcbiAgICBjcmVhdGVDYXJhY3Rlci55LFxyXG4gICAgY3JlYXRlQ2FyYWN0ZXIud2lkdGgsXHJcbiAgICBjcmVhdGVDYXJhY3Rlci5oZWlnaHRcclxuICApO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gIGN0eC5mb250ID0gXCIyM3B4IEFyaWFsIEJsYWNrXCI7XHJcbiAgY3R4LmZpbGxUZXh0KFxyXG4gICAgY3JlYXRlQ2FyYWN0ZXIudGV4dCxcclxuICAgIGNyZWF0ZUNhcmFjdGVyLnggKyAxMCxcclxuICAgIGNyZWF0ZUNhcmFjdGVyLnkgKyBjcmVhdGVDYXJhY3Rlci5oZWlnaHQgLyAyICsgNVxyXG4gICk7XHJcblxyXG4gIC8qKiBDYW5jZWwgKi9cclxuICBjdHguZmlsbFN0eWxlID0gY2FuY2VsLmJhY2tncm91bmRDb2xvcjtcclxuICBjdHguZmlsbFJlY3QoY2FuY2VsLngsIGNhbmNlbC55LCBjYW5jZWwud2lkdGgsIGNhbmNlbC5oZWlnaHQpO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZXlcIjtcclxuICBjdHgubGluZVdpZHRoID0gXCI3XCI7XHJcbiAgY3R4LnN0cm9rZVJlY3QoY2FuY2VsLngsIGNhbmNlbC55LCBjYW5jZWwud2lkdGgsIGNhbmNlbC5oZWlnaHQpO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gIGN0eC5mb250ID0gXCIyM3B4IEFyaWFsIEJsYWNrXCI7XHJcbiAgY3R4LmZpbGxUZXh0KGNhbmNlbC50ZXh0LCBjYW5jZWwueCArIDEwLCBjYW5jZWwueSArIGNhbmNlbC5oZWlnaHQgLyAyICsgNSk7XHJcbn07XHJcblxyXG4vKipcclxuICAgKiBBY3RpdmF0ZSBIb3ZlcmluZ1xyXG4gICAqL1xyXG5cclxuICBhY3RpdmF0ZUhvdmVyaW5nKFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBuYXZpZ2F0aW9uTWVudShcIkluZ2FtZVwiLCBwbGF5U2NyZWVuLCBcIkluZ2FtZVwiKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVDYXJhY3RlcixcclxuICAgIGNhbmNlbFxyXG4gICk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdGl2YXRlIENsaWNrXHJcbiAgICovXHJcblxyXG4gIGNob3NlTWVudShcclxuICAgICgpID0+IHtcclxuICAgICAgbmF2aWdhdGlvbk1lbnUoXCJJbmdhbWVcIiwgY2hvc2VDYXJhY3RlclNjcmVlbiwgXCJjaG9zZUNhcmFjdGVyXCIpO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUNhcmFjdGVyXHJcbiAgKTtcclxuXHJcbiAgY2hvc2VNZW51KFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBuYXZpZ2F0aW9uTWVudShcIkluZ2FtZVwiLCBjcmVhdGVNZW51LCBcIk1lbnVcIik7XHJcbiAgICB9LFxyXG4gICAgY2FuY2VsXHJcbiAgKTsiXSwic291cmNlUm9vdCI6IiJ9