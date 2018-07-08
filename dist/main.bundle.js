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

module.exports = {"name":"rpg_js","version":"0.1.0","description":"","private":true,"scripts":{"dev":"webpack  --watch --config webpack.dev.js"},"keywords":[],"author":"Sullivan Tobias","license":"ISC","devDependencies":{"clean-webpack-plugin":"^0.1.19","css-loader":"^0.28.11","style-loader":"^0.21.0","webpack":"^4.12.0","webpack-cli":"^3.0.3","webpack-dev-server":"^3.1.4","webpack-merge":"^4.1.2"},"dependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.4","babel-preset-env":"^1.7.0","lodash":"^4.17.10"}};

/***/ }),

/***/ "./src/classes/warrior.json":
/*!**********************************!*\
  !*** ./src/classes/warrior.json ***!
  \**********************************/
/*! exports provided: Name, Life, Prot, default */
/***/ (function(module) {

module.exports = {"Name":"Warrior","Life":120,"Prot":20};

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
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);


/**
 * Get Canvas
 */

const canvas = document.querySelector("#gameWindow");
const ctx = canvas.getContext("2d")

const createCanvas = () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  /**
   * Retrieve Game Version
   */
  const gameVersion = "V " + _package_json__WEBPACK_IMPORTED_MODULE_0__.version;

  // Draw Version in canvas //
  ctx.fillStyle = "red";
  ctx.font = "15px Arial black";
  ctx.fillText(gameVersion, 50, 50);
};

createCanvas();


/***/ }),

/***/ "./src/createFunctions/createMenu.js":
/*!*******************************************!*\
  !*** ./src/createFunctions/createMenu.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCanvas.js */ "./src/createFunctions/createCanvas.js");


/**
 * Play Button
 */
const playButton = {
  x: _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
  y: _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 100,
  width: 200,
  height: 50,
  text: "Play the game",
  backgroundColor: "white"
};

/**
 * Options Button
 */
const optionButton = {
  xO: _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
  yO: _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 25,
  widthO: 200,
  heightO: 50,
  textO: "Options",
  backgroundColorO: "white"
};

let { x, y, width, height, text, backgroundColor } = playButton;

let { xO, yO, widthO, heightO, textO, backgroundColorO } = optionButton;

let state = "Menu";

const createMenu = () => {
  if (state === "Menu") {
    /**
     * Menu
     */

    /**Play */
    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = backgroundColor;
    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(x, y, width, height);

    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "grey";
    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = "7";
    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(x, y, width, height);

    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "23px Arial Black";
    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(text, x + 10, y + height / 2 + 5);

    /**Options */
    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = backgroundColorO;
    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(xO, yO, widthO, heightO);

    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = "grey";
    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = "7";
    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(xO, yO, widthO, heightO);

    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "23px Arial Black";
    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(textO, xO + 50, yO + heightO / 2 + 5);
  }
};
createMenu();

const changeColor = () => {
  if (state === "Menu") {
    /**
     * Click event
     */

    _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].addEventListener("mousemove", e => {
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
        //console.log("Options");
      } else {
        backgroundColorO = "white";
      }
      createMenu();
    });
  }
};
changeColor();

const clickOnButtons = () => {
  _createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].addEventListener("click", e => {
    e.preventDefault();
    if (
      e.clientX > x &&
      e.clientX < x + width + 14 &&
      (e.clientY > y && e.clientY < y + (height + 14))
    ) {
      Object(_createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();
      state = "Ingame";
    }

    if (
      e.clientX > xO &&
      e.clientX < xO + widthO + 14 &&
      (e.clientY > yO && e.clientY < yO + (heightO + 14))
    ) {
      Object(_createCanvas_js__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();
      state = "Options";
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
/* harmony import */ var _createCaracter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCaracter.js */ "./src/createCaracter.js");
/* harmony import */ var _createFunctions_createCanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createFunctions/createCanvas.js */ "./src/createFunctions/createCanvas.js");
/* harmony import */ var _createFunctions_createMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createFunctions/createMenu.js */ "./src/createFunctions/createMenu.js");
/**
 * Testing Phase for warrior class.
 */





/**
 * Testing Button Create for later.
 */

const createWarrior = document.querySelector("#warrior");
createWarrior.addEventListener("click", function() {
  // Creating The Warrior //
  Object(_createCaracter_js__WEBPACK_IMPORTED_MODULE_0__["makeWarrior"])();
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUNhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhcnJpb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmtCOztBQUVsQjtBQUNBOztBQUVBLE9BQU8sMkJBQTJCO0FBQ2xDO0FBQ0EsV0FBVyxZQUFZLFlBQVk7QUFDbkM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUssNkNBQTZDOztBQUVsRCxLQUFLLG1EQUFtRDs7QUFFeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSEE7QUFBQTtBQUNBO0FBQ0E7O0FBRXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IFdhcnJpb3IgfSBmcm9tIFwiLi93YXJyaW9yLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBtYWtlV2FycmlvciA9ICgpID0+IHtcbiAgY29uc3Qgb25lV2FycmlvciA9IG5ldyBXYXJyaW9yKCk7XG5cbiAgbGV0IHsgd2FycmlvckxpZmUsIHdhcnJpb3JQcm90IH0gPSBvbmVXYXJyaW9yO1xuICBjb25zdCB3YXJyaW9ycmVzdW1lID0gYFdhcnJpb3IgQ3JlYXRlZCB8XG4gIExpZmUgOiAke3dhcnJpb3JMaWZlfSAvIFByb3QgOiAke3dhcnJpb3JQcm90fVxuICBgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3VtZVwiKS5pbm5lckhUTUwgPSB3YXJyaW9ycmVzdW1lO1xufTtcbiIsImltcG9ydCB2ZXJzaW9uIGZyb20gXCIuLi8uLi9wYWNrYWdlLmpzb25cIjtcblxuLyoqXG4gKiBHZXQgQ2FudmFzXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZVdpbmRvd1wiKTtcbmV4cG9ydCBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDYW52YXMgPSAoKSA9PiB7XG4gIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAvKipcbiAgICogUmV0cmlldmUgR2FtZSBWZXJzaW9uXG4gICAqL1xuICBjb25zdCBnYW1lVmVyc2lvbiA9IFwiViBcIiArIHZlcnNpb24udmVyc2lvbjtcblxuICAvLyBEcmF3IFZlcnNpb24gaW4gY2FudmFzIC8vXG4gIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICBjdHguZm9udCA9IFwiMTVweCBBcmlhbCBibGFja1wiO1xuICBjdHguZmlsbFRleHQoZ2FtZVZlcnNpb24sIDUwLCA1MCk7XG59O1xuXG5jcmVhdGVDYW52YXMoKTtcbiIsImltcG9ydCB7IGNyZWF0ZUNhbnZhcywgY3R4LCBjYW52YXMgfSBmcm9tIFwiLi9jcmVhdGVDYW52YXMuanNcIjtcblxuLyoqXG4gKiBQbGF5IEJ1dHRvblxuICovXG5jb25zdCBwbGF5QnV0dG9uID0ge1xuICB4OiBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxuICB5OiBjYW52YXMuaGVpZ2h0IC8gMiAtIDEwMCxcbiAgd2lkdGg6IDIwMCxcbiAgaGVpZ2h0OiA1MCxcbiAgdGV4dDogXCJQbGF5IHRoZSBnYW1lXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiXG59O1xuXG4vKipcbiAqIE9wdGlvbnMgQnV0dG9uXG4gKi9cbmNvbnN0IG9wdGlvbkJ1dHRvbiA9IHtcbiAgeE86IGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXG4gIHlPOiBjYW52YXMuaGVpZ2h0IC8gMiAtIDI1LFxuICB3aWR0aE86IDIwMCxcbiAgaGVpZ2h0TzogNTAsXG4gIHRleHRPOiBcIk9wdGlvbnNcIixcbiAgYmFja2dyb3VuZENvbG9yTzogXCJ3aGl0ZVwiXG59O1xuXG5sZXQgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0ZXh0LCBiYWNrZ3JvdW5kQ29sb3IgfSA9IHBsYXlCdXR0b247XG5cbmxldCB7IHhPLCB5Tywgd2lkdGhPLCBoZWlnaHRPLCB0ZXh0TywgYmFja2dyb3VuZENvbG9yTyB9ID0gb3B0aW9uQnV0dG9uO1xuXG5sZXQgc3RhdGUgPSBcIk1lbnVcIjtcblxuY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgaWYgKHN0YXRlID09PSBcIk1lbnVcIikge1xuICAgIC8qKlxuICAgICAqIE1lbnVcbiAgICAgKi9cblxuICAgIC8qKlBsYXkgKi9cbiAgICBjdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZENvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JleVwiO1xuICAgIGN0eC5saW5lV2lkdGggPSBcIjdcIjtcbiAgICBjdHguc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmZvbnQgPSBcIjIzcHggQXJpYWwgQmxhY2tcIjtcbiAgICBjdHguZmlsbFRleHQodGV4dCwgeCArIDEwLCB5ICsgaGVpZ2h0IC8gMiArIDUpO1xuXG4gICAgLyoqT3B0aW9ucyAqL1xuICAgIGN0eC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kQ29sb3JPO1xuICAgIGN0eC5maWxsUmVjdCh4TywgeU8sIHdpZHRoTywgaGVpZ2h0Tyk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZXlcIjtcbiAgICBjdHgubGluZVdpZHRoID0gXCI3XCI7XG4gICAgY3R4LnN0cm9rZVJlY3QoeE8sIHlPLCB3aWR0aE8sIGhlaWdodE8pO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHguZm9udCA9IFwiMjNweCBBcmlhbCBCbGFja1wiO1xuICAgIGN0eC5maWxsVGV4dCh0ZXh0TywgeE8gKyA1MCwgeU8gKyBoZWlnaHRPIC8gMiArIDUpO1xuICB9XG59O1xuY3JlYXRlTWVudSgpO1xuXG5jb25zdCBjaGFuZ2VDb2xvciA9ICgpID0+IHtcbiAgaWYgKHN0YXRlID09PSBcIk1lbnVcIikge1xuICAgIC8qKlxuICAgICAqIENsaWNrIGV2ZW50XG4gICAgICovXG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChcbiAgICAgICAgZS5jbGllbnRYID4geCAmJlxuICAgICAgICBlLmNsaWVudFggPCB4ICsgd2lkdGggKyAxNCAmJlxuICAgICAgICAoZS5jbGllbnRZID4geSAmJiBlLmNsaWVudFkgPCB5ICsgKGhlaWdodCArIDE0KSlcbiAgICAgICkge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUGxheVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBlLmNsaWVudFggPiB4TyAmJlxuICAgICAgICBlLmNsaWVudFggPCB4TyArIHdpZHRoTyArIDE0ICYmXG4gICAgICAgIChlLmNsaWVudFkgPiB5TyAmJiBlLmNsaWVudFkgPCB5TyArIChoZWlnaHRPICsgMTQpKVxuICAgICAgKSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvck8gPSBcInJlZFwiO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiT3B0aW9uc1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvck8gPSBcIndoaXRlXCI7XG4gICAgICB9XG4gICAgICBjcmVhdGVNZW51KCk7XG4gICAgfSk7XG4gIH1cbn07XG5jaGFuZ2VDb2xvcigpO1xuXG5jb25zdCBjbGlja09uQnV0dG9ucyA9ICgpID0+IHtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKFxuICAgICAgZS5jbGllbnRYID4geCAmJlxuICAgICAgZS5jbGllbnRYIDwgeCArIHdpZHRoICsgMTQgJiZcbiAgICAgIChlLmNsaWVudFkgPiB5ICYmIGUuY2xpZW50WSA8IHkgKyAoaGVpZ2h0ICsgMTQpKVxuICAgICkge1xuICAgICAgY3JlYXRlQ2FudmFzKCk7XG4gICAgICBzdGF0ZSA9IFwiSW5nYW1lXCI7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZS5jbGllbnRYID4geE8gJiZcbiAgICAgIGUuY2xpZW50WCA8IHhPICsgd2lkdGhPICsgMTQgJiZcbiAgICAgIChlLmNsaWVudFkgPiB5TyAmJiBlLmNsaWVudFkgPCB5TyArIChoZWlnaHRPICsgMTQpKVxuICAgICkge1xuICAgICAgY3JlYXRlQ2FudmFzKCk7XG4gICAgICBzdGF0ZSA9IFwiT3B0aW9uc1wiO1xuICAgIH1cbiAgfSk7XG59O1xuY2xpY2tPbkJ1dHRvbnMoKTtcbiIsIi8qKlxuICogVGVzdGluZyBQaGFzZSBmb3Igd2FycmlvciBjbGFzcy5cbiAqL1xuXG5pbXBvcnQgeyBtYWtlV2FycmlvciB9IGZyb20gXCIuL2NyZWF0ZUNhcmFjdGVyLmpzXCI7XG5pbXBvcnQgQ3JlYXRlQ2FudmFzIGZyb20gJy4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhcy5qcyc7XG5pbXBvcnQgJy4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZU1lbnUuanMnO1xuXG4vKipcbiAqIFRlc3RpbmcgQnV0dG9uIENyZWF0ZSBmb3IgbGF0ZXIuXG4gKi9cblxuY29uc3QgY3JlYXRlV2FycmlvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2FycmlvclwiKTtcbmNyZWF0ZVdhcnJpb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAvLyBDcmVhdGluZyBUaGUgV2FycmlvciAvL1xuICBtYWtlV2FycmlvcigpO1xufSk7XG4iLCJpbXBvcnQgV2FycmlvcnMgZnJvbSBcIi4vY2xhc3Nlcy93YXJyaW9yLmpzb25cIjtcblxuZXhwb3J0IGNsYXNzIFdhcnJpb3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpZmUgPSBXYXJyaW9ycy5MaWZlO1xuICAgIHRoaXMucHJvdCA9IFdhcnJpb3JzLlByb3Q7XG4gIH1cblxuICBnZXQgd2FycmlvckxpZmUgKCkge1xuICAgIHJldHVybiAodGhpcy5saWZlID8gdGhpcy5saWZlIDogbnVsbClcbiAgfVxuXG4gIGdldCB3YXJyaW9yUHJvdCAoKSB7XG4gICAgcmV0dXJuICh0aGlzLnByb3QgPyB0aGlzLnByb3QgOiBudWxsKVxuICB9XG5cbiAgc2V0IHdhcnJpb3JMaWZlKG5ld0xpZmUpIHtcbiAgICBuZXdMaWZlID8gdGhpcy5saWZlID0gbmV3TGlmZSA6IG51bGw7XG4gIH1cblxuICBzZXQgd2FycmlvclByb3QobmV3UHJvdCkge1xuICAgIG5ld1Byb3QgPyB0aGlzLnByb3QgPSBuZXdQcm90IDogbnVsbDtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9