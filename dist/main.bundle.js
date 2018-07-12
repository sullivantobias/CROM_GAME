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
/*! exports provided: createButtons, coorButtons, drawButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtons", function() { return createButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coorButtons", function() { return coorButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawButtons", function() { return drawButtons; });
/* harmony import */ var _createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCanvas */ "./src/createFunctions/createCanvas.js");


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

const drawButtons = (...button) => {
  for (let i = 0; i < button.length; i++) {
    /** button to create */
    _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = button[i].backgroundColor;
    _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(button[i].x, button[i].y, button[i].width, button[i].height);

    _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "grey";
    _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = "7";
    _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(button[i].x, button[i].y, button[i].width, button[i].height);

    _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
    _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "23px Arial Black";
    _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(
      button[i].text,
      button[i].x + 10,
      button[i].y + button[i].height / 2 + 5
    );
  }
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

  Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["drawButtons"])(warrior, mage, cancel);
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

  /** Draw button */
  Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_1__["drawButtons"])(playButton, optionButton);
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

  /** Draw Buttons */
  Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["drawButtons"])(resolution, cancel);
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

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(() => {
  Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])("Options", _mainMenu__WEBPACK_IMPORTED_MODULE_6__["createMenu"], "Menu");
}, cancel);

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(() => {
  Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])("Options", optionScreen, "Options");
}, resolution);


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

  /** Draw Button */
  Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["drawButtons"])(createCaracter, cancel);
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

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_4__["choseMenu"])(() => {
  Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_6__["navigationMenu"])("Ingame", _choseCaracterScreen__WEBPACK_IMPORTED_MODULE_7__["choseCaracterScreen"], "choseCaracter");
}, createCaracter);

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_4__["choseMenu"])(() => {
  Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_6__["navigationMenu"])("Ingame", _mainMenu__WEBPACK_IMPORTED_MODULE_5__["createMenu"], "Menu");
}, cancel);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0L2NvbnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUhvdmVyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9jaG9zZUNhcmFjdGVyU2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL21haW5NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL29wdGlvbnNTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvcGxheVNjcmVlbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FB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QTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcclxuICogRGVjbGFyaW5nIHVzZWZ1bCB2YXJpYWJsZXNcclxuICovXHJcblxyXG5leHBvcnQgbGV0IFNUQVRFID0ge1xyXG4gIGlkOiAxLFxyXG5cclxuICBUaXRsZTogXCJNZW51XCIsXHJcblxyXG4gIHNldFRpdGxlKG5ld1RpdGxlKSB7XHJcbiAgICB0aGlzLlRpdGxlID0gbmV3VGl0bGU7XHJcbiAgfSxcclxuXHJcbiAgZ2V0VGl0bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5UaXRsZTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGN0eCB9IGZyb20gXCIuL2NyZWF0ZUNhbnZhc1wiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0geFxyXG4gKiBAcGFyYW0geyp9IHlcclxuICogQHBhcmFtIHsqfSB3aWR0aFxyXG4gKiBAcGFyYW0geyp9IGhlaWdodFxyXG4gKiBAcGFyYW0geyp9IHRleHRcclxuICogQHBhcmFtIHsqfSBiYWNrZ3JvdW5kQ29sb3JcclxuICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlIEJ1dHRvbnMgYW5kIHJldHVybiBwb3NpdGlvblxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b25zID0gKHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHQsIGJhY2tncm91bmRDb2xvcikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiB4LFxyXG4gICAgeTogeSxcclxuICAgIHdpZHRoOiB3aWR0aCxcclxuICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgdGV4dDogdGV4dCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb29yQnV0dG9ucyA9IChlLCBvYmplY3QpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgZS5jbGllbnRYID4gb2JqZWN0LnggJiZcclxuICAgIGUuY2xpZW50WCA8IG9iamVjdC54ICsgb2JqZWN0LndpZHRoICsgMTQgJiZcclxuICAgIChlLmNsaWVudFkgPiBvYmplY3QueSAmJiBlLmNsaWVudFkgPCBvYmplY3QueSArIChvYmplY3QuaGVpZ2h0ICsgMTQpKVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0J1dHRvbnMgPSAoLi4uYnV0dG9uKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b24ubGVuZ3RoOyBpKyspIHtcclxuICAgIC8qKiBidXR0b24gdG8gY3JlYXRlICovXHJcbiAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uW2ldLmJhY2tncm91bmRDb2xvcjtcclxuICAgIGN0eC5maWxsUmVjdChidXR0b25baV0ueCwgYnV0dG9uW2ldLnksIGJ1dHRvbltpXS53aWR0aCwgYnV0dG9uW2ldLmhlaWdodCk7XHJcblxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJncmV5XCI7XHJcbiAgICBjdHgubGluZVdpZHRoID0gXCI3XCI7XHJcbiAgICBjdHguc3Ryb2tlUmVjdChidXR0b25baV0ueCwgYnV0dG9uW2ldLnksIGJ1dHRvbltpXS53aWR0aCwgYnV0dG9uW2ldLmhlaWdodCk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eC5mb250ID0gXCIyM3B4IEFyaWFsIEJsYWNrXCI7XHJcbiAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgIGJ1dHRvbltpXS50ZXh0LFxyXG4gICAgICBidXR0b25baV0ueCArIDEwLFxyXG4gICAgICBidXR0b25baV0ueSArIGJ1dHRvbltpXS5oZWlnaHQgLyAyICsgNVxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBHZXQgQ2FudmFzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZVdpbmRvd1wiKTtcclxuZXhwb3J0IGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQ2FudmFzID0gKCkgPT4ge1xyXG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDYW52YXMgfSBmcm9tIFwiLi9jcmVhdGVDYW52YXNcIjtcclxuXHJcbmltcG9ydCB7IFNUQVRFIH0gZnJvbSBcIi4uL2NvbnN0L2NvbnN0XCI7XHJcbmltcG9ydCB7IGNob3NlTWVudSB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnVcIjtcclxuaW1wb3J0IHsgYWN0aXZhdGVIb3ZlcmluZyB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZ1wiO1xyXG5pbXBvcnQgeyBwbGF5U2NyZWVuIH0gZnJvbSBcIi4uL3NjcmVlbnMvcGxheVNjcmVlblwiO1xyXG5pbXBvcnQgeyBvcHRpb25TY3JlZW4gfSBmcm9tIFwiLi4vc2NyZWVucy9vcHRpb25zU2NyZWVuXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnUsIHBsYXlCdXR0b24sIG9wdGlvbkJ1dHRvbiB9IGZyb20gXCIuLi9zY3JlZW5zL21haW5NZW51XCI7XHJcbmltcG9ydCB7IG5hdmlnYXRpb25NZW51IH0gZnJvbSBcIi4uL3NjcmVlbnMvbmF2aWdhdGlvbk1lbnUvbmF2aWdhdGlvbk1lbnVcIjtcclxuXHJcbmlmIChTVEFURS5nZXRUaXRsZSgpID09PSBcIk1lbnVcIikge1xyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSB0aGUgY2FudmFzXHJcbiAgICovXHJcbiAgY3JlYXRlQ2FudmFzKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSB0aGUgbWFpbiBNZW51XHJcbiAgICovXHJcbiAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IFwiTWVudVwiKSBjcmVhdGVNZW51KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdGl2YXRlIEhvdmVyaW5nXHJcbiAgICovXHJcblxyXG4gIGFjdGl2YXRlSG92ZXJpbmcoXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIG5hdmlnYXRpb25NZW51KFwiTWVudVwiLCBjcmVhdGVNZW51LCBcIk1lbnVcIik7XHJcbiAgICB9LFxyXG4gICAgcGxheUJ1dHRvbixcclxuICAgIG9wdGlvbkJ1dHRvblxyXG4gICk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdGl2YXRlIENsaWNrXHJcbiAgICovXHJcblxyXG4gIGNob3NlTWVudShcclxuICAgICgpID0+IHtcclxuICAgICAgbmF2aWdhdGlvbk1lbnUoXCJNZW51XCIsIHBsYXlTY3JlZW4sIFwiSW5nYW1lXCIpO1xyXG4gICAgfSxcclxuICAgIHBsYXlCdXR0b25cclxuICApO1xyXG5cclxuICBjaG9zZU1lbnUoXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIG5hdmlnYXRpb25NZW51KFwiTWVudVwiLCBvcHRpb25TY3JlZW4sIFwiT3B0aW9uc1wiKTtcclxuICAgIH0sXHJcbiAgICBvcHRpb25CdXR0b25cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGNhbnZhcyB9IGZyb20gXCIuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzXCI7XHJcbmltcG9ydCB7IGNvb3JCdXR0b25zIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNob3NlTWVudSA9IChocmVmLCBidXR0b24pID0+IHtcclxuICAvKipcclxuICAgKiBDbGljayBFdmVudFxyXG4gICAqIENob29zZSBtZW51IHRvIGNsaWNrXHJcbiAgICovXHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChidXR0b24pIHtcclxuICAgICAgaWYgKGNvb3JCdXR0b25zKGUsIGJ1dHRvbikpIHtcclxuICAgICAgICBocmVmKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2FudmFzIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXNcIjtcclxuaW1wb3J0IHsgY29vckJ1dHRvbnMgfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51XCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aXZhdGVIb3ZlcmluZyA9IChyZWxvYWRBY3R1YWxNZW51LCAuLi5idXR0b24pID0+IHtcclxuICAvKipcclxuICAgKiBIb3ZlciBldmVudFxyXG4gICAqL1xyXG4gIGlmIChidXR0b24ubGVuZ3RoKSB7XHJcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBlID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoY29vckJ1dHRvbnMoZSwgYnV0dG9uW2ldKSkge1xyXG4gICAgICAgICAgYnV0dG9uW2ldLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUGxheVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnV0dG9uW2ldLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlbG9hZEFjdHVhbE1lbnVcclxuICAgICAgICA/IHJlbG9hZEFjdHVhbE1lbnUoKVxyXG4gICAgICAgIDogY29uc29sZS5sb2coXCJNaXNzaW5nIEZ1bmN0aW9uIFBhcmFtZXRlclwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIiwiLy8gaW1wb3J0IHsgbWFrZVdhcnJpb3IgfSBmcm9tIFwiLi9jcmVhdGVDYXJhY3RlclwiO1xyXG5pbXBvcnQgXCIuL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVNZW51XCI7XHJcblxyXG4vKlxyXG5cclxuY29uc3QgY3JlYXRlV2FycmlvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2FycmlvclwiKTtcclxuY3JlYXRlV2Fycmlvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgLy8gQ3JlYXRpbmcgVGhlIFdhcnJpb3IgLy9cclxuICBtYWtlV2FycmlvcigpO1xyXG59KTtcclxuIFxyXG4qL1xyXG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCwgY3JlYXRlQ2FudmFzIH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXNcIjtcclxuaW1wb3J0IHsgU1RBVEUgfSBmcm9tIFwiLi4vY29uc3QvY29uc3RcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVCdXR0b25zLFxyXG4gIGRyYXdCdXR0b25zXHJcbn0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudVwiO1xyXG5pbXBvcnQgeyBhY3RpdmF0ZUhvdmVyaW5nIH0gZnJvbSBcIi4uL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUhvdmVyaW5nXCI7XHJcbmltcG9ydCB7IG5hdmlnYXRpb25NZW51IH0gZnJvbSBcIi4vbmF2aWdhdGlvbk1lbnUvbmF2aWdhdGlvbk1lbnVcIjtcclxuaW1wb3J0IHsgY2hvc2VNZW51IH0gZnJvbSBcIi4uL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUNsaWNrRm9yTWVudVwiO1xyXG5pbXBvcnQgeyBwbGF5U2NyZWVuIH0gZnJvbSBcIi4vcGxheVNjcmVlblwiO1xyXG5cclxuLyoqXHJcbiAqIFdhcnJpb3JcclxuICovXHJcblxyXG5jb25zdCB3YXJyaW9yID0gY3JlYXRlQnV0dG9ucyhcclxuICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxyXG4gIGNhbnZhcy5oZWlnaHQgLyAyIC0gMTAwLFxyXG4gIDIwMCxcclxuICA1MCxcclxuICBcIldhcnJpb3JcIixcclxuICBcIndoaXRlXCJcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBNYWdlXHJcbiAqL1xyXG5cclxuY29uc3QgbWFnZSA9IGNyZWF0ZUJ1dHRvbnMoXHJcbiAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcclxuICBjYW52YXMuaGVpZ2h0IC8gMiAtIDI1LFxyXG4gIDIwMCxcclxuICA1MCxcclxuICBcIk1hZ2VcIixcclxuICBcIndoaXRlXCJcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBNYWdlXHJcbiAqL1xyXG5cclxuY29uc3QgY2FuY2VsID0gY3JlYXRlQnV0dG9ucyhcclxuICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxyXG4gIGNhbnZhcy5oZWlnaHQgLyAyICsgNTAsXHJcbiAgMjAwLFxyXG4gIDUwLFxyXG4gIFwiQ2FuY2VsXCIsXHJcbiAgXCJ3aGl0ZVwiXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgY2hvc2VDYXJhY3RlclNjcmVlbiA9ICgpID0+IHtcclxuICAvKipcclxuICAgKiByZW1vdmUgb2xkIGNvbXBvbmVudHNcclxuICAgKi9cclxuICBjcmVhdGVDYW52YXMoKTtcclxuXHJcbiAgLyoqIFNldCBTdGF0ZSAqL1xyXG4gIFNUQVRFLnNldFRpdGxlKFwiY2hvc2VDYXJhY3RlclwiKTtcclxuXHJcbiAgZHJhd0J1dHRvbnMod2FycmlvciwgbWFnZSwgY2FuY2VsKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBY3RpdmF0ZSBIb3ZlcmluZ1xyXG4gKi9cclxuXHJcbmFjdGl2YXRlSG92ZXJpbmcoXHJcbiAgKCkgPT4ge1xyXG4gICAgbmF2aWdhdGlvbk1lbnUoXCJjaG9zZUNhcmFjdGVyXCIsIGNob3NlQ2FyYWN0ZXJTY3JlZW4sIFwiY2hvc2VDYXJhY3RlclwiKTtcclxuICB9LFxyXG4gIHdhcnJpb3IsXHJcbiAgbWFnZSxcclxuICBjYW5jZWxcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBBY3RpdmF0ZSBDbGlja1xyXG4gKi9cclxuXHJcbmNob3NlTWVudSgoKSA9PiB7XHJcbiAgbmF2aWdhdGlvbk1lbnUoXCJjaG9zZUNhcmFjdGVyXCIsIGNob3NlQ2FyYWN0ZXJTY3JlZW4sIFwiY2hvc2VDYXJhY3RlclwiKTtcclxufSwgd2Fycmlvcik7XHJcblxyXG5jaG9zZU1lbnUoKCkgPT4ge1xyXG4gIG5hdmlnYXRpb25NZW51KFwiY2hvc2VDYXJhY3RlclwiLCBjaG9zZUNhcmFjdGVyU2NyZWVuLCBcImNob3NlQ2FyYWN0ZXJcIik7XHJcbn0sIG1hZ2UpO1xyXG5cclxuY2hvc2VNZW51KCgpID0+IHtcclxuICBuYXZpZ2F0aW9uTWVudShcImNob3NlQ2FyYWN0ZXJcIiwgcGxheVNjcmVlbiwgXCJJbmdhbWVcIik7XHJcbn0sIGNhbmNlbCk7XHJcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXNcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVCdXR0b25zLFxyXG4gIGRyYXdCdXR0b25zXHJcbn0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudVwiO1xyXG5cclxuaW1wb3J0IHZlcnNpb24gZnJvbSBcIi4uLy4uL3BhY2thZ2UuanNvblwiO1xyXG5cclxuLyoqXHJcbiAqIFBsYXkgQnV0dG9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGxheUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbnMoXHJcbiAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcclxuICBjYW52YXMuaGVpZ2h0IC8gMiAtIDEwMCxcclxuICAyMDAsXHJcbiAgNTAsXHJcbiAgXCJQbGF5IHRoZSBnYW1lXCIsXHJcbiAgXCJ3aGl0ZVwiXHJcbik7XHJcblxyXG4vKipcclxuICogT3B0aW9ucyBCdXR0b25cclxuICovXHJcbmV4cG9ydCBjb25zdCBvcHRpb25CdXR0b24gPSBjcmVhdGVCdXR0b25zKFxyXG4gIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXHJcbiAgY2FudmFzLmhlaWdodCAvIDIgLSAyNSxcclxuICAyMDAsXHJcbiAgNTAsXHJcbiAgXCJPcHRpb25zXCIsXHJcbiAgXCJ3aGl0ZVwiXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcclxuICAvKipcclxuICAgKiBSZXRyaWV2ZSBHYW1lIFZlcnNpb25cclxuICAgKi9cclxuICBjb25zdCBnYW1lVmVyc2lvbiA9IFwiViBcIiArIHZlcnNpb24udmVyc2lvbjtcclxuXHJcbiAgLy8gRHJhdyBWZXJzaW9uIGluIGNhbnZhcyAvL1xyXG4gIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xyXG4gIGN0eC5mb250ID0gXCIxNXB4IEFyaWFsIGJsYWNrXCI7XHJcbiAgY3R4LmZpbGxUZXh0KGdhbWVWZXJzaW9uLCA1MCwgNTApO1xyXG5cclxuICAvKiogRHJhdyBidXR0b24gKi9cclxuICBkcmF3QnV0dG9ucyhwbGF5QnV0dG9uLCBvcHRpb25CdXR0b24pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBTVEFURSB9IGZyb20gXCIuLi8uLi9jb25zdC9jb25zdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb25NZW51ID0gKGFjdHVhbFN0YXRlLCBzY3JlZW5Mb2FkZWQsIHN0YXRlTG9hZGVkKSA9PiB7XHJcbiAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IGFjdHVhbFN0YXRlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHN1Y2Nlc3MsIGVycm9yKSA9PiB7XHJcbiAgICAgIGlmIChTVEFURS5nZXRUaXRsZSgpID09PSBhY3R1YWxTdGF0ZSkge1xyXG4gICAgICAgIHN1Y2Nlc3MoKCkgPT4gc2NyZWVuTG9hZGVkKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVycm9yKGNvbnNvbGUubG9nKFwiRXJyb3IsIFdyb25nIFNUQVRFIFRpdGxlXCIpKTtcclxuICAgICAgfVxyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIGlmIChTVEFURS5nZXRUaXRsZSgpID09PSBhY3R1YWxTdGF0ZSlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIFNUQVRFLnNldFRpdGxlKHN0YXRlTG9hZGVkKTtcclxuICAgICAgICAgIHNjcmVlbkxvYWRlZCgpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgICAgNTA7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4LCBjcmVhdGVDYW52YXMgfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhc1wiO1xyXG5pbXBvcnQgeyBTVEFURSB9IGZyb20gXCIuLi9jb25zdC9jb25zdFwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUJ1dHRvbnMsXHJcbiAgZHJhd0J1dHRvbnNcclxufSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51XCI7XHJcbmltcG9ydCB7IGFjdGl2YXRlSG92ZXJpbmcgfSBmcm9tIFwiLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlSG92ZXJpbmdcIjtcclxuaW1wb3J0IHsgbmF2aWdhdGlvbk1lbnUgfSBmcm9tIFwiLi9uYXZpZ2F0aW9uTWVudS9uYXZpZ2F0aW9uTWVudVwiO1xyXG5pbXBvcnQgeyBjaG9zZU1lbnUgfSBmcm9tIFwiLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlQ2xpY2tGb3JNZW51XCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tYWluTWVudVwiO1xyXG5cclxuLyoqXHJcbiAqIFJlc29sdXRpb24gQnV0dG9uXHJcbiAqL1xyXG5cclxuY29uc3QgcmVzb2x1dGlvbiA9IGNyZWF0ZUJ1dHRvbnMoXHJcbiAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcclxuICBjYW52YXMuaGVpZ2h0IC8gMiAtIDEwMCxcclxuICAyMDAsXHJcbiAgNTAsXHJcbiAgXCJSZXNvbHV0aW9uXCIsXHJcbiAgXCJ3aGl0ZVwiXHJcbik7XHJcblxyXG4vKipcclxuICogU291bmQgQnV0dG9uXHJcbiAqL1xyXG5cclxuY29uc3QgY2FuY2VsID0gY3JlYXRlQnV0dG9ucyhcclxuICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxyXG4gIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjUsXHJcbiAgMjAwLFxyXG4gIDUwLFxyXG4gIFwiQ2FuY2VsXCIsXHJcbiAgXCJ3aGl0ZVwiXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3Qgb3B0aW9uU2NyZWVuID0gKCkgPT4ge1xyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSBvbGQgY29tcG9uZW50c1xyXG4gICAqL1xyXG4gIGNyZWF0ZUNhbnZhcygpO1xyXG5cclxuICAvKiogU2V0IFN0YXRlICovXHJcbiAgU1RBVEUuc2V0VGl0bGUoXCJPcHRpb25zXCIpO1xyXG5cclxuICAvKiogRHJhdyBCdXR0b25zICovXHJcbiAgZHJhd0J1dHRvbnMocmVzb2x1dGlvbiwgY2FuY2VsKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBY3RpdmF0ZSBIb3ZlcmluZ1xyXG4gKi9cclxuXHJcbmFjdGl2YXRlSG92ZXJpbmcoXHJcbiAgKCkgPT4ge1xyXG4gICAgbmF2aWdhdGlvbk1lbnUoXCJPcHRpb25zXCIsIG9wdGlvblNjcmVlbiwgXCJPcHRpb25zXCIpO1xyXG4gIH0sXHJcbiAgcmVzb2x1dGlvbixcclxuICBjYW5jZWxcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBBY3RpdmF0ZSBDbGlja1xyXG4gKi9cclxuXHJcbmNob3NlTWVudSgoKSA9PiB7XHJcbiAgbmF2aWdhdGlvbk1lbnUoXCJPcHRpb25zXCIsIGNyZWF0ZU1lbnUsIFwiTWVudVwiKTtcclxufSwgY2FuY2VsKTtcclxuXHJcbmNob3NlTWVudSgoKSA9PiB7XHJcbiAgbmF2aWdhdGlvbk1lbnUoXCJPcHRpb25zXCIsIG9wdGlvblNjcmVlbiwgXCJPcHRpb25zXCIpO1xyXG59LCByZXNvbHV0aW9uKTtcclxuIiwiaW1wb3J0IHsgY2FudmFzLCBjdHgsIGNyZWF0ZUNhbnZhcyB9IGZyb20gXCIuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzXCI7XHJcbmltcG9ydCB7IFNUQVRFIH0gZnJvbSBcIi4uL2NvbnN0L2NvbnN0XCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQnV0dG9ucyxcclxuICBkcmF3QnV0dG9uc1xyXG59IGZyb20gXCIuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnVcIjtcclxuaW1wb3J0IHsgYWN0aXZhdGVIb3ZlcmluZyB9IGZyb20gXCIuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZ1wiO1xyXG5pbXBvcnQgeyBjaG9zZU1lbnUgfSBmcm9tIFwiLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlQ2xpY2tGb3JNZW51XCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tYWluTWVudVwiO1xyXG5pbXBvcnQgeyBuYXZpZ2F0aW9uTWVudSB9IGZyb20gXCIuL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51XCI7XHJcbmltcG9ydCB7IGNob3NlQ2FyYWN0ZXJTY3JlZW4gfSBmcm9tIFwiLi9jaG9zZUNhcmFjdGVyU2NyZWVuXCI7XHJcblxyXG4vKipcclxuICogY3JlYXRlQ2FyYWN0ZXIgQnV0dG9uXHJcbiAqL1xyXG5cclxuY29uc3QgY3JlYXRlQ2FyYWN0ZXIgPSBjcmVhdGVCdXR0b25zKFxyXG4gIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXHJcbiAgY2FudmFzLmhlaWdodCAvIDIgLSAxMDAsXHJcbiAgMjAwLFxyXG4gIDUwLFxyXG4gIFwiQ2FyYWN0ZXJcIixcclxuICBcIndoaXRlXCJcclxuKTtcclxuXHJcbmNvbnN0IGNhbmNlbCA9IGNyZWF0ZUJ1dHRvbnMoXHJcbiAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcclxuICBjYW52YXMuaGVpZ2h0IC8gMiAtIDI1LFxyXG4gIDIwMCxcclxuICA1MCxcclxuICBcIkNhbmNlbFwiLFxyXG4gIFwid2hpdGVcIlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBsYXlTY3JlZW4gPSAoKSA9PiB7XHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIG9sZCBjb21wb25lbnRzXHJcbiAgICovXHJcbiAgY3JlYXRlQ2FudmFzKCk7XHJcblxyXG4gIC8qKiBTZXQgU3RhdGUgKi9cclxuICBTVEFURS5zZXRUaXRsZShcIkluZ2FtZVwiKTtcclxuXHJcbiAgLyoqIERyYXcgQnV0dG9uICovXHJcbiAgZHJhd0J1dHRvbnMoY3JlYXRlQ2FyYWN0ZXIsIGNhbmNlbCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQWN0aXZhdGUgSG92ZXJpbmdcclxuICovXHJcblxyXG5hY3RpdmF0ZUhvdmVyaW5nKFxyXG4gICgpID0+IHtcclxuICAgIG5hdmlnYXRpb25NZW51KFwiSW5nYW1lXCIsIHBsYXlTY3JlZW4sIFwiSW5nYW1lXCIpO1xyXG4gIH0sXHJcbiAgY3JlYXRlQ2FyYWN0ZXIsXHJcbiAgY2FuY2VsXHJcbik7XHJcblxyXG4vKipcclxuICogQWN0aXZhdGUgQ2xpY2tcclxuICovXHJcblxyXG5jaG9zZU1lbnUoKCkgPT4ge1xyXG4gIG5hdmlnYXRpb25NZW51KFwiSW5nYW1lXCIsIGNob3NlQ2FyYWN0ZXJTY3JlZW4sIFwiY2hvc2VDYXJhY3RlclwiKTtcclxufSwgY3JlYXRlQ2FyYWN0ZXIpO1xyXG5cclxuY2hvc2VNZW51KCgpID0+IHtcclxuICBuYXZpZ2F0aW9uTWVudShcIkluZ2FtZVwiLCBjcmVhdGVNZW51LCBcIk1lbnVcIik7XHJcbn0sIGNhbmNlbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=