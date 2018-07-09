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

module.exports = {"name":"rpg_js","version":"0.1.0","description":"","private":true,"scripts":{"dev":"webpack  --watch --config webpack.dev.js"},"keywords":[],"author":"Sullivan Tobias","license":"ISC","devDependencies":{"clean-webpack-plugin":"^0.1.19","css-loader":"^0.28.11","style-loader":"^0.21.0","webpack":"^4.12.0","webpack-cli":"^3.0.3","webpack-dev-server":"^3.1.4","webpack-merge":"^4.1.2"},"dependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.4","babel-preset-env":"^1.7.0"}};

/***/ }),

/***/ "./src/classes/warrior.json":
/*!**********************************!*\
  !*** ./src/classes/warrior.json ***!
  \**********************************/
/*! exports provided: Name, Life, Prot, default */
/***/ (function(module) {

module.exports = {"Name":"Warrior","Life":120,"Prot":20};

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

/***/ "./src/createCaracter.js":
/*!*******************************!*\
  !*** ./src/createCaracter.js ***!
  \*******************************/
/*! exports provided: makeWarrior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeWarrior", function() { return makeWarrior; });
/* harmony import */ var _warrior_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warrior.js */ "./src/warrior.js");


const makeWarrior = () => {
  const oneWarrior = new _warrior_js__WEBPACK_IMPORTED_MODULE_0__["Warrior"]();

  let { warriorLife, warriorProt } = oneWarrior;
  const warriorresume = `Warrior Created |
  Life : ${warriorLife} / Prot : ${warriorProt}
  `;
  document.querySelector("#resume").innerHTML = warriorresume;
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
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);
/* harmony import */ var _createCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCanvas */ "./src/createFunctions/createCanvas.js");
/* harmony import */ var _screens_playScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../screens/playScreen */ "./src/screens/playScreen.js");
/* harmony import */ var _screens_optionsScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../screens/optionsScreen */ "./src/screens/optionsScreen.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../const/const */ "./src/const/const.js");






/**
 * Play Button
 */
const playButton = {
  x: _createCanvas__WEBPACK_IMPORTED_MODULE_1__["canvas"].width / 2 - 100,
  y: _createCanvas__WEBPACK_IMPORTED_MODULE_1__["canvas"].height / 2 - 100,
  width: 200,
  height: 50,
  text: "Play the game",
  backgroundColor: "white"
};

/**
 * Options Button
 */
const optionButton = {
  xO: _createCanvas__WEBPACK_IMPORTED_MODULE_1__["canvas"].width / 2 - 100,
  yO: _createCanvas__WEBPACK_IMPORTED_MODULE_1__["canvas"].height / 2 - 25,
  widthO: 200,
  heightO: 50,
  textO: "Options",
  backgroundColorO: "white"
};

let { x, y, width, height, text, backgroundColor } = playButton;

let { xO, yO, widthO, heightO, textO, backgroundColorO } = optionButton;

const createMenu = () => {
  if (_const_const__WEBPACK_IMPORTED_MODULE_4__["STATE"].getTitle() === "Menu") {
    /**
     * Retrieve Game Version
     */

      const gameVersion = "V " + _package_json__WEBPACK_IMPORTED_MODULE_0__.version;

      // Draw Version in canvas //
      _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].fillStyle = "red";
      _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].font = "15px Arial black";
      _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].fillText(gameVersion, 50, 50);

    /**
     * Menu
     */

    /**Play */
    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].fillStyle = backgroundColor;
    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].fillRect(x, y, width, height);

    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].strokeStyle = "grey";
    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].lineWidth = "7";
    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].strokeRect(x, y, width, height);

    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].fillStyle = "black";
    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].font = "23px Arial Black";
    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].fillText(text, x + 10, y + height / 2 + 5);

    /**Options */
    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].fillStyle = backgroundColorO;
    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].fillRect(xO, yO, widthO, heightO);

    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].strokeStyle = "grey";
    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].lineWidth = "7";
    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].strokeRect(xO, yO, widthO, heightO);

    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].fillStyle = "black";
    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].font = "23px Arial Black";
    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].fillText(textO, xO + 50, yO + heightO / 2 + 5);
  }
};
Object(_createCanvas__WEBPACK_IMPORTED_MODULE_1__["createCanvas"])();
createMenu();

const changeColor = () => {
  if (_const_const__WEBPACK_IMPORTED_MODULE_4__["STATE"].getTitle() === "Menu") {
    /**
     * Click event
     */

    _createCanvas__WEBPACK_IMPORTED_MODULE_1__["canvas"].addEventListener("mousemove", e => {
      e.preventDefault();
      if (
        e.clientX > x &&
        e.clientX < x + width + 14 &&
        (e.clientY > y && e.clientY < y + (height + 14))
      ) {
        backgroundColor = "red";
        //console.log("Play");
      } else {
        backgroundColor = "white";
      }

      if (
        e.clientX > xO &&
        e.clientX < xO + widthO + 14 &&
        (e.clientY > yO && e.clientY < yO + (heightO + 14))
      ) {
        backgroundColorO = "red";
      } else {
        backgroundColorO = "white";
      }
      createMenu();
    });
  }
};

changeColor();

const clickOnButtons = () => {
  _createCanvas__WEBPACK_IMPORTED_MODULE_1__["canvas"].addEventListener("click", e => {
    e.preventDefault();
    if (_const_const__WEBPACK_IMPORTED_MODULE_4__["STATE"].getTitle() === "Menu") {
      if (
        e.clientX > x &&
        e.clientX < x + width + 14 &&
        (e.clientY > y && e.clientY < y + (height + 14))
      ) {
        Object(_screens_playScreen__WEBPACK_IMPORTED_MODULE_2__["default"])();
      }

      if (
        e.clientX > xO &&
        e.clientX < xO + widthO + 14 &&
        (e.clientY > yO && e.clientY < yO + (heightO + 14))
      ) {
        Object(_screens_optionsScreen__WEBPACK_IMPORTED_MODULE_3__["default"])();
      }
    }
  });
};

clickOnButtons();


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createCaracter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCaracter */ "./src/createCaracter.js");
/* harmony import */ var _createFunctions_createMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createFunctions/createMenu */ "./src/createFunctions/createMenu.js");
/**
 * Testing Phase for warrior class.
 */




/**
 * Testing Button Create for later.
 */

const createWarrior = document.querySelector("#warrior");
createWarrior.addEventListener("click", function() {
  // Creating The Warrior //
  Object(_createCaracter__WEBPACK_IMPORTED_MODULE_0__["makeWarrior"])();
});


/***/ }),

/***/ "./src/screens/optionsScreen.js":
/*!**************************************!*\
  !*** ./src/screens/optionsScreen.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createFunctions/createCanvas */ "./src/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/const */ "./src/const/const.js");



const optionsScreen = () => {
  // Reload Canvas //
  Object(_createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();
  // Set the Ingame State //
  _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].setTitle("Options");
};

/* harmony default export */ __webpack_exports__["default"] = (optionsScreen);


/***/ }),

/***/ "./src/screens/playScreen.js":
/*!***********************************!*\
  !*** ./src/screens/playScreen.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createFunctions/createCanvas */ "./src/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/const */ "./src/const/const.js");



/**
 * Options Button
 */
const playScreenButton = {
  x: _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
  y: _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 25,
  width: 220,
  height: 50,
  text: "Create Caracter",
  backgroundColor: "white"
};

let { x, y, width, height, text, backgroundColor } = playScreenButton;

const playScreen = () => {
  Object(_createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();
  _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].setTitle("Ingame");

  /**Play */
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = backgroundColor;
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(x, y, width, height);

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "grey";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = "7";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(x, y, width, height);

  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "23px Arial Black";
  _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(text, x + 10, y + height / 2 + 5);
};

/* harmony default export */ __webpack_exports__["default"] = (playScreen);


/***/ }),

/***/ "./src/warrior.js":
/*!************************!*\
  !*** ./src/warrior.js ***!
  \************************/
/*! exports provided: Warrior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Warrior", function() { return Warrior; });
/* harmony import */ var _classes_warrior_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/warrior.json */ "./src/classes/warrior.json");
var _classes_warrior_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./classes/warrior.json */ "./src/classes/warrior.json", 1);


class Warrior {
  constructor() {
    this.life = _classes_warrior_json__WEBPACK_IMPORTED_MODULE_0__.Life;
    this.prot = _classes_warrior_json__WEBPACK_IMPORTED_MODULE_0__.Prot;
  }

  get warriorLife () {
    return (this.life ? this.life : null)
  }

  get warriorProt () {
    return (this.prot ? this.prot : null)
  }

  set warriorLife(newLife) {
    newLife ? this.life = newLife : null;
  }

  set warriorProt(newProt) {
    newProt ? this.prot = newProt : null;
  }

}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0L2NvbnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVDYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL29wdGlvbnNTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvcGxheVNjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Fycmlvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCa0I7O0FBRWxCO0FBQ0E7O0FBRUEsT0FBTywyQkFBMkI7QUFDbEM7QUFDQSxXQUFXLFlBQVksWUFBWTtBQUNuQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNvQztBQUNwQztBQUNBO0FBQ2dCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSyw2Q0FBNkM7O0FBRWxELEtBQUssbURBQW1EOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDeklBO0FBQUE7QUFDQTtBQUNBOztBQUVzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZm9CO0FBQ1A7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVm9DO0FBQ3BCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUssNkNBQTZDOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogRGVjbGFyaW5nIHVzZWZ1bCB2YXJpYWJsZXNcbiAqL1xuXG5leHBvcnQgbGV0IFNUQVRFID0ge1xuICBpZDogMSxcblxuICBUaXRsZTogXCJNZW51XCIsXG5cbiAgc2V0VGl0bGUobmV3VGl0bGUpIHtcbiAgICB0aGlzLlRpdGxlID0gbmV3VGl0bGU7XG4gIH0sXG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuVGl0bGU7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBXYXJyaW9yIH0gZnJvbSBcIi4vd2Fycmlvci5qc1wiO1xuXG5leHBvcnQgY29uc3QgbWFrZVdhcnJpb3IgPSAoKSA9PiB7XG4gIGNvbnN0IG9uZVdhcnJpb3IgPSBuZXcgV2FycmlvcigpO1xuXG4gIGxldCB7IHdhcnJpb3JMaWZlLCB3YXJyaW9yUHJvdCB9ID0gb25lV2FycmlvcjtcbiAgY29uc3Qgd2FycmlvcnJlc3VtZSA9IGBXYXJyaW9yIENyZWF0ZWQgfFxuICBMaWZlIDogJHt3YXJyaW9yTGlmZX0gLyBQcm90IDogJHt3YXJyaW9yUHJvdH1cbiAgYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXN1bWVcIikuaW5uZXJIVE1MID0gd2FycmlvcnJlc3VtZTtcbn07XG4iLCIvKipcbiAqIEdldCBDYW52YXNcbiAqL1xuXG5leHBvcnQgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lV2luZG93XCIpO1xuZXhwb3J0IGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDYW52YXMgPSAoKSA9PiB7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xufTtcbiIsImltcG9ydCB2ZXJzaW9uIGZyb20gXCIuLi8uLi9wYWNrYWdlLmpzb25cIjtcbmltcG9ydCB7IGNyZWF0ZUNhbnZhcywgY3R4LCBjYW52YXMgfSBmcm9tIFwiLi9jcmVhdGVDYW52YXNcIjtcbmltcG9ydCBQbGF5U2NyZWVuIGZyb20gXCIuLi9zY3JlZW5zL3BsYXlTY3JlZW5cIjtcbmltcG9ydCBPcHRpb25zU2NyZWVuIGZyb20gXCIuLi9zY3JlZW5zL29wdGlvbnNTY3JlZW5cIjtcbmltcG9ydCB7IFNUQVRFIH0gZnJvbSBcIi4uL2NvbnN0L2NvbnN0XCI7XG5cbi8qKlxuICogUGxheSBCdXR0b25cbiAqL1xuY29uc3QgcGxheUJ1dHRvbiA9IHtcbiAgeDogY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgeTogY2FudmFzLmhlaWdodCAvIDIgLSAxMDAsXG4gIHdpZHRoOiAyMDAsXG4gIGhlaWdodDogNTAsXG4gIHRleHQ6IFwiUGxheSB0aGUgZ2FtZVwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIlxufTtcblxuLyoqXG4gKiBPcHRpb25zIEJ1dHRvblxuICovXG5jb25zdCBvcHRpb25CdXR0b24gPSB7XG4gIHhPOiBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxuICB5TzogY2FudmFzLmhlaWdodCAvIDIgLSAyNSxcbiAgd2lkdGhPOiAyMDAsXG4gIGhlaWdodE86IDUwLFxuICB0ZXh0TzogXCJPcHRpb25zXCIsXG4gIGJhY2tncm91bmRDb2xvck86IFwid2hpdGVcIlxufTtcblxubGV0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCwgdGV4dCwgYmFja2dyb3VuZENvbG9yIH0gPSBwbGF5QnV0dG9uO1xuXG5sZXQgeyB4TywgeU8sIHdpZHRoTywgaGVpZ2h0TywgdGV4dE8sIGJhY2tncm91bmRDb2xvck8gfSA9IG9wdGlvbkJ1dHRvbjtcblxuY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IFwiTWVudVwiKSB7XG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgR2FtZSBWZXJzaW9uXG4gICAgICovXG5cbiAgICAgIGNvbnN0IGdhbWVWZXJzaW9uID0gXCJWIFwiICsgdmVyc2lvbi52ZXJzaW9uO1xuXG4gICAgICAvLyBEcmF3IFZlcnNpb24gaW4gY2FudmFzIC8vXG4gICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgIGN0eC5mb250ID0gXCIxNXB4IEFyaWFsIGJsYWNrXCI7XG4gICAgICBjdHguZmlsbFRleHQoZ2FtZVZlcnNpb24sIDUwLCA1MCk7XG5cbiAgICAvKipcbiAgICAgKiBNZW51XG4gICAgICovXG5cbiAgICAvKipQbGF5ICovXG4gICAgY3R4LmZpbGxTdHlsZSA9IGJhY2tncm91bmRDb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZXlcIjtcbiAgICBjdHgubGluZVdpZHRoID0gXCI3XCI7XG4gICAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5mb250ID0gXCIyM3B4IEFyaWFsIEJsYWNrXCI7XG4gICAgY3R4LmZpbGxUZXh0KHRleHQsIHggKyAxMCwgeSArIGhlaWdodCAvIDIgKyA1KTtcblxuICAgIC8qKk9wdGlvbnMgKi9cbiAgICBjdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZENvbG9yTztcbiAgICBjdHguZmlsbFJlY3QoeE8sIHlPLCB3aWR0aE8sIGhlaWdodE8pO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJncmV5XCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IFwiN1wiO1xuICAgIGN0eC5zdHJva2VSZWN0KHhPLCB5Tywgd2lkdGhPLCBoZWlnaHRPKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmZvbnQgPSBcIjIzcHggQXJpYWwgQmxhY2tcIjtcbiAgICBjdHguZmlsbFRleHQodGV4dE8sIHhPICsgNTAsIHlPICsgaGVpZ2h0TyAvIDIgKyA1KTtcbiAgfVxufTtcbmNyZWF0ZUNhbnZhcygpO1xuY3JlYXRlTWVudSgpO1xuXG5jb25zdCBjaGFuZ2VDb2xvciA9ICgpID0+IHtcbiAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IFwiTWVudVwiKSB7XG4gICAgLyoqXG4gICAgICogQ2xpY2sgZXZlbnRcbiAgICAgKi9cblxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKFxuICAgICAgICBlLmNsaWVudFggPiB4ICYmXG4gICAgICAgIGUuY2xpZW50WCA8IHggKyB3aWR0aCArIDE0ICYmXG4gICAgICAgIChlLmNsaWVudFkgPiB5ICYmIGUuY2xpZW50WSA8IHkgKyAoaGVpZ2h0ICsgMTQpKVxuICAgICAgKSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJQbGF5XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGUuY2xpZW50WCA+IHhPICYmXG4gICAgICAgIGUuY2xpZW50WCA8IHhPICsgd2lkdGhPICsgMTQgJiZcbiAgICAgICAgKGUuY2xpZW50WSA+IHlPICYmIGUuY2xpZW50WSA8IHlPICsgKGhlaWdodE8gKyAxNCkpXG4gICAgICApIHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yTyA9IFwicmVkXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JPID0gXCJ3aGl0ZVwiO1xuICAgICAgfVxuICAgICAgY3JlYXRlTWVudSgpO1xuICAgIH0pO1xuICB9XG59O1xuXG5jaGFuZ2VDb2xvcigpO1xuXG5jb25zdCBjbGlja09uQnV0dG9ucyA9ICgpID0+IHtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IFwiTWVudVwiKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGUuY2xpZW50WCA+IHggJiZcbiAgICAgICAgZS5jbGllbnRYIDwgeCArIHdpZHRoICsgMTQgJiZcbiAgICAgICAgKGUuY2xpZW50WSA+IHkgJiYgZS5jbGllbnRZIDwgeSArIChoZWlnaHQgKyAxNCkpXG4gICAgICApIHtcbiAgICAgICAgUGxheVNjcmVlbigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGUuY2xpZW50WCA+IHhPICYmXG4gICAgICAgIGUuY2xpZW50WCA8IHhPICsgd2lkdGhPICsgMTQgJiZcbiAgICAgICAgKGUuY2xpZW50WSA+IHlPICYmIGUuY2xpZW50WSA8IHlPICsgKGhlaWdodE8gKyAxNCkpXG4gICAgICApIHtcbiAgICAgICAgT3B0aW9uc1NjcmVlbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5jbGlja09uQnV0dG9ucygpO1xuIiwiLyoqXG4gKiBUZXN0aW5nIFBoYXNlIGZvciB3YXJyaW9yIGNsYXNzLlxuICovXG5cbmltcG9ydCB7IG1ha2VXYXJyaW9yIH0gZnJvbSBcIi4vY3JlYXRlQ2FyYWN0ZXJcIjtcbmltcG9ydCAnLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlTWVudSc7XG5cbi8qKlxuICogVGVzdGluZyBCdXR0b24gQ3JlYXRlIGZvciBsYXRlci5cbiAqL1xuXG5jb25zdCBjcmVhdGVXYXJyaW9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3YXJyaW9yXCIpO1xuY3JlYXRlV2Fycmlvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gIC8vIENyZWF0aW5nIFRoZSBXYXJyaW9yIC8vXG4gIG1ha2VXYXJyaW9yKCk7XG59KTtcbiIsImltcG9ydCB7Y3JlYXRlQ2FudmFzfSBmcm9tIFwiLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhc1wiO1xuaW1wb3J0IHtTVEFURX0gZnJvbSBcIi4uL2NvbnN0L2NvbnN0XCI7XG5cbmNvbnN0IG9wdGlvbnNTY3JlZW4gPSAoKSA9PiB7XG4gIC8vIFJlbG9hZCBDYW52YXMgLy9cbiAgY3JlYXRlQ2FudmFzKCk7XG4gIC8vIFNldCB0aGUgSW5nYW1lIFN0YXRlIC8vXG4gIFNUQVRFLnNldFRpdGxlKFwiT3B0aW9uc1wiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbnNTY3JlZW47XG4iLCJpbXBvcnQgeyBjcmVhdGVDYW52YXMsIGNhbnZhcywgY3R4IH0gZnJvbSBcIi4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXNcIjtcbmltcG9ydCB7IFNUQVRFIH0gZnJvbSBcIi4uL2NvbnN0L2NvbnN0XCI7XG5cbi8qKlxuICogT3B0aW9ucyBCdXR0b25cbiAqL1xuY29uc3QgcGxheVNjcmVlbkJ1dHRvbiA9IHtcbiAgeDogY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgeTogY2FudmFzLmhlaWdodCAvIDIgLSAyNSxcbiAgd2lkdGg6IDIyMCxcbiAgaGVpZ2h0OiA1MCxcbiAgdGV4dDogXCJDcmVhdGUgQ2FyYWN0ZXJcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJcbn07XG5cbmxldCB7IHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHQsIGJhY2tncm91bmRDb2xvciB9ID0gcGxheVNjcmVlbkJ1dHRvbjtcblxuY29uc3QgcGxheVNjcmVlbiA9ICgpID0+IHtcbiAgY3JlYXRlQ2FudmFzKCk7XG4gIFNUQVRFLnNldFRpdGxlKFwiSW5nYW1lXCIpO1xuXG4gIC8qKlBsYXkgKi9cbiAgY3R4LmZpbGxTdHlsZSA9IGJhY2tncm91bmRDb2xvcjtcbiAgY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JleVwiO1xuICBjdHgubGluZVdpZHRoID0gXCI3XCI7XG4gIGN0eC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gIGN0eC5mb250ID0gXCIyM3B4IEFyaWFsIEJsYWNrXCI7XG4gIGN0eC5maWxsVGV4dCh0ZXh0LCB4ICsgMTAsIHkgKyBoZWlnaHQgLyAyICsgNSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwbGF5U2NyZWVuO1xuIiwiaW1wb3J0IFdhcnJpb3JzIGZyb20gXCIuL2NsYXNzZXMvd2Fycmlvci5qc29uXCI7XG5cbmV4cG9ydCBjbGFzcyBXYXJyaW9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saWZlID0gV2FycmlvcnMuTGlmZTtcbiAgICB0aGlzLnByb3QgPSBXYXJyaW9ycy5Qcm90O1xuICB9XG5cbiAgZ2V0IHdhcnJpb3JMaWZlICgpIHtcbiAgICByZXR1cm4gKHRoaXMubGlmZSA/IHRoaXMubGlmZSA6IG51bGwpXG4gIH1cblxuICBnZXQgd2FycmlvclByb3QgKCkge1xuICAgIHJldHVybiAodGhpcy5wcm90ID8gdGhpcy5wcm90IDogbnVsbClcbiAgfVxuXG4gIHNldCB3YXJyaW9yTGlmZShuZXdMaWZlKSB7XG4gICAgbmV3TGlmZSA/IHRoaXMubGlmZSA9IG5ld0xpZmUgOiBudWxsO1xuICB9XG5cbiAgc2V0IHdhcnJpb3JQcm90KG5ld1Byb3QpIHtcbiAgICBuZXdQcm90ID8gdGhpcy5wcm90ID0gbmV3UHJvdCA6IG51bGw7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==