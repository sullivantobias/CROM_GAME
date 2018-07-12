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
      if (Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["coorButtons"])(e, button)) {
       hrefButton();
      }

      if (Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["coorButtons"])(e, button2)) {
        hrefButton2();
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





const activateHovering = (button, button2, reloadActualMenu) => {
    /**
     * Hover event
     */

    _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].addEventListener("mousemove", e => {
      e.preventDefault();
      if (Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_1__["coorButtons"])(e, button)) {
        button.backgroundColor = "red";
        //console.log("Play");
      } else {
        button.backgroundColor = "white";
      }

      if (Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_1__["coorButtons"])(e, button2)) {
        button2.backgroundColor = "red";
      } else {
        button2.backgroundColor = "white";
      }
      reloadActualMenu ? reloadActualMenu() : console.log("Missing Function Parameter");
    });
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
 * Call activateHovering() to change the color while hovering buttons
 */

Object(_designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__["activateHovering"])(resolution, cancel, () =>
  Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])("Options", optionScreen, "Options")
);


/**
 * Call choseMenu(),to trigger the click on the chosen button
 */

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(
  resolution,
  cancel,
  () => Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])("Options", optionScreen, "Options"), // just for the test
  () => Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])("Options", _mainMenu__WEBPACK_IMPORTED_MODULE_6__["createMenu"], "Menu")
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
 * Call activateHovering() to change the color while hovering buttons
 */

Object(_designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__["activateHovering"])(createCaracter, cancel, () =>
  Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_6__["navigationMenu"])("Ingame", playScreen, "Ingame")
);

/**
 * Call choseMenu(),to trigger the click on the chosen button
 */

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_4__["choseMenu"])(
  createCaracter,
  cancel,
  () => Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_6__["navigationMenu"])("Ingame", playScreen, "Ingame"), // just for the test
  () => Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_6__["navigationMenu"])("Ingame", _mainMenu__WEBPACK_IMPORTED_MODULE_5__["createMenu"], "Menu")
);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0L2NvbnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUhvdmVyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9tYWluTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9uYXZpZ2F0aW9uTWVudS9uYXZpZ2F0aW9uTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9vcHRpb25zU2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL3BsYXlTY3JlZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGc0I7QUFDTjtBQUNRO0FBQ0c7QUFDUDtBQUNDO0FBQ0k7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxyXG4gKiBEZWNsYXJpbmcgdXNlZnVsIHZhcmlhYmxlc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBsZXQgU1RBVEUgPSB7XHJcbiAgaWQ6IDEsXHJcblxyXG4gIFRpdGxlOiBcIk1lbnVcIixcclxuXHJcbiAgc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgIHRoaXMuVGl0bGUgPSBuZXdUaXRsZTtcclxuICB9LFxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLlRpdGxlO1xyXG4gIH1cclxufTtcclxuIiwiLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0geFxyXG4gKiBAcGFyYW0geyp9IHlcclxuICogQHBhcmFtIHsqfSB3aWR0aFxyXG4gKiBAcGFyYW0geyp9IGhlaWdodFxyXG4gKiBAcGFyYW0geyp9IHRleHRcclxuICogQHBhcmFtIHsqfSBiYWNrZ3JvdW5kQ29sb3JcclxuICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlIEJ1dHRvbnMgYW5kIHJldHVybiBwb3NpdGlvblxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b25zID0gKHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHQsIGJhY2tncm91bmRDb2xvcikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiB4LFxyXG4gICAgeTogeSxcclxuICAgIHdpZHRoOiB3aWR0aCxcclxuICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgdGV4dDogdGV4dCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb29yQnV0dG9ucyA9IChlLCBvYmplY3QpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgZS5jbGllbnRYID4gb2JqZWN0LnggJiZcclxuICAgIGUuY2xpZW50WCA8IG9iamVjdC54ICsgb2JqZWN0LndpZHRoICsgMTQgJiZcclxuICAgIChlLmNsaWVudFkgPiBvYmplY3QueSAmJiBlLmNsaWVudFkgPCBvYmplY3QueSArIChvYmplY3QuaGVpZ2h0ICsgMTQpKVxyXG4gICk7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBHZXQgQ2FudmFzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZVdpbmRvd1wiKTtcclxuZXhwb3J0IGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQ2FudmFzID0gKCkgPT4ge1xyXG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDYW52YXMgfSBmcm9tIFwiLi9jcmVhdGVDYW52YXNcIjtcclxuXHJcbmltcG9ydCB7IFNUQVRFIH0gZnJvbSBcIi4uL2NvbnN0L2NvbnN0XCI7XHJcbmltcG9ydCB7IGNob3NlTWVudSB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnVcIjtcclxuaW1wb3J0IHsgYWN0aXZhdGVIb3ZlcmluZyB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZ1wiO1xyXG5pbXBvcnQgeyBwbGF5U2NyZWVuIH0gZnJvbSBcIi4uL3NjcmVlbnMvcGxheVNjcmVlblwiO1xyXG5pbXBvcnQgeyBvcHRpb25TY3JlZW4gfSBmcm9tIFwiLi4vc2NyZWVucy9vcHRpb25zU2NyZWVuXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnUsIHBsYXlCdXR0b24sIG9wdGlvbkJ1dHRvbiB9IGZyb20gXCIuLi9zY3JlZW5zL21haW5NZW51XCI7XHJcblxyXG5pZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gXCJNZW51XCIpIHtcclxuICAvKipcclxuICAgKiBDcmVhdGUgdGhlIGNhbnZhc1xyXG4gICAqL1xyXG4gIGNyZWF0ZUNhbnZhcygpO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgdGhlIG1haW4gTWVudVxyXG4gICAqL1xyXG4gIGlmIChTVEFURS5nZXRUaXRsZSgpID09PSBcIk1lbnVcIikgY3JlYXRlTWVudSgpO1xyXG5cclxuICAvKipcclxuICAgKiBDYWxsIGFjdGl2YXRlSG92ZXJpbmcoKSB0byBjaGFuZ2UgdGhlIGNvbG9yIHdoaWxlIGhvdmVyaW5nIGJ1dHRvbnNcclxuICAgKi9cclxuICBhY3RpdmF0ZUhvdmVyaW5nKHBsYXlCdXR0b24sIG9wdGlvbkJ1dHRvbiwgKCkgPT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBTdGF0ZW1lbnQgdG8gYXZvaWQgY2FsbGluZyByZWxvYWRTY3JlZW4gaW4gdGhlIHByZXYgb3IgbmV4dCBGcmFtZVxyXG4gICAgICovXHJcbiAgICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gXCJNZW51XCIpIGNyZWF0ZU1lbnUoKTtcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbCBjaG9zZU1lbnUoKSx0byB0cmlnZ2VyIHRoZSBjbGljayBvbiB0aGUgY2hvc2VuIGJ1dHRvblxyXG4gICAqL1xyXG4gIGNob3NlTWVudShcclxuICAgIHBsYXlCdXR0b24sXHJcbiAgICBvcHRpb25CdXR0b24sXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBJZiBTdGF0ZW1lbnQgdG8gYXZvaWQgY2FsbGluZyByZWxvYWRTY3JlZW4gaW4gdGhlIHByZXYgb3IgbmV4dCBGcmFtZVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IFwiTWVudVwiKSBwbGF5U2NyZWVuKCk7XHJcbiAgICB9LFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gXCJNZW51XCIpIG9wdGlvblNjcmVlbigpO1xyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY2FudmFzIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXNcIjtcclxuaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi4vY29uc3QvY29uc3RcIjtcclxuaW1wb3J0IHsgY29vckJ1dHRvbnMgfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51XCI7XHJcblxyXG5leHBvcnQgY29uc3QgY2hvc2VNZW51ID0gKGJ1dHRvbiwgYnV0dG9uMiwgaHJlZkJ1dHRvbiwgaHJlZkJ1dHRvbjIpID0+IHtcclxuICAvKipcclxuICAgKiBDbGljayBFdmVudFxyXG4gICAqIENob29zZSBtZW51IHRvIGNsaWNrXHJcbiAgICovXHJcblxyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChjb29yQnV0dG9ucyhlLCBidXR0b24pKSB7XHJcbiAgICAgICBocmVmQnV0dG9uKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb29yQnV0dG9ucyhlLCBidXR0b24yKSkge1xyXG4gICAgICAgIGhyZWZCdXR0b24yKCk7XHJcbiAgICAgIH1cclxuICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2FudmFzIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXNcIjtcclxuaW1wb3J0IHsgY29vckJ1dHRvbnMgfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51XCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhY3RpdmF0ZUhvdmVyaW5nID0gKGJ1dHRvbiwgYnV0dG9uMiwgcmVsb2FkQWN0dWFsTWVudSkgPT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIb3ZlciBldmVudFxyXG4gICAgICovXHJcblxyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGNvb3JCdXR0b25zKGUsIGJ1dHRvbikpIHtcclxuICAgICAgICBidXR0b24uYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUGxheVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBidXR0b24uYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29vckJ1dHRvbnMoZSwgYnV0dG9uMikpIHtcclxuICAgICAgICBidXR0b24yLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnV0dG9uMi5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIH1cclxuICAgICAgcmVsb2FkQWN0dWFsTWVudSA/IHJlbG9hZEFjdHVhbE1lbnUoKSA6IGNvbnNvbGUubG9nKFwiTWlzc2luZyBGdW5jdGlvbiBQYXJhbWV0ZXJcIik7XHJcbiAgICB9KTtcclxufTtcclxuIiwiXHJcblxyXG4vLyBpbXBvcnQgeyBtYWtlV2FycmlvciB9IGZyb20gXCIuL2NyZWF0ZUNhcmFjdGVyXCI7XHJcbmltcG9ydCAnLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlTWVudSc7XHJcblxyXG5cclxuLypcclxuXHJcbmNvbnN0IGNyZWF0ZVdhcnJpb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dhcnJpb3JcIik7XHJcbmNyZWF0ZVdhcnJpb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gIC8vIENyZWF0aW5nIFRoZSBXYXJyaW9yIC8vXHJcbiAgbWFrZVdhcnJpb3IoKTtcclxufSk7XHJcbiBcclxuKi8iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbnMgfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51XCI7XHJcblxyXG5pbXBvcnQgdmVyc2lvbiBmcm9tIFwiLi4vLi4vcGFja2FnZS5qc29uXCI7XHJcbmltcG9ydCB7IFNUQVRFIH0gZnJvbSBcIi4uL2NvbnN0L2NvbnN0XCI7XHJcblxyXG4vKipcclxuICogUGxheSBCdXR0b25cclxuICovXHJcbmV4cG9ydCBjb25zdCBwbGF5QnV0dG9uID0gY3JlYXRlQnV0dG9ucyhcclxuICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxyXG4gIGNhbnZhcy5oZWlnaHQgLyAyIC0gMTAwLFxyXG4gIDIwMCxcclxuICA1MCxcclxuICBcIlBsYXkgdGhlIGdhbWVcIixcclxuICBcIndoaXRlXCJcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBPcHRpb25zIEJ1dHRvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG9wdGlvbkJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbnMoXHJcbiAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcclxuICBjYW52YXMuaGVpZ2h0IC8gMiAtIDI1LFxyXG4gIDIwMCxcclxuICA1MCxcclxuICBcIk9wdGlvbnNcIixcclxuICBcIndoaXRlXCJcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIEdhbWUgVmVyc2lvblxyXG4gICAqL1xyXG4gIGNvbnN0IGdhbWVWZXJzaW9uID0gXCJWIFwiICsgdmVyc2lvbi52ZXJzaW9uO1xyXG5cclxuICAvLyBEcmF3IFZlcnNpb24gaW4gY2FudmFzIC8vXHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgY3R4LmZvbnQgPSBcIjE1cHggQXJpYWwgYmxhY2tcIjtcclxuICBjdHguZmlsbFRleHQoZ2FtZVZlcnNpb24sIDUwLCA1MCk7XHJcblxyXG4gIC8qKlBsYXkgKi9cclxuICBjdHguZmlsbFN0eWxlID0gcGxheUJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgY3R4LmZpbGxSZWN0KHBsYXlCdXR0b24ueCwgcGxheUJ1dHRvbi55LCBwbGF5QnV0dG9uLndpZHRoLCBwbGF5QnV0dG9uLmhlaWdodCk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JleVwiO1xyXG4gIGN0eC5saW5lV2lkdGggPSBcIjdcIjtcclxuICBjdHguc3Ryb2tlUmVjdChcclxuICAgIHBsYXlCdXR0b24ueCxcclxuICAgIHBsYXlCdXR0b24ueSxcclxuICAgIHBsYXlCdXR0b24ud2lkdGgsXHJcbiAgICBwbGF5QnV0dG9uLmhlaWdodFxyXG4gICk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgY3R4LmZvbnQgPSBcIjIzcHggQXJpYWwgQmxhY2tcIjtcclxuICBjdHguZmlsbFRleHQoXHJcbiAgICBwbGF5QnV0dG9uLnRleHQsXHJcbiAgICBwbGF5QnV0dG9uLnggKyAxMCxcclxuICAgIHBsYXlCdXR0b24ueSArIHBsYXlCdXR0b24uaGVpZ2h0IC8gMiArIDVcclxuICApO1xyXG5cclxuICAvKipPcHRpb25zICovXHJcbiAgY3R4LmZpbGxTdHlsZSA9IG9wdGlvbkJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgY3R4LmZpbGxSZWN0KFxyXG4gICAgb3B0aW9uQnV0dG9uLngsXHJcbiAgICBvcHRpb25CdXR0b24ueSxcclxuICAgIG9wdGlvbkJ1dHRvbi53aWR0aCxcclxuICAgIG9wdGlvbkJ1dHRvbi5oZWlnaHRcclxuICApO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZXlcIjtcclxuICBjdHgubGluZVdpZHRoID0gXCI3XCI7XHJcbiAgY3R4LnN0cm9rZVJlY3QoXHJcbiAgICBvcHRpb25CdXR0b24ueCxcclxuICAgIG9wdGlvbkJ1dHRvbi55LFxyXG4gICAgb3B0aW9uQnV0dG9uLndpZHRoLFxyXG4gICAgb3B0aW9uQnV0dG9uLmhlaWdodFxyXG4gICk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgY3R4LmZvbnQgPSBcIjIzcHggQXJpYWwgQmxhY2tcIjtcclxuICBjdHguZmlsbFRleHQoXHJcbiAgICBvcHRpb25CdXR0b24udGV4dCxcclxuICAgIG9wdGlvbkJ1dHRvbi54ICsgNTAsXHJcbiAgICBvcHRpb25CdXR0b24ueSArIG9wdGlvbkJ1dHRvbi5oZWlnaHQgLyAyICsgNVxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IFNUQVRFIH0gZnJvbSBcIi4uLy4uL2NvbnN0L2NvbnN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbmF2aWdhdGlvbk1lbnUgPSAoYWN0dWFsU3RhdGUsIHNjcmVlbkxvYWRlZCwgc3RhdGVMb2FkZWQpID0+IHtcclxuICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gYWN0dWFsU3RhdGUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoc3VjY2VzcywgZXJyb3IpID0+IHtcclxuICAgICAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IGFjdHVhbFN0YXRlKSB7XHJcbiAgICAgICAgc3VjY2VzcygoKSA9PiBzY3JlZW5Mb2FkZWQoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXJyb3IoY29uc29sZS5sb2coXCJFcnJvciwgV3JvbmcgU1RBVEUgVGl0bGVcIikpO1xyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IGFjdHVhbFN0YXRlKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgU1RBVEUuc2V0VGl0bGUoc3RhdGVMb2FkZWQpO1xyXG4gICAgICAgICAgc2NyZWVuTG9hZGVkKCk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgICA1MDtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhc1wiO1xyXG5pbXBvcnQgeyBTVEFURSB9IGZyb20gXCIuLi9jb25zdC9jb25zdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVCdXR0b25zIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudVwiO1xyXG5pbXBvcnQgeyBhY3RpdmF0ZUhvdmVyaW5nIH0gZnJvbSBcIi4uL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUhvdmVyaW5nXCI7XHJcbmltcG9ydCB7IG5hdmlnYXRpb25NZW51IH0gZnJvbSBcIi4vbmF2aWdhdGlvbk1lbnUvbmF2aWdhdGlvbk1lbnVcIjtcclxuaW1wb3J0IHsgY2hvc2VNZW51IH0gZnJvbSBcIi4uL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUNsaWNrRm9yTWVudVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vbWFpbk1lbnVcIjtcclxuXHJcbi8qKlxyXG4gKiBSZXNvbHV0aW9uIEJ1dHRvblxyXG4gKi9cclxuXHJcbmNvbnN0IHJlc29sdXRpb24gPSBjcmVhdGVCdXR0b25zKFxyXG4gIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXHJcbiAgY2FudmFzLmhlaWdodCAvIDIgLSAxMDAsXHJcbiAgMjAwLFxyXG4gIDUwLFxyXG4gIFwiUmVzb2x1dGlvblwiLFxyXG4gIFwid2hpdGVcIlxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIFNvdW5kIEJ1dHRvblxyXG4gKi9cclxuXHJcbmNvbnN0IGNhbmNlbCA9IGNyZWF0ZUJ1dHRvbnMoXHJcbiAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcclxuICBjYW52YXMuaGVpZ2h0IC8gMiAtIDI1LFxyXG4gIDIwMCxcclxuICA1MCxcclxuICBcIkNhbmNlbFwiLFxyXG4gIFwid2hpdGVcIlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9wdGlvblNjcmVlbiA9ICgpID0+IHtcclxuICBTVEFURS5zZXRUaXRsZShcIk9wdGlvbnNcIik7XHJcblxyXG4gIC8qKiBDcmVhdGUgQ2FyYWN0ZXIgKi9cclxuICBjdHguZmlsbFN0eWxlID0gcmVzb2x1dGlvbi5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgY3R4LmZpbGxSZWN0KHJlc29sdXRpb24ueCwgcmVzb2x1dGlvbi55LCByZXNvbHV0aW9uLndpZHRoLCByZXNvbHV0aW9uLmhlaWdodCk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JleVwiO1xyXG4gIGN0eC5saW5lV2lkdGggPSBcIjdcIjtcclxuICBjdHguc3Ryb2tlUmVjdChcclxuICAgIHJlc29sdXRpb24ueCxcclxuICAgIHJlc29sdXRpb24ueSxcclxuICAgIHJlc29sdXRpb24ud2lkdGgsXHJcbiAgICByZXNvbHV0aW9uLmhlaWdodFxyXG4gICk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgY3R4LmZvbnQgPSBcIjIzcHggQXJpYWwgQmxhY2tcIjtcclxuICBjdHguZmlsbFRleHQoXHJcbiAgICByZXNvbHV0aW9uLnRleHQsXHJcbiAgICByZXNvbHV0aW9uLnggKyAxMCxcclxuICAgIHJlc29sdXRpb24ueSArIHJlc29sdXRpb24uaGVpZ2h0IC8gMiArIDVcclxuICApO1xyXG5cclxuICAvKiogQ2FuY2VsICovXHJcbiAgY3R4LmZpbGxTdHlsZSA9IGNhbmNlbC5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgY3R4LmZpbGxSZWN0KGNhbmNlbC54LCBjYW5jZWwueSwgY2FuY2VsLndpZHRoLCBjYW5jZWwuaGVpZ2h0KTtcclxuXHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJncmV5XCI7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IFwiN1wiO1xyXG4gIGN0eC5zdHJva2VSZWN0KGNhbmNlbC54LCBjYW5jZWwueSwgY2FuY2VsLndpZHRoLCBjYW5jZWwuaGVpZ2h0KTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICBjdHguZm9udCA9IFwiMjNweCBBcmlhbCBCbGFja1wiO1xyXG4gIGN0eC5maWxsVGV4dChjYW5jZWwudGV4dCwgY2FuY2VsLnggKyAxMCwgY2FuY2VsLnkgKyBjYW5jZWwuaGVpZ2h0IC8gMiArIDUpO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDYWxsIGFjdGl2YXRlSG92ZXJpbmcoKSB0byBjaGFuZ2UgdGhlIGNvbG9yIHdoaWxlIGhvdmVyaW5nIGJ1dHRvbnNcclxuICovXHJcblxyXG5hY3RpdmF0ZUhvdmVyaW5nKHJlc29sdXRpb24sIGNhbmNlbCwgKCkgPT5cclxuICBuYXZpZ2F0aW9uTWVudShcIk9wdGlvbnNcIiwgb3B0aW9uU2NyZWVuLCBcIk9wdGlvbnNcIilcclxuKTtcclxuXHJcblxyXG4vKipcclxuICogQ2FsbCBjaG9zZU1lbnUoKSx0byB0cmlnZ2VyIHRoZSBjbGljayBvbiB0aGUgY2hvc2VuIGJ1dHRvblxyXG4gKi9cclxuXHJcbmNob3NlTWVudShcclxuICByZXNvbHV0aW9uLFxyXG4gIGNhbmNlbCxcclxuICAoKSA9PiBuYXZpZ2F0aW9uTWVudShcIk9wdGlvbnNcIiwgb3B0aW9uU2NyZWVuLCBcIk9wdGlvbnNcIiksIC8vIGp1c3QgZm9yIHRoZSB0ZXN0XHJcbiAgKCkgPT4gbmF2aWdhdGlvbk1lbnUoXCJPcHRpb25zXCIsIGNyZWF0ZU1lbnUsIFwiTWVudVwiKVxyXG4pO1xyXG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzXCI7XHJcbmltcG9ydCB7IFNUQVRFIH0gZnJvbSBcIi4uL2NvbnN0L2NvbnN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbnMgfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51XCI7XHJcbmltcG9ydCB7IGFjdGl2YXRlSG92ZXJpbmcgfSBmcm9tIFwiLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlSG92ZXJpbmdcIjtcclxuaW1wb3J0IHsgY2hvc2VNZW51IH0gZnJvbSBcIi4uL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUNsaWNrRm9yTWVudVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vbWFpbk1lbnVcIjtcclxuaW1wb3J0IHsgbmF2aWdhdGlvbk1lbnUgfSBmcm9tIFwiLi9uYXZpZ2F0aW9uTWVudS9uYXZpZ2F0aW9uTWVudVwiO1xyXG5cclxuLyoqXHJcbiAqIGNyZWF0ZUNhcmFjdGVyIEJ1dHRvblxyXG4gKi9cclxuXHJcbmNvbnN0IGNyZWF0ZUNhcmFjdGVyID0gY3JlYXRlQnV0dG9ucyhcclxuICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxyXG4gIGNhbnZhcy5oZWlnaHQgLyAyIC0gMTAwLFxyXG4gIDIwMCxcclxuICA1MCxcclxuICBcIkNhcmFjdGVyXCIsXHJcbiAgXCJ3aGl0ZVwiXHJcbik7XHJcblxyXG5jb25zdCBjYW5jZWwgPSBjcmVhdGVCdXR0b25zKFxyXG4gIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXHJcbiAgY2FudmFzLmhlaWdodCAvIDIgLSAyNSxcclxuICAyMDAsXHJcbiAgNTAsXHJcbiAgXCJDYW5jZWxcIixcclxuICBcIndoaXRlXCJcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwbGF5U2NyZWVuID0gKCkgPT4ge1xyXG4gIFNUQVRFLnNldFRpdGxlKFwiSW5nYW1lXCIpO1xyXG5cclxuICAvKiogQ3JlYXRlIENhcmFjdGVyICovXHJcbiAgY3R4LmZpbGxTdHlsZSA9IGNyZWF0ZUNhcmFjdGVyLmJhY2tncm91bmRDb2xvcjtcclxuICBjdHguZmlsbFJlY3QoXHJcbiAgICBjcmVhdGVDYXJhY3Rlci54LFxyXG4gICAgY3JlYXRlQ2FyYWN0ZXIueSxcclxuICAgIGNyZWF0ZUNhcmFjdGVyLndpZHRoLFxyXG4gICAgY3JlYXRlQ2FyYWN0ZXIuaGVpZ2h0XHJcbiAgKTtcclxuXHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJncmV5XCI7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IFwiN1wiO1xyXG4gIGN0eC5zdHJva2VSZWN0KFxyXG4gICAgY3JlYXRlQ2FyYWN0ZXIueCxcclxuICAgIGNyZWF0ZUNhcmFjdGVyLnksXHJcbiAgICBjcmVhdGVDYXJhY3Rlci53aWR0aCxcclxuICAgIGNyZWF0ZUNhcmFjdGVyLmhlaWdodFxyXG4gICk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgY3R4LmZvbnQgPSBcIjIzcHggQXJpYWwgQmxhY2tcIjtcclxuICBjdHguZmlsbFRleHQoXHJcbiAgICBjcmVhdGVDYXJhY3Rlci50ZXh0LFxyXG4gICAgY3JlYXRlQ2FyYWN0ZXIueCArIDEwLFxyXG4gICAgY3JlYXRlQ2FyYWN0ZXIueSArIGNyZWF0ZUNhcmFjdGVyLmhlaWdodCAvIDIgKyA1XHJcbiAgKTtcclxuXHJcbiAgLyoqIENhbmNlbCAqL1xyXG4gIGN0eC5maWxsU3R5bGUgPSBjYW5jZWwuYmFja2dyb3VuZENvbG9yO1xyXG4gIGN0eC5maWxsUmVjdChjYW5jZWwueCwgY2FuY2VsLnksIGNhbmNlbC53aWR0aCwgY2FuY2VsLmhlaWdodCk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JleVwiO1xyXG4gIGN0eC5saW5lV2lkdGggPSBcIjdcIjtcclxuICBjdHguc3Ryb2tlUmVjdChjYW5jZWwueCwgY2FuY2VsLnksIGNhbmNlbC53aWR0aCwgY2FuY2VsLmhlaWdodCk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgY3R4LmZvbnQgPSBcIjIzcHggQXJpYWwgQmxhY2tcIjtcclxuICBjdHguZmlsbFRleHQoY2FuY2VsLnRleHQsIGNhbmNlbC54ICsgMTAsIGNhbmNlbC55ICsgY2FuY2VsLmhlaWdodCAvIDIgKyA1KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDYWxsIGFjdGl2YXRlSG92ZXJpbmcoKSB0byBjaGFuZ2UgdGhlIGNvbG9yIHdoaWxlIGhvdmVyaW5nIGJ1dHRvbnNcclxuICovXHJcblxyXG5hY3RpdmF0ZUhvdmVyaW5nKGNyZWF0ZUNhcmFjdGVyLCBjYW5jZWwsICgpID0+XHJcbiAgbmF2aWdhdGlvbk1lbnUoXCJJbmdhbWVcIiwgcGxheVNjcmVlbiwgXCJJbmdhbWVcIilcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBDYWxsIGNob3NlTWVudSgpLHRvIHRyaWdnZXIgdGhlIGNsaWNrIG9uIHRoZSBjaG9zZW4gYnV0dG9uXHJcbiAqL1xyXG5cclxuY2hvc2VNZW51KFxyXG4gIGNyZWF0ZUNhcmFjdGVyLFxyXG4gIGNhbmNlbCxcclxuICAoKSA9PiBuYXZpZ2F0aW9uTWVudShcIkluZ2FtZVwiLCBwbGF5U2NyZWVuLCBcIkluZ2FtZVwiKSwgLy8ganVzdCBmb3IgdGhlIHRlc3RcclxuICAoKSA9PiBuYXZpZ2F0aW9uTWVudShcIkluZ2FtZVwiLCBjcmVhdGVNZW51LCBcIk1lbnVcIilcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==