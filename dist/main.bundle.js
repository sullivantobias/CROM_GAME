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
    reloadActualMenu
      ? reloadActualMenu()
      : console.log("Missing Function Parameter");
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

const choseCaracterScreen = () => {
  /**
   * remove old components
   */
  Object(_createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();

  /** Set State */
  _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].setTitle("choseCaracter");

  /** Create Caracter */
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

  /** Cancel */
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = mage.backgroundColor;
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(mage.x, mage.y, mage.width, mage.height);

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "grey";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = "7";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(mage.x, mage.y, mage.width, mage.height);

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "23px Arial Black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(mage.text, mage.x + 10, mage.y + mage.height / 2 + 5);
};

/**
 * Call activateHovering() to change the color while hovering buttons
 */

Object(_designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__["activateHovering"])(warrior, mage, () =>
  Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])("choseCaracter", choseCaracterScreen, "choseCaracter")
);

/**
 * Call choseMenu(),to trigger the click on the chosen button
 */

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(
  warrior,
  mage,
  () => Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])("choseCaracter", choseCaracterScreen, "warriorScreen"), // just for the test
  () => Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])("choseCaracter", choseCaracterScreen, "mageScreen")
);


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
  () => Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_6__["navigationMenu"])("Ingame", _choseCaracterScreen__WEBPACK_IMPORTED_MODULE_7__["choseCaracterScreen"], "choseCaracter"), // just for the test
  () => Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_6__["navigationMenu"])("Ingame", _mainMenu__WEBPACK_IMPORTED_MODULE_5__["createMenu"], "Menu")
);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0L2NvbnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUhvdmVyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9jaG9zZUNhcmFjdGVyU2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL21haW5NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL29wdGlvbnNTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvcGxheVNjcmVlbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R1Qjs7QUFFUDtBQUNJO0FBQ087QUFDTjtBQUNFO0FBQ3dCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNpQjtBQUNEO0FBQ007O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJpQjtBQUNLOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBLFdBQVcsY0FBYztBQUN6Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hvQztBQUNwQjtBQUNRO0FBQ0c7QUFDRjtBQUNMOztBQUVwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGc0I7QUFDRTs7QUFFeEI7QUFDZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkZnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQm9DO0FBQ3BCO0FBQ1E7QUFDRztBQUNGO0FBQ0w7QUFDQzs7O0FBR3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRm9DO0FBQ3BCO0FBQ1E7QUFDRztBQUNQO0FBQ0M7QUFDSTtBQUNLOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxyXG4gKiBEZWNsYXJpbmcgdXNlZnVsIHZhcmlhYmxlc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBsZXQgU1RBVEUgPSB7XHJcbiAgaWQ6IDEsXHJcblxyXG4gIFRpdGxlOiBcIk1lbnVcIixcclxuXHJcbiAgc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgIHRoaXMuVGl0bGUgPSBuZXdUaXRsZTtcclxuICB9LFxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLlRpdGxlO1xyXG4gIH1cclxufTtcclxuIiwiLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0geFxyXG4gKiBAcGFyYW0geyp9IHlcclxuICogQHBhcmFtIHsqfSB3aWR0aFxyXG4gKiBAcGFyYW0geyp9IGhlaWdodFxyXG4gKiBAcGFyYW0geyp9IHRleHRcclxuICogQHBhcmFtIHsqfSBiYWNrZ3JvdW5kQ29sb3JcclxuICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlIEJ1dHRvbnMgYW5kIHJldHVybiBwb3NpdGlvblxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b25zID0gKHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHQsIGJhY2tncm91bmRDb2xvcikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiB4LFxyXG4gICAgeTogeSxcclxuICAgIHdpZHRoOiB3aWR0aCxcclxuICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgdGV4dDogdGV4dCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb29yQnV0dG9ucyA9IChlLCBvYmplY3QpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgZS5jbGllbnRYID4gb2JqZWN0LnggJiZcclxuICAgIGUuY2xpZW50WCA8IG9iamVjdC54ICsgb2JqZWN0LndpZHRoICsgMTQgJiZcclxuICAgIChlLmNsaWVudFkgPiBvYmplY3QueSAmJiBlLmNsaWVudFkgPCBvYmplY3QueSArIChvYmplY3QuaGVpZ2h0ICsgMTQpKVxyXG4gICk7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBHZXQgQ2FudmFzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZVdpbmRvd1wiKTtcclxuZXhwb3J0IGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQ2FudmFzID0gKCkgPT4ge1xyXG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDYW52YXMgfSBmcm9tIFwiLi9jcmVhdGVDYW52YXNcIjtcclxuXHJcbmltcG9ydCB7IFNUQVRFIH0gZnJvbSBcIi4uL2NvbnN0L2NvbnN0XCI7XHJcbmltcG9ydCB7IGNob3NlTWVudSB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnVcIjtcclxuaW1wb3J0IHsgYWN0aXZhdGVIb3ZlcmluZyB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZ1wiO1xyXG5pbXBvcnQgeyBwbGF5U2NyZWVuIH0gZnJvbSBcIi4uL3NjcmVlbnMvcGxheVNjcmVlblwiO1xyXG5pbXBvcnQgeyBvcHRpb25TY3JlZW4gfSBmcm9tIFwiLi4vc2NyZWVucy9vcHRpb25zU2NyZWVuXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnUsIHBsYXlCdXR0b24sIG9wdGlvbkJ1dHRvbiB9IGZyb20gXCIuLi9zY3JlZW5zL21haW5NZW51XCI7XHJcblxyXG5pZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gXCJNZW51XCIpIHtcclxuICAvKipcclxuICAgKiBDcmVhdGUgdGhlIGNhbnZhc1xyXG4gICAqL1xyXG4gIGNyZWF0ZUNhbnZhcygpO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgdGhlIG1haW4gTWVudVxyXG4gICAqL1xyXG4gIGlmIChTVEFURS5nZXRUaXRsZSgpID09PSBcIk1lbnVcIikgY3JlYXRlTWVudSgpO1xyXG5cclxuICAvKipcclxuICAgKiBDYWxsIGFjdGl2YXRlSG92ZXJpbmcoKSB0byBjaGFuZ2UgdGhlIGNvbG9yIHdoaWxlIGhvdmVyaW5nIGJ1dHRvbnNcclxuICAgKi9cclxuICBhY3RpdmF0ZUhvdmVyaW5nKHBsYXlCdXR0b24sIG9wdGlvbkJ1dHRvbiwgKCkgPT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBTdGF0ZW1lbnQgdG8gYXZvaWQgY2FsbGluZyByZWxvYWRTY3JlZW4gaW4gdGhlIHByZXYgb3IgbmV4dCBGcmFtZVxyXG4gICAgICovXHJcbiAgICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gXCJNZW51XCIpIGNyZWF0ZU1lbnUoKTtcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbCBjaG9zZU1lbnUoKSx0byB0cmlnZ2VyIHRoZSBjbGljayBvbiB0aGUgY2hvc2VuIGJ1dHRvblxyXG4gICAqL1xyXG4gIGNob3NlTWVudShcclxuICAgIHBsYXlCdXR0b24sXHJcbiAgICBvcHRpb25CdXR0b24sXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBJZiBTdGF0ZW1lbnQgdG8gYXZvaWQgY2FsbGluZyByZWxvYWRTY3JlZW4gaW4gdGhlIHByZXYgb3IgbmV4dCBGcmFtZVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IFwiTWVudVwiKSBwbGF5U2NyZWVuKCk7XHJcbiAgICB9LFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gXCJNZW51XCIpIG9wdGlvblNjcmVlbigpO1xyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY2FudmFzIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXNcIjtcclxuaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi4vY29uc3QvY29uc3RcIjtcclxuaW1wb3J0IHsgY29vckJ1dHRvbnMgfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51XCI7XHJcblxyXG5leHBvcnQgY29uc3QgY2hvc2VNZW51ID0gKGJ1dHRvbiwgYnV0dG9uMiwgaHJlZkJ1dHRvbiwgaHJlZkJ1dHRvbjIpID0+IHtcclxuICAvKipcclxuICAgKiBDbGljayBFdmVudFxyXG4gICAqIENob29zZSBtZW51IHRvIGNsaWNrXHJcbiAgICovXHJcblxyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoY29vckJ1dHRvbnMoZSwgYnV0dG9uKSkge1xyXG4gICAgICBocmVmQnV0dG9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvb3JCdXR0b25zKGUsIGJ1dHRvbjIpKSB7XHJcbiAgICAgIGhyZWZCdXR0b24yKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNhbnZhcyB9IGZyb20gXCIuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzXCI7XHJcbmltcG9ydCB7IGNvb3JCdXR0b25zIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlSG92ZXJpbmcgPSAoYnV0dG9uLCBidXR0b24yLCByZWxvYWRBY3R1YWxNZW51KSA9PiB7XHJcbiAgLyoqXHJcbiAgICogSG92ZXIgZXZlbnRcclxuICAgKi9cclxuXHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoY29vckJ1dHRvbnMoZSwgYnV0dG9uKSkge1xyXG4gICAgICBidXR0b24uYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcIlBsYXlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBidXR0b24uYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb29yQnV0dG9ucyhlLCBidXR0b24yKSkge1xyXG4gICAgICBidXR0b24yLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBidXR0b24yLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgIH1cclxuICAgIHJlbG9hZEFjdHVhbE1lbnVcclxuICAgICAgPyByZWxvYWRBY3R1YWxNZW51KClcclxuICAgICAgOiBjb25zb2xlLmxvZyhcIk1pc3NpbmcgRnVuY3Rpb24gUGFyYW1ldGVyXCIpO1xyXG4gIH0pO1xyXG59O1xyXG4iLCIvLyBpbXBvcnQgeyBtYWtlV2FycmlvciB9IGZyb20gXCIuL2NyZWF0ZUNhcmFjdGVyXCI7XHJcbmltcG9ydCBcIi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZU1lbnVcIjtcclxuXHJcbi8qXHJcblxyXG5jb25zdCBjcmVhdGVXYXJyaW9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3YXJyaW9yXCIpO1xyXG5jcmVhdGVXYXJyaW9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAvLyBDcmVhdGluZyBUaGUgV2FycmlvciAvL1xyXG4gIG1ha2VXYXJyaW9yKCk7XHJcbn0pO1xyXG4gXHJcbiovXHJcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4LCBjcmVhdGVDYW52YXMgfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhc1wiO1xyXG5pbXBvcnQgeyBTVEFURSB9IGZyb20gXCIuLi9jb25zdC9jb25zdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVCdXR0b25zIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudVwiO1xyXG5pbXBvcnQgeyBhY3RpdmF0ZUhvdmVyaW5nIH0gZnJvbSBcIi4uL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUhvdmVyaW5nXCI7XHJcbmltcG9ydCB7IG5hdmlnYXRpb25NZW51IH0gZnJvbSBcIi4vbmF2aWdhdGlvbk1lbnUvbmF2aWdhdGlvbk1lbnVcIjtcclxuaW1wb3J0IHsgY2hvc2VNZW51IH0gZnJvbSBcIi4uL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUNsaWNrRm9yTWVudVwiO1xyXG5cclxuLyoqXHJcbiAqIFdhcnJpb3JcclxuICovXHJcblxyXG5jb25zdCB3YXJyaW9yID0gY3JlYXRlQnV0dG9ucyhcclxuICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxyXG4gIGNhbnZhcy5oZWlnaHQgLyAyIC0gMTAwLFxyXG4gIDIwMCxcclxuICA1MCxcclxuICBcIldhcnJpb3JcIixcclxuICBcIndoaXRlXCJcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBNYWdlXHJcbiAqL1xyXG5cclxuY29uc3QgbWFnZSA9IGNyZWF0ZUJ1dHRvbnMoXHJcbiAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcclxuICBjYW52YXMuaGVpZ2h0IC8gMiAtIDI1LFxyXG4gIDIwMCxcclxuICA1MCxcclxuICBcIk1hZ2VcIixcclxuICBcIndoaXRlXCJcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaG9zZUNhcmFjdGVyU2NyZWVuID0gKCkgPT4ge1xyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSBvbGQgY29tcG9uZW50c1xyXG4gICAqL1xyXG4gIGNyZWF0ZUNhbnZhcygpO1xyXG5cclxuICAvKiogU2V0IFN0YXRlICovXHJcbiAgU1RBVEUuc2V0VGl0bGUoXCJjaG9zZUNhcmFjdGVyXCIpO1xyXG5cclxuICAvKiogQ3JlYXRlIENhcmFjdGVyICovXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHdhcnJpb3IuYmFja2dyb3VuZENvbG9yO1xyXG4gIGN0eC5maWxsUmVjdCh3YXJyaW9yLngsIHdhcnJpb3IueSwgd2Fycmlvci53aWR0aCwgd2Fycmlvci5oZWlnaHQpO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZXlcIjtcclxuICBjdHgubGluZVdpZHRoID0gXCI3XCI7XHJcbiAgY3R4LnN0cm9rZVJlY3Qod2Fycmlvci54LCB3YXJyaW9yLnksIHdhcnJpb3Iud2lkdGgsIHdhcnJpb3IuaGVpZ2h0KTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICBjdHguZm9udCA9IFwiMjNweCBBcmlhbCBCbGFja1wiO1xyXG4gIGN0eC5maWxsVGV4dChcclxuICAgIHdhcnJpb3IudGV4dCxcclxuICAgIHdhcnJpb3IueCArIDEwLFxyXG4gICAgd2Fycmlvci55ICsgd2Fycmlvci5oZWlnaHQgLyAyICsgNVxyXG4gICk7XHJcblxyXG4gIC8qKiBDYW5jZWwgKi9cclxuICBjdHguZmlsbFN0eWxlID0gbWFnZS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgY3R4LmZpbGxSZWN0KG1hZ2UueCwgbWFnZS55LCBtYWdlLndpZHRoLCBtYWdlLmhlaWdodCk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JleVwiO1xyXG4gIGN0eC5saW5lV2lkdGggPSBcIjdcIjtcclxuICBjdHguc3Ryb2tlUmVjdChtYWdlLngsIG1hZ2UueSwgbWFnZS53aWR0aCwgbWFnZS5oZWlnaHQpO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gIGN0eC5mb250ID0gXCIyM3B4IEFyaWFsIEJsYWNrXCI7XHJcbiAgY3R4LmZpbGxUZXh0KG1hZ2UudGV4dCwgbWFnZS54ICsgMTAsIG1hZ2UueSArIG1hZ2UuaGVpZ2h0IC8gMiArIDUpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENhbGwgYWN0aXZhdGVIb3ZlcmluZygpIHRvIGNoYW5nZSB0aGUgY29sb3Igd2hpbGUgaG92ZXJpbmcgYnV0dG9uc1xyXG4gKi9cclxuXHJcbmFjdGl2YXRlSG92ZXJpbmcod2FycmlvciwgbWFnZSwgKCkgPT5cclxuICBuYXZpZ2F0aW9uTWVudShcImNob3NlQ2FyYWN0ZXJcIiwgY2hvc2VDYXJhY3RlclNjcmVlbiwgXCJjaG9zZUNhcmFjdGVyXCIpXHJcbik7XHJcblxyXG4vKipcclxuICogQ2FsbCBjaG9zZU1lbnUoKSx0byB0cmlnZ2VyIHRoZSBjbGljayBvbiB0aGUgY2hvc2VuIGJ1dHRvblxyXG4gKi9cclxuXHJcbmNob3NlTWVudShcclxuICB3YXJyaW9yLFxyXG4gIG1hZ2UsXHJcbiAgKCkgPT4gbmF2aWdhdGlvbk1lbnUoXCJjaG9zZUNhcmFjdGVyXCIsIGNob3NlQ2FyYWN0ZXJTY3JlZW4sIFwid2FycmlvclNjcmVlblwiKSwgLy8ganVzdCBmb3IgdGhlIHRlc3RcclxuICAoKSA9PiBuYXZpZ2F0aW9uTWVudShcImNob3NlQ2FyYWN0ZXJcIiwgY2hvc2VDYXJhY3RlclNjcmVlbiwgXCJtYWdlU2NyZWVuXCIpXHJcbik7XHJcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnV0dG9ucyB9IGZyb20gXCIuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnVcIjtcclxuXHJcbmltcG9ydCB2ZXJzaW9uIGZyb20gXCIuLi8uLi9wYWNrYWdlLmpzb25cIjtcclxuaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi4vY29uc3QvY29uc3RcIjtcclxuXHJcbi8qKlxyXG4gKiBQbGF5IEJ1dHRvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBsYXlCdXR0b24gPSBjcmVhdGVCdXR0b25zKFxyXG4gIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXHJcbiAgY2FudmFzLmhlaWdodCAvIDIgLSAxMDAsXHJcbiAgMjAwLFxyXG4gIDUwLFxyXG4gIFwiUGxheSB0aGUgZ2FtZVwiLFxyXG4gIFwid2hpdGVcIlxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgQnV0dG9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgb3B0aW9uQnV0dG9uID0gY3JlYXRlQnV0dG9ucyhcclxuICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxyXG4gIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjUsXHJcbiAgMjAwLFxyXG4gIDUwLFxyXG4gIFwiT3B0aW9uc1wiLFxyXG4gIFwid2hpdGVcIlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgR2FtZSBWZXJzaW9uXHJcbiAgICovXHJcbiAgY29uc3QgZ2FtZVZlcnNpb24gPSBcIlYgXCIgKyB2ZXJzaW9uLnZlcnNpb247XHJcblxyXG4gIC8vIERyYXcgVmVyc2lvbiBpbiBjYW52YXMgLy9cclxuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICBjdHguZm9udCA9IFwiMTVweCBBcmlhbCBibGFja1wiO1xyXG4gIGN0eC5maWxsVGV4dChnYW1lVmVyc2lvbiwgNTAsIDUwKTtcclxuXHJcbiAgLyoqUGxheSAqL1xyXG4gIGN0eC5maWxsU3R5bGUgPSBwbGF5QnV0dG9uLmJhY2tncm91bmRDb2xvcjtcclxuICBjdHguZmlsbFJlY3QocGxheUJ1dHRvbi54LCBwbGF5QnV0dG9uLnksIHBsYXlCdXR0b24ud2lkdGgsIHBsYXlCdXR0b24uaGVpZ2h0KTtcclxuXHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJncmV5XCI7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IFwiN1wiO1xyXG4gIGN0eC5zdHJva2VSZWN0KFxyXG4gICAgcGxheUJ1dHRvbi54LFxyXG4gICAgcGxheUJ1dHRvbi55LFxyXG4gICAgcGxheUJ1dHRvbi53aWR0aCxcclxuICAgIHBsYXlCdXR0b24uaGVpZ2h0XHJcbiAgKTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICBjdHguZm9udCA9IFwiMjNweCBBcmlhbCBCbGFja1wiO1xyXG4gIGN0eC5maWxsVGV4dChcclxuICAgIHBsYXlCdXR0b24udGV4dCxcclxuICAgIHBsYXlCdXR0b24ueCArIDEwLFxyXG4gICAgcGxheUJ1dHRvbi55ICsgcGxheUJ1dHRvbi5oZWlnaHQgLyAyICsgNVxyXG4gICk7XHJcblxyXG4gIC8qKk9wdGlvbnMgKi9cclxuICBjdHguZmlsbFN0eWxlID0gb3B0aW9uQnV0dG9uLmJhY2tncm91bmRDb2xvcjtcclxuICBjdHguZmlsbFJlY3QoXHJcbiAgICBvcHRpb25CdXR0b24ueCxcclxuICAgIG9wdGlvbkJ1dHRvbi55LFxyXG4gICAgb3B0aW9uQnV0dG9uLndpZHRoLFxyXG4gICAgb3B0aW9uQnV0dG9uLmhlaWdodFxyXG4gICk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JleVwiO1xyXG4gIGN0eC5saW5lV2lkdGggPSBcIjdcIjtcclxuICBjdHguc3Ryb2tlUmVjdChcclxuICAgIG9wdGlvbkJ1dHRvbi54LFxyXG4gICAgb3B0aW9uQnV0dG9uLnksXHJcbiAgICBvcHRpb25CdXR0b24ud2lkdGgsXHJcbiAgICBvcHRpb25CdXR0b24uaGVpZ2h0XHJcbiAgKTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICBjdHguZm9udCA9IFwiMjNweCBBcmlhbCBCbGFja1wiO1xyXG4gIGN0eC5maWxsVGV4dChcclxuICAgIG9wdGlvbkJ1dHRvbi50ZXh0LFxyXG4gICAgb3B0aW9uQnV0dG9uLnggKyA1MCxcclxuICAgIG9wdGlvbkJ1dHRvbi55ICsgb3B0aW9uQnV0dG9uLmhlaWdodCAvIDIgKyA1XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi4vLi4vY29uc3QvY29uc3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uTWVudSA9IChhY3R1YWxTdGF0ZSwgc2NyZWVuTG9hZGVkLCBzdGF0ZUxvYWRlZCkgPT4ge1xyXG4gIGlmIChTVEFURS5nZXRUaXRsZSgpID09PSBhY3R1YWxTdGF0ZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChzdWNjZXNzLCBlcnJvcikgPT4ge1xyXG4gICAgICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gYWN0dWFsU3RhdGUpIHtcclxuICAgICAgICBzdWNjZXNzKCgpID0+IHNjcmVlbkxvYWRlZCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlcnJvcihjb25zb2xlLmxvZyhcIkVycm9yLCBXcm9uZyBTVEFURSBUaXRsZVwiKSk7XHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gYWN0dWFsU3RhdGUpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBTVEFURS5zZXRUaXRsZShzdGF0ZUxvYWRlZCk7XHJcbiAgICAgICAgICBzY3JlZW5Mb2FkZWQoKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICAgIDUwO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCwgY3JlYXRlQ2FudmFzIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXNcIjtcclxuaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi4vY29uc3QvY29uc3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnV0dG9ucyB9IGZyb20gXCIuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnVcIjtcclxuaW1wb3J0IHsgYWN0aXZhdGVIb3ZlcmluZyB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZ1wiO1xyXG5pbXBvcnQgeyBuYXZpZ2F0aW9uTWVudSB9IGZyb20gXCIuL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51XCI7XHJcbmltcG9ydCB7IGNob3NlTWVudSB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnVcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gXCIuL21haW5NZW51XCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlc29sdXRpb24gQnV0dG9uXHJcbiAqL1xyXG5cclxuY29uc3QgcmVzb2x1dGlvbiA9IGNyZWF0ZUJ1dHRvbnMoXHJcbiAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcclxuICBjYW52YXMuaGVpZ2h0IC8gMiAtIDEwMCxcclxuICAyMDAsXHJcbiAgNTAsXHJcbiAgXCJSZXNvbHV0aW9uXCIsXHJcbiAgXCJ3aGl0ZVwiXHJcbik7XHJcblxyXG4vKipcclxuICogU291bmQgQnV0dG9uXHJcbiAqL1xyXG5cclxuY29uc3QgY2FuY2VsID0gY3JlYXRlQnV0dG9ucyhcclxuICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxyXG4gIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjUsXHJcbiAgMjAwLFxyXG4gIDUwLFxyXG4gIFwiQ2FuY2VsXCIsXHJcbiAgXCJ3aGl0ZVwiXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3Qgb3B0aW9uU2NyZWVuID0gKCkgPT4ge1xyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSBvbGQgY29tcG9uZW50c1xyXG4gICAqL1xyXG4gIGNyZWF0ZUNhbnZhcygpO1xyXG5cclxuICAvKiogU2V0IFN0YXRlICovXHJcbiAgU1RBVEUuc2V0VGl0bGUoXCJPcHRpb25zXCIpO1xyXG5cclxuICAvKiogQ3JlYXRlIENhcmFjdGVyICovXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHJlc29sdXRpb24uYmFja2dyb3VuZENvbG9yO1xyXG4gIGN0eC5maWxsUmVjdChyZXNvbHV0aW9uLngsIHJlc29sdXRpb24ueSwgcmVzb2x1dGlvbi53aWR0aCwgcmVzb2x1dGlvbi5oZWlnaHQpO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZXlcIjtcclxuICBjdHgubGluZVdpZHRoID0gXCI3XCI7XHJcbiAgY3R4LnN0cm9rZVJlY3QoXHJcbiAgICByZXNvbHV0aW9uLngsXHJcbiAgICByZXNvbHV0aW9uLnksXHJcbiAgICByZXNvbHV0aW9uLndpZHRoLFxyXG4gICAgcmVzb2x1dGlvbi5oZWlnaHRcclxuICApO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gIGN0eC5mb250ID0gXCIyM3B4IEFyaWFsIEJsYWNrXCI7XHJcbiAgY3R4LmZpbGxUZXh0KFxyXG4gICAgcmVzb2x1dGlvbi50ZXh0LFxyXG4gICAgcmVzb2x1dGlvbi54ICsgMTAsXHJcbiAgICByZXNvbHV0aW9uLnkgKyByZXNvbHV0aW9uLmhlaWdodCAvIDIgKyA1XHJcbiAgKTtcclxuXHJcbiAgLyoqIENhbmNlbCAqL1xyXG4gIGN0eC5maWxsU3R5bGUgPSBjYW5jZWwuYmFja2dyb3VuZENvbG9yO1xyXG4gIGN0eC5maWxsUmVjdChjYW5jZWwueCwgY2FuY2VsLnksIGNhbmNlbC53aWR0aCwgY2FuY2VsLmhlaWdodCk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JleVwiO1xyXG4gIGN0eC5saW5lV2lkdGggPSBcIjdcIjtcclxuICBjdHguc3Ryb2tlUmVjdChjYW5jZWwueCwgY2FuY2VsLnksIGNhbmNlbC53aWR0aCwgY2FuY2VsLmhlaWdodCk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgY3R4LmZvbnQgPSBcIjIzcHggQXJpYWwgQmxhY2tcIjtcclxuICBjdHguZmlsbFRleHQoY2FuY2VsLnRleHQsIGNhbmNlbC54ICsgMTAsIGNhbmNlbC55ICsgY2FuY2VsLmhlaWdodCAvIDIgKyA1KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDYWxsIGFjdGl2YXRlSG92ZXJpbmcoKSB0byBjaGFuZ2UgdGhlIGNvbG9yIHdoaWxlIGhvdmVyaW5nIGJ1dHRvbnNcclxuICovXHJcblxyXG5hY3RpdmF0ZUhvdmVyaW5nKHJlc29sdXRpb24sIGNhbmNlbCwgKCkgPT5cclxuICBuYXZpZ2F0aW9uTWVudShcIk9wdGlvbnNcIiwgb3B0aW9uU2NyZWVuLCBcIk9wdGlvbnNcIilcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBDYWxsIGNob3NlTWVudSgpLHRvIHRyaWdnZXIgdGhlIGNsaWNrIG9uIHRoZSBjaG9zZW4gYnV0dG9uXHJcbiAqL1xyXG5cclxuY2hvc2VNZW51KFxyXG4gIHJlc29sdXRpb24sXHJcbiAgY2FuY2VsLFxyXG4gICgpID0+IG5hdmlnYXRpb25NZW51KFwiT3B0aW9uc1wiLCBvcHRpb25TY3JlZW4sIFwiT3B0aW9uc1wiKSwgLy8ganVzdCBmb3IgdGhlIHRlc3RcclxuICAoKSA9PiBuYXZpZ2F0aW9uTWVudShcIk9wdGlvbnNcIiwgY3JlYXRlTWVudSwgXCJNZW51XCIpXHJcbik7XHJcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4LCBjcmVhdGVDYW52YXMgfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhc1wiO1xyXG5pbXBvcnQgeyBTVEFURSB9IGZyb20gXCIuLi9jb25zdC9jb25zdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVCdXR0b25zIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudVwiO1xyXG5pbXBvcnQgeyBhY3RpdmF0ZUhvdmVyaW5nIH0gZnJvbSBcIi4uL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUhvdmVyaW5nXCI7XHJcbmltcG9ydCB7IGNob3NlTWVudSB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnVcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gXCIuL21haW5NZW51XCI7XHJcbmltcG9ydCB7IG5hdmlnYXRpb25NZW51IH0gZnJvbSBcIi4vbmF2aWdhdGlvbk1lbnUvbmF2aWdhdGlvbk1lbnVcIjtcclxuaW1wb3J0IHsgY2hvc2VDYXJhY3RlclNjcmVlbiB9IGZyb20gXCIuL2Nob3NlQ2FyYWN0ZXJTY3JlZW5cIjtcclxuXHJcbi8qKlxyXG4gKiBjcmVhdGVDYXJhY3RlciBCdXR0b25cclxuICovXHJcblxyXG5jb25zdCBjcmVhdGVDYXJhY3RlciA9IGNyZWF0ZUJ1dHRvbnMoXHJcbiAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcclxuICBjYW52YXMuaGVpZ2h0IC8gMiAtIDEwMCxcclxuICAyMDAsXHJcbiAgNTAsXHJcbiAgXCJDYXJhY3RlclwiLFxyXG4gIFwid2hpdGVcIlxyXG4pO1xyXG5cclxuY29uc3QgY2FuY2VsID0gY3JlYXRlQnV0dG9ucyhcclxuICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxyXG4gIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjUsXHJcbiAgMjAwLFxyXG4gIDUwLFxyXG4gIFwiQ2FuY2VsXCIsXHJcbiAgXCJ3aGl0ZVwiXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgcGxheVNjcmVlbiA9ICgpID0+IHtcclxuICAvKipcclxuICAgKiByZW1vdmUgb2xkIGNvbXBvbmVudHNcclxuICAgKi9cclxuICBjcmVhdGVDYW52YXMoKTtcclxuXHJcbiAgLyoqIFNldCBTdGF0ZSAqL1xyXG4gIFNUQVRFLnNldFRpdGxlKFwiSW5nYW1lXCIpO1xyXG5cclxuICAvKiogQ3JlYXRlIENhcmFjdGVyICovXHJcbiAgY3R4LmZpbGxTdHlsZSA9IGNyZWF0ZUNhcmFjdGVyLmJhY2tncm91bmRDb2xvcjtcclxuICBjdHguZmlsbFJlY3QoXHJcbiAgICBjcmVhdGVDYXJhY3Rlci54LFxyXG4gICAgY3JlYXRlQ2FyYWN0ZXIueSxcclxuICAgIGNyZWF0ZUNhcmFjdGVyLndpZHRoLFxyXG4gICAgY3JlYXRlQ2FyYWN0ZXIuaGVpZ2h0XHJcbiAgKTtcclxuXHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJncmV5XCI7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IFwiN1wiO1xyXG4gIGN0eC5zdHJva2VSZWN0KFxyXG4gICAgY3JlYXRlQ2FyYWN0ZXIueCxcclxuICAgIGNyZWF0ZUNhcmFjdGVyLnksXHJcbiAgICBjcmVhdGVDYXJhY3Rlci53aWR0aCxcclxuICAgIGNyZWF0ZUNhcmFjdGVyLmhlaWdodFxyXG4gICk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgY3R4LmZvbnQgPSBcIjIzcHggQXJpYWwgQmxhY2tcIjtcclxuICBjdHguZmlsbFRleHQoXHJcbiAgICBjcmVhdGVDYXJhY3Rlci50ZXh0LFxyXG4gICAgY3JlYXRlQ2FyYWN0ZXIueCArIDEwLFxyXG4gICAgY3JlYXRlQ2FyYWN0ZXIueSArIGNyZWF0ZUNhcmFjdGVyLmhlaWdodCAvIDIgKyA1XHJcbiAgKTtcclxuXHJcbiAgLyoqIENhbmNlbCAqL1xyXG4gIGN0eC5maWxsU3R5bGUgPSBjYW5jZWwuYmFja2dyb3VuZENvbG9yO1xyXG4gIGN0eC5maWxsUmVjdChjYW5jZWwueCwgY2FuY2VsLnksIGNhbmNlbC53aWR0aCwgY2FuY2VsLmhlaWdodCk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JleVwiO1xyXG4gIGN0eC5saW5lV2lkdGggPSBcIjdcIjtcclxuICBjdHguc3Ryb2tlUmVjdChjYW5jZWwueCwgY2FuY2VsLnksIGNhbmNlbC53aWR0aCwgY2FuY2VsLmhlaWdodCk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgY3R4LmZvbnQgPSBcIjIzcHggQXJpYWwgQmxhY2tcIjtcclxuICBjdHguZmlsbFRleHQoY2FuY2VsLnRleHQsIGNhbmNlbC54ICsgMTAsIGNhbmNlbC55ICsgY2FuY2VsLmhlaWdodCAvIDIgKyA1KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDYWxsIGFjdGl2YXRlSG92ZXJpbmcoKSB0byBjaGFuZ2UgdGhlIGNvbG9yIHdoaWxlIGhvdmVyaW5nIGJ1dHRvbnNcclxuICovXHJcblxyXG5hY3RpdmF0ZUhvdmVyaW5nKGNyZWF0ZUNhcmFjdGVyLCBjYW5jZWwsICgpID0+XHJcbiAgbmF2aWdhdGlvbk1lbnUoXCJJbmdhbWVcIiwgcGxheVNjcmVlbiwgXCJJbmdhbWVcIilcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBDYWxsIGNob3NlTWVudSgpLHRvIHRyaWdnZXIgdGhlIGNsaWNrIG9uIHRoZSBjaG9zZW4gYnV0dG9uXHJcbiAqL1xyXG5cclxuY2hvc2VNZW51KFxyXG4gIGNyZWF0ZUNhcmFjdGVyLFxyXG4gIGNhbmNlbCxcclxuICAoKSA9PiBuYXZpZ2F0aW9uTWVudShcIkluZ2FtZVwiLCBjaG9zZUNhcmFjdGVyU2NyZWVuLCBcImNob3NlQ2FyYWN0ZXJcIiksIC8vIGp1c3QgZm9yIHRoZSB0ZXN0XHJcbiAgKCkgPT4gbmF2aWdhdGlvbk1lbnUoXCJJbmdhbWVcIiwgY3JlYXRlTWVudSwgXCJNZW51XCIpXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=