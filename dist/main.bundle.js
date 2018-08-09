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

/***/ "./src/classes/mage/mage.js":
/*!**********************************!*\
  !*** ./src/classes/mage/mage.js ***!
  \**********************************/
/*! exports provided: Mage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mage", function() { return Mage; });
/* harmony import */ var _mage_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mage.json */ "./src/classes/mage/mage.json");
var _mage_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mage.json */ "./src/classes/mage/mage.json", 1);
/* harmony import */ var _templates_caracters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/caracters */ "./src/classes/templates/caracters.js");



/**
 * @class Warrior
 */
class Mage extends _templates_caracters__WEBPACK_IMPORTED_MODULE_1__["Caracters"] {
   /**
    * @constructor
    */
   constructor() {
      super();

      this.name = _mage_json__WEBPACK_IMPORTED_MODULE_0__.Name;
      this.life = _mage_json__WEBPACK_IMPORTED_MODULE_0__.Life;
      this.prot = _mage_json__WEBPACK_IMPORTED_MODULE_0__.Prot;
      this.resume = _mage_json__WEBPACK_IMPORTED_MODULE_0__.Resume;
   }
}


/***/ }),

/***/ "./src/classes/mage/mage.json":
/*!************************************!*\
  !*** ./src/classes/mage/mage.json ***!
  \************************************/
/*! exports provided: Name, Life, Prot, Resume, default */
/***/ (function(module) {

module.exports = {"Name":"Mage","Life":80,"Prot":5,"Resume":"Lorem Ipsum"};

/***/ }),

/***/ "./src/classes/templates/caracters.js":
/*!********************************************!*\
  !*** ./src/classes/templates/caracters.js ***!
  \********************************************/
/*! exports provided: Caracters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Caracters", function() { return Caracters; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createFunctions/createCanvas */ "./src/createFunctions/createCanvas.js");


/**
 * @class Caracters
 */
class Caracters {
   /**
    * @constructor
    * @param  {String} name
    * @param  {int} life
    * @param  {int} prot
    * @param  {String} resume
    */
   constructor() {
      /** abstract contructor */
      if (new.target === Caracters) {
         throw new TypeError('Cannot construct Caracters instances directly');
      }

      this.name = '';
      this.life = 0;
      this.prot = 0;
      this.resume = '';
   }

   /**
    * @return {String} name
    */
   get getName() {
      return this.name;
   }
   /**
    * @return {int} life
    */
   get getLife() {
      return this.life;
   }
   /**
    * @return {int} prot
    */
   get getProt() {
      return this.prot;
   }
   /**
    * @return {String} resume
    */
   get getResume() {
      return this.resume;
   }

   /**
    * @method drawContent
    * @param {String} name
    * @param {int} life
    * @param {int} prot
    * @param {String} resume
    */
   drawContent(name, life, prot, resume) {
      /**
       * warrior title
       */
      _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = 'lightblue';
      _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = '50px Arial black';
      const title = name;
      const metrics = _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].measureText(name);
      const width = metrics.width;

      const position = _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - width / 2 - 25;
      _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(title, position, 50);

      /**
       * frame
       */
      const frame = {
         x: 20,
         y: 20,
         width: 200,
         height: 500,
      };

      _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].rect(frame.x, frame.y, frame.width, frame.height);
      _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].stroke();
      /**
       * contentFrame
       */

      const contentFrame = {
         x: frame.width / 2,
         y: frame.height / 2,

         /** array for content */
         content: [`Class: ${name}`, `Life: ${life}`, `Prot: ${prot}`, resume],
         /**
          *
          * @param {*} content
          * @return {int}
          */
         pos(content) {
            return _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].measureText(content).width / 2.5;
         },
         /**
          *
          * @param {*} style
          * @param {*} font
          */
         draw(style = 'lightblue', font = '20px Arial black') {
            let height = -200;
            for (let i = 0; i < this.content.length; i++, height += 100) {
               _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = style;
               _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = font;
               _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(
                  this.content[i],
                  contentFrame.x - contentFrame.pos(this.content[i]),
                  contentFrame.y + height
               );
            }
         },
      };

      /** draw content */
      contentFrame.draw();
   }

   /**
    * @return {*} this.drawContent()
    */
   get content() {
      return this.drawContent(this.name, this.life, this.prot, this.resume);
   }
}


/***/ }),

/***/ "./src/classes/warrior/warrior.js":
/*!****************************************!*\
  !*** ./src/classes/warrior/warrior.js ***!
  \****************************************/
/*! exports provided: Warrior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Warrior", function() { return Warrior; });
/* harmony import */ var _warrior_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warrior.json */ "./src/classes/warrior/warrior.json");
var _warrior_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./warrior.json */ "./src/classes/warrior/warrior.json", 1);
/* harmony import */ var _templates_caracters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/caracters */ "./src/classes/templates/caracters.js");



/**
 * @class Warrior
 */
class Warrior extends _templates_caracters__WEBPACK_IMPORTED_MODULE_1__["Caracters"] {
   /**
    * @constructor
    */
   constructor() {
      super();
      this.name = _warrior_json__WEBPACK_IMPORTED_MODULE_0__.Name;
      this.life = _warrior_json__WEBPACK_IMPORTED_MODULE_0__.Life;
      this.prot = _warrior_json__WEBPACK_IMPORTED_MODULE_0__.Prot;
      this.resume = _warrior_json__WEBPACK_IMPORTED_MODULE_0__.Resume;
   }
}


/***/ }),

/***/ "./src/classes/warrior/warrior.json":
/*!******************************************!*\
  !*** ./src/classes/warrior/warrior.json ***!
  \******************************************/
/*! exports provided: Name, Life, Prot, Resume, default */
/***/ (function(module) {

module.exports = {"Name":"Warrior","Life":120,"Prot":20,"Resume":"Lorem Ipsum"};

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

   Title: 'Menu',

   setTitle(newTitle) {
      this.Title = newTitle;
   },

   getTitle() {
      return this.Title;
   },
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
      backgroundColor: backgroundColor,
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

      _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = 'grey';
      _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = '7';
      _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(
         button[i].x,
         button[i].y,
         button[i].width,
         button[i].height
      );

      _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = 'black';
      _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = '23px Arial Black';
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

const canvas = document.querySelector('#gameWindow');
const ctx = canvas.getContext('2d');

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










if (_const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].getTitle() === 'Menu') {
   /**
    * Create the canvas
    */
   Object(_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();

   /**
    * Create the main Menu
    */
   if (_const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].getTitle() === 'Menu') Object(_screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["createMenu"])();

   /**
    * Activate Hovering
    */

   Object(_designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__["activateHovering"])(
      () => {
         Object(_screens_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_7__["navigationMenu"])('Menu', _screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["createMenu"], 'Menu');
      },
      _screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["playButton"],
      _screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["optionButton"]
   );

   /**
    * Activate Click
    */

   Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_2__["choseMenu"])(() => {
      Object(_screens_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_7__["navigationMenu"])('Menu', _screens_playScreen__WEBPACK_IMPORTED_MODULE_4__["playScreen"], 'Ingame');
   }, _screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["playButton"]);

   Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_2__["choseMenu"])(() => {
      Object(_screens_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_7__["navigationMenu"])('Menu', _screens_optionsScreen__WEBPACK_IMPORTED_MODULE_5__["optionScreen"], 'Options');
   }, _screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__["optionButton"]);
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
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].addEventListener('click', (e) => {
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
      _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].addEventListener('mousemove', (e) => {
         e.preventDefault();

         for (let i = 0; i < button.length; i++) {
            if (Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_1__["coorButtons"])(e, button[i])) {
               button[i].backgroundColor = 'red';
               // console.log("Play");
            } else {
               button[i].backgroundColor = 'white';
            }
         }

         reloadActualMenu
            ? reloadActualMenu()
            : // console.error('Missing Function Parameter')
            false;
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
/* harmony import */ var _classesScreen_warriorScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classesScreen/warriorScreen */ "./src/screens/classesScreen/warriorScreen.js");
/* harmony import */ var _classesScreen_mageScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classesScreen/mageScreen */ "./src/screens/classesScreen/mageScreen.js");










/**
 * Warrior
 */

const warrior = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createButtons"])(
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 100,
   200,
   50,
   'Warrior',
   'white'
);

/**
 * Mage
 */

const mage = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createButtons"])(
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 25,
   200,
   50,
   'Mage',
   'white'
);

/**
 * Mage
 */

const cancel = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createButtons"])(
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 + 50,
   200,
   50,
   'Cancel',
   'white'
);

const choseCaracterScreen = () => {
   /**
    * remove old components
    */
   Object(_createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();

   /** Set State */
   _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].setTitle('choseCaracter');

   Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["drawButtons"])(warrior, mage, cancel);
};

/**
 * Activate Hovering
 */

Object(_designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__["activateHovering"])(
   () => {
      Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])('choseCaracter', choseCaracterScreen, 'choseCaracter');
   },
   warrior,
   mage,
   cancel
);

/**
 * Activate Click
 */

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(() => {
   Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])('choseCaracter', _classesScreen_warriorScreen__WEBPACK_IMPORTED_MODULE_7__["warriorScreen"], 'warrioScreen');
}, warrior);

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(() => {
   Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])('choseCaracter', _classesScreen_mageScreen__WEBPACK_IMPORTED_MODULE_8__["mageScreen"], 'mageScreen');
}, mage);

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(() => {
   Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])('choseCaracter', _playScreen__WEBPACK_IMPORTED_MODULE_6__["playScreen"], 'Ingame');
}, cancel);


/***/ }),

/***/ "./src/screens/classesScreen/mageScreen.js":
/*!*************************************************!*\
  !*** ./src/screens/classesScreen/mageScreen.js ***!
  \*************************************************/
/*! exports provided: mageScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mageScreen", function() { return mageScreen; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createFunctions/createCanvas */ "./src/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/const */ "./src/const/const.js");
/* harmony import */ var _classes_mage_mage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/mage/mage */ "./src/classes/mage/mage.js");




/**
 * class instance
 */

const mage = new _classes_mage_mage__WEBPACK_IMPORTED_MODULE_2__["Mage"]();

/**
 * warrior
 */

const mageScreen = () => {
   /**
    * remove old components
    */
   Object(_createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();

   /** set state */
   _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].setTitle('mageScreen');

   /** draw warrior content */
   mage.content;
};


/***/ }),

/***/ "./src/screens/classesScreen/warriorScreen.js":
/*!****************************************************!*\
  !*** ./src/screens/classesScreen/warriorScreen.js ***!
  \****************************************************/
/*! exports provided: warriorScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warriorScreen", function() { return warriorScreen; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createFunctions/createCanvas */ "./src/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/const */ "./src/const/const.js");
/* harmony import */ var _classes_warrior_warrior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/warrior/warrior */ "./src/classes/warrior/warrior.js");




/**
 * class instance
 */

const warrior = new _classes_warrior_warrior__WEBPACK_IMPORTED_MODULE_2__["Warrior"]();

/**
 * warrior
 */

const warriorScreen = () => {
   /**
    * remove old components
    */
   Object(_createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();

   /** set state */
   _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].setTitle('warriorScreen');

   /** draw warrior content */
   warrior.content;
};


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
   'Play the game',
   'white'
);

/**
 * Options Button
 */
const optionButton = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_1__["createButtons"])(
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 25,
   200,
   50,
   'Options',
   'white'
);

const createMenu = () => {
   /**
    * Retrieve Game Version
    */
   const gameVersion = 'V ' + _package_json__WEBPACK_IMPORTED_MODULE_2__.version;

   // Draw Version in canvas //
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = 'red';
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = '15px Arial black';
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
            error('Error, Wrong STATE Title');
         }
      }).then(() => {
         if (_const_const__WEBPACK_IMPORTED_MODULE_0__["STATE"].getTitle() === actualState) {
            setTimeout(() => {
               _const_const__WEBPACK_IMPORTED_MODULE_0__["STATE"].setTitle(stateLoaded);
               screenLoaded();
            }),
            50;
         }
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
   'Resolution',
   'white'
);

/**
 * Sound Button
 */

const cancel = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createButtons"])(
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 25,
   200,
   50,
   'Cancel',
   'white'
);

const optionScreen = () => {
   /**
    * remove old components
    */
   Object(_createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();

   /** Set State */
   _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].setTitle('Options');

   /** Draw Buttons */
   Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["drawButtons"])(resolution, cancel);
};

/**
 * Activate Hovering
 */

Object(_designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__["activateHovering"])(
   () => {
      Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])('Options', optionScreen, 'Options');
   },
   resolution,
   cancel
);

/**
 * Activate Click
 */

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(() => {
   Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])('Options', _mainMenu__WEBPACK_IMPORTED_MODULE_6__["createMenu"], 'Menu');
}, cancel);

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(() => {
   Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])('Options', optionScreen, 'Options');
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
   'Caracter',
   'white'
);

const cancel = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createButtons"])(
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 25,
   200,
   50,
   'Cancel',
   'white'
);

const playScreen = () => {
   /**
    * remove old components
    */
   Object(_createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();

   /** Set State */
   _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].setTitle('Ingame');

   /** Draw Button */
   Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["drawButtons"])(createCaracter, cancel);
};

/**
 * Activate Hovering
 */

Object(_designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__["activateHovering"])(
   () => {
      Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_6__["navigationMenu"])('Ingame', playScreen, 'Ingame');
   },
   createCaracter,
   cancel
);

/**
 * Activate Click
 */

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_4__["choseMenu"])(() => {
   Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_6__["navigationMenu"])('Ingame', _choseCaracterScreen__WEBPACK_IMPORTED_MODULE_7__["choseCaracterScreen"], 'choseCaracter');
}, createCaracter);

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_4__["choseMenu"])(() => {
   Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_6__["navigationMenu"])('Ingame', _mainMenu__WEBPACK_IMPORTED_MODULE_5__["createMenu"], 'Menu');
}, cancel);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvbWFnZS9tYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL3RlbXBsYXRlcy9jYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvd2Fycmlvci93YXJyaW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdC9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlQ2xpY2tGb3JNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvY2hvc2VDYXJhY3RlclNjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9jbGFzc2VzU2NyZWVuL21hZ2VTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvY2xhc3Nlc1NjcmVlbi93YXJyaW9yU2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL21haW5NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW5zL29wdGlvbnNTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvcGxheVNjcmVlbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1g2QjtBQUNmO0FBSWI7QUFDd0I7QUFDRjtBQUNMO0FBQ0M7QUFDRztBQUNIOztBQUVuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZvQjtBQUNQO0FBQ0Q7O0FBRWI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnFCO0FBQ1A7QUFDRTs7QUFFaEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Qm9CO0FBSW5COztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdDYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEI2QjtBQUNmO0FBSWI7QUFDd0I7QUFDRjtBQUNMO0FBQ0M7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFNEI7QUFDZjtBQUliO0FBQ3dCO0FBQ1A7QUFDQztBQUNJO0FBQ0s7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBNYWdlcyBmcm9tICcuL21hZ2UuanNvbic7XG5pbXBvcnQge0NhcmFjdGVyc30gZnJvbSAnLi4vdGVtcGxhdGVzL2NhcmFjdGVycyc7XG5cbi8qKlxuICogQGNsYXNzIFdhcnJpb3JcbiAqL1xuZXhwb3J0IGNsYXNzIE1hZ2UgZXh0ZW5kcyBDYXJhY3RlcnMge1xuICAgLyoqXG4gICAgKiBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICB0aGlzLm5hbWUgPSBNYWdlcy5OYW1lO1xuICAgICAgdGhpcy5saWZlID0gTWFnZXMuTGlmZTtcbiAgICAgIHRoaXMucHJvdCA9IE1hZ2VzLlByb3Q7XG4gICAgICB0aGlzLnJlc3VtZSA9IE1hZ2VzLlJlc3VtZTtcbiAgIH1cbn1cbiIsImltcG9ydCB7Y3R4LCBjYW52YXN9IGZyb20gJy4uLy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuXG4vKipcbiAqIEBjbGFzcyBDYXJhY3RlcnNcbiAqL1xuZXhwb3J0IGNsYXNzIENhcmFjdGVycyB7XG4gICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAgKiBAcGFyYW0gIHtpbnR9IGxpZmVcbiAgICAqIEBwYXJhbSAge2ludH0gcHJvdFxuICAgICogQHBhcmFtICB7U3RyaW5nfSByZXN1bWVcbiAgICAqL1xuICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAvKiogYWJzdHJhY3QgY29udHJ1Y3RvciAqL1xuICAgICAgaWYgKG5ldy50YXJnZXQgPT09IENhcmFjdGVycykge1xuICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBDYXJhY3RlcnMgaW5zdGFuY2VzIGRpcmVjdGx5Jyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgdGhpcy5saWZlID0gMDtcbiAgICAgIHRoaXMucHJvdCA9IDA7XG4gICAgICB0aGlzLnJlc3VtZSA9ICcnO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEByZXR1cm4ge1N0cmluZ30gbmFtZVxuICAgICovXG4gICBnZXQgZ2V0TmFtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICB9XG4gICAvKipcbiAgICAqIEByZXR1cm4ge2ludH0gbGlmZVxuICAgICovXG4gICBnZXQgZ2V0TGlmZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxpZmU7XG4gICB9XG4gICAvKipcbiAgICAqIEByZXR1cm4ge2ludH0gcHJvdFxuICAgICovXG4gICBnZXQgZ2V0UHJvdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3Q7XG4gICB9XG4gICAvKipcbiAgICAqIEByZXR1cm4ge1N0cmluZ30gcmVzdW1lXG4gICAgKi9cbiAgIGdldCBnZXRSZXN1bWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXN1bWU7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQG1ldGhvZCBkcmF3Q29udGVudFxuICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAqIEBwYXJhbSB7aW50fSBsaWZlXG4gICAgKiBAcGFyYW0ge2ludH0gcHJvdFxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlc3VtZVxuICAgICovXG4gICBkcmF3Q29udGVudChuYW1lLCBsaWZlLCBwcm90LCByZXN1bWUpIHtcbiAgICAgIC8qKlxuICAgICAgICogd2FycmlvciB0aXRsZVxuICAgICAgICovXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ2xpZ2h0Ymx1ZSc7XG4gICAgICBjdHguZm9udCA9ICc1MHB4IEFyaWFsIGJsYWNrJztcbiAgICAgIGNvbnN0IHRpdGxlID0gbmFtZTtcbiAgICAgIGNvbnN0IG1ldHJpY3MgPSBjdHgubWVhc3VyZVRleHQobmFtZSk7XG4gICAgICBjb25zdCB3aWR0aCA9IG1ldHJpY3Mud2lkdGg7XG5cbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gY2FudmFzLndpZHRoIC8gMiAtIHdpZHRoIC8gMiAtIDI1O1xuICAgICAgY3R4LmZpbGxUZXh0KHRpdGxlLCBwb3NpdGlvbiwgNTApO1xuXG4gICAgICAvKipcbiAgICAgICAqIGZyYW1lXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGZyYW1lID0ge1xuICAgICAgICAgeDogMjAsXG4gICAgICAgICB5OiAyMCxcbiAgICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgIH07XG5cbiAgICAgIGN0eC5yZWN0KGZyYW1lLngsIGZyYW1lLnksIGZyYW1lLndpZHRoLCBmcmFtZS5oZWlnaHQpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgLyoqXG4gICAgICAgKiBjb250ZW50RnJhbWVcbiAgICAgICAqL1xuXG4gICAgICBjb25zdCBjb250ZW50RnJhbWUgPSB7XG4gICAgICAgICB4OiBmcmFtZS53aWR0aCAvIDIsXG4gICAgICAgICB5OiBmcmFtZS5oZWlnaHQgLyAyLFxuXG4gICAgICAgICAvKiogYXJyYXkgZm9yIGNvbnRlbnQgKi9cbiAgICAgICAgIGNvbnRlbnQ6IFtgQ2xhc3M6ICR7bmFtZX1gLCBgTGlmZTogJHtsaWZlfWAsIGBQcm90OiAke3Byb3R9YCwgcmVzdW1lXSxcbiAgICAgICAgIC8qKlxuICAgICAgICAgICpcbiAgICAgICAgICAqIEBwYXJhbSB7Kn0gY29udGVudFxuICAgICAgICAgICogQHJldHVybiB7aW50fVxuICAgICAgICAgICovXG4gICAgICAgICBwb3MoY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGN0eC5tZWFzdXJlVGV4dChjb250ZW50KS53aWR0aCAvIDIuNTtcbiAgICAgICAgIH0sXG4gICAgICAgICAvKipcbiAgICAgICAgICAqXG4gICAgICAgICAgKiBAcGFyYW0geyp9IHN0eWxlXG4gICAgICAgICAgKiBAcGFyYW0geyp9IGZvbnRcbiAgICAgICAgICAqL1xuICAgICAgICAgZHJhdyhzdHlsZSA9ICdsaWdodGJsdWUnLCBmb250ID0gJzIwcHggQXJpYWwgYmxhY2snKSB7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gLTIwMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250ZW50Lmxlbmd0aDsgaSsrLCBoZWlnaHQgKz0gMTAwKSB7XG4gICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gc3R5bGU7XG4gICAgICAgICAgICAgICBjdHguZm9udCA9IGZvbnQ7XG4gICAgICAgICAgICAgICBjdHguZmlsbFRleHQoXG4gICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRbaV0sXG4gICAgICAgICAgICAgICAgICBjb250ZW50RnJhbWUueCAtIGNvbnRlbnRGcmFtZS5wb3ModGhpcy5jb250ZW50W2ldKSxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRGcmFtZS55ICsgaGVpZ2h0XG4gICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIC8qKiBkcmF3IGNvbnRlbnQgKi9cbiAgICAgIGNvbnRlbnRGcmFtZS5kcmF3KCk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQHJldHVybiB7Kn0gdGhpcy5kcmF3Q29udGVudCgpXG4gICAgKi9cbiAgIGdldCBjb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZHJhd0NvbnRlbnQodGhpcy5uYW1lLCB0aGlzLmxpZmUsIHRoaXMucHJvdCwgdGhpcy5yZXN1bWUpO1xuICAgfVxufVxuIiwiaW1wb3J0IFdhcnJpb3JzIGZyb20gJy4vd2Fycmlvci5qc29uJztcbmltcG9ydCB7Q2FyYWN0ZXJzfSBmcm9tICcuLi90ZW1wbGF0ZXMvY2FyYWN0ZXJzJztcblxuLyoqXG4gKiBAY2xhc3MgV2FycmlvclxuICovXG5leHBvcnQgY2xhc3MgV2FycmlvciBleHRlbmRzIENhcmFjdGVycyB7XG4gICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLm5hbWUgPSBXYXJyaW9ycy5OYW1lO1xuICAgICAgdGhpcy5saWZlID0gV2FycmlvcnMuTGlmZTtcbiAgICAgIHRoaXMucHJvdCA9IFdhcnJpb3JzLlByb3Q7XG4gICAgICB0aGlzLnJlc3VtZSA9IFdhcnJpb3JzLlJlc3VtZTtcbiAgIH1cbn1cbiIsIi8qKlxuICogRGVjbGFyaW5nIHVzZWZ1bCB2YXJpYWJsZXNcbiAqL1xuXG5leHBvcnQgbGV0IFNUQVRFID0ge1xuICAgaWQ6IDEsXG5cbiAgIFRpdGxlOiAnTWVudScsXG5cbiAgIHNldFRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICB0aGlzLlRpdGxlID0gbmV3VGl0bGU7XG4gICB9LFxuXG4gICBnZXRUaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLlRpdGxlO1xuICAgfSxcbn07XG4iLCJpbXBvcnQge2N0eH0gZnJvbSAnLi9jcmVhdGVDYW52YXMnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0geyp9IHhcbiAqIEBwYXJhbSB7Kn0geVxuICogQHBhcmFtIHsqfSB3aWR0aFxuICogQHBhcmFtIHsqfSBoZWlnaHRcbiAqIEBwYXJhbSB7Kn0gdGV4dFxuICogQHBhcmFtIHsqfSBiYWNrZ3JvdW5kQ29sb3JcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBCdXR0b25zIGFuZCByZXR1cm4gcG9zaXRpb25cbiAqL1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9ucyA9ICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0ZXh0LCBiYWNrZ3JvdW5kQ29sb3IpID0+IHtcbiAgIHJldHVybiB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeSxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb29yQnV0dG9ucyA9IChlLCBvYmplY3QpID0+IHtcbiAgIHJldHVybiAoXG4gICAgICBlLmNsaWVudFggPiBvYmplY3QueCAmJlxuICAgICAgZS5jbGllbnRYIDwgb2JqZWN0LnggKyBvYmplY3Qud2lkdGggKyAxNCAmJlxuICAgICAgKGUuY2xpZW50WSA+IG9iamVjdC55ICYmIGUuY2xpZW50WSA8IG9iamVjdC55ICsgKG9iamVjdC5oZWlnaHQgKyAxNCkpXG4gICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGRyYXdCdXR0b25zID0gKC4uLmJ1dHRvbikgPT4ge1xuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8qKiBidXR0b24gdG8gY3JlYXRlICovXG4gICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uW2ldLmJhY2tncm91bmRDb2xvcjtcbiAgICAgIGN0eC5maWxsUmVjdChidXR0b25baV0ueCwgYnV0dG9uW2ldLnksIGJ1dHRvbltpXS53aWR0aCwgYnV0dG9uW2ldLmhlaWdodCk7XG5cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdncmV5JztcbiAgICAgIGN0eC5saW5lV2lkdGggPSAnNyc7XG4gICAgICBjdHguc3Ryb2tlUmVjdChcbiAgICAgICAgIGJ1dHRvbltpXS54LFxuICAgICAgICAgYnV0dG9uW2ldLnksXG4gICAgICAgICBidXR0b25baV0ud2lkdGgsXG4gICAgICAgICBidXR0b25baV0uaGVpZ2h0XG4gICAgICApO1xuXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgIGN0eC5mb250ID0gJzIzcHggQXJpYWwgQmxhY2snO1xuICAgICAgY3R4LmZpbGxUZXh0KFxuICAgICAgICAgYnV0dG9uW2ldLnRleHQsXG4gICAgICAgICBidXR0b25baV0ueCArIDEwLFxuICAgICAgICAgYnV0dG9uW2ldLnkgKyBidXR0b25baV0uaGVpZ2h0IC8gMiArIDVcbiAgICAgICk7XG4gICB9XG59O1xuIiwiLyoqXG4gKiBHZXQgQ2FudmFzXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lV2luZG93Jyk7XG5leHBvcnQgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDYW52YXMgPSAoKSA9PiB7XG4gICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn07XG4iLCJpbXBvcnQge2NyZWF0ZUNhbnZhc30gZnJvbSAnLi9jcmVhdGVDYW52YXMnO1xuXG5pbXBvcnQge1NUQVRFfSBmcm9tICcuLi9jb25zdC9jb25zdCc7XG5pbXBvcnQge2Nob3NlTWVudX0gZnJvbSAnLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlQ2xpY2tGb3JNZW51JztcbmltcG9ydCB7YWN0aXZhdGVIb3ZlcmluZ30gZnJvbSAnLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlSG92ZXJpbmcnO1xuaW1wb3J0IHtwbGF5U2NyZWVufSBmcm9tICcuLi9zY3JlZW5zL3BsYXlTY3JlZW4nO1xuaW1wb3J0IHtvcHRpb25TY3JlZW59IGZyb20gJy4uL3NjcmVlbnMvb3B0aW9uc1NjcmVlbic7XG5pbXBvcnQge2NyZWF0ZU1lbnUsIHBsYXlCdXR0b24sIG9wdGlvbkJ1dHRvbn0gZnJvbSAnLi4vc2NyZWVucy9tYWluTWVudSc7XG5pbXBvcnQge25hdmlnYXRpb25NZW51fSBmcm9tICcuLi9zY3JlZW5zL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51JztcblxuaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09ICdNZW51Jykge1xuICAgLyoqXG4gICAgKiBDcmVhdGUgdGhlIGNhbnZhc1xuICAgICovXG4gICBjcmVhdGVDYW52YXMoKTtcblxuICAgLyoqXG4gICAgKiBDcmVhdGUgdGhlIG1haW4gTWVudVxuICAgICovXG4gICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gJ01lbnUnKSBjcmVhdGVNZW51KCk7XG5cbiAgIC8qKlxuICAgICogQWN0aXZhdGUgSG92ZXJpbmdcbiAgICAqL1xuXG4gICBhY3RpdmF0ZUhvdmVyaW5nKFxuICAgICAgKCkgPT4ge1xuICAgICAgICAgbmF2aWdhdGlvbk1lbnUoJ01lbnUnLCBjcmVhdGVNZW51LCAnTWVudScpO1xuICAgICAgfSxcbiAgICAgIHBsYXlCdXR0b24sXG4gICAgICBvcHRpb25CdXR0b25cbiAgICk7XG5cbiAgIC8qKlxuICAgICogQWN0aXZhdGUgQ2xpY2tcbiAgICAqL1xuXG4gICBjaG9zZU1lbnUoKCkgPT4ge1xuICAgICAgbmF2aWdhdGlvbk1lbnUoJ01lbnUnLCBwbGF5U2NyZWVuLCAnSW5nYW1lJyk7XG4gICB9LCBwbGF5QnV0dG9uKTtcblxuICAgY2hvc2VNZW51KCgpID0+IHtcbiAgICAgIG5hdmlnYXRpb25NZW51KCdNZW51Jywgb3B0aW9uU2NyZWVuLCAnT3B0aW9ucycpO1xuICAgfSwgb3B0aW9uQnV0dG9uKTtcbn1cbiIsImltcG9ydCB7Y2FudmFzfSBmcm9tICcuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzJztcbmltcG9ydCB7Y29vckJ1dHRvbnN9IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudSc7XG5cbmV4cG9ydCBjb25zdCBjaG9zZU1lbnUgPSAoaHJlZiwgYnV0dG9uKSA9PiB7XG4gICAvKipcbiAgICAqIENsaWNrIEV2ZW50XG4gICAgKiBDaG9vc2UgbWVudSB0byBjbGlja1xuICAgICovXG4gICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgaWYgKGNvb3JCdXR0b25zKGUsIGJ1dHRvbikpIHtcbiAgICAgICAgICAgIGhyZWYoKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH0pO1xufTtcbiIsImltcG9ydCB7Y2FudmFzfSBmcm9tICcuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzJztcbmltcG9ydCB7Y29vckJ1dHRvbnN9IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudSc7XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZUhvdmVyaW5nID0gKHJlbG9hZEFjdHVhbE1lbnUsIC4uLmJ1dHRvbikgPT4ge1xuICAgLyoqXG4gICAgKiBIb3ZlciBldmVudFxuICAgICovXG4gICBpZiAoYnV0dG9uLmxlbmd0aCkge1xuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29vckJ1dHRvbnMoZSwgYnV0dG9uW2ldKSkge1xuICAgICAgICAgICAgICAgYnV0dG9uW2ldLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJQbGF5XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIGJ1dHRvbltpXS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuXG4gICAgICAgICByZWxvYWRBY3R1YWxNZW51XG4gICAgICAgICAgICA/IHJlbG9hZEFjdHVhbE1lbnUoKVxuICAgICAgICAgICAgOiAvLyBjb25zb2xlLmVycm9yKCdNaXNzaW5nIEZ1bmN0aW9uIFBhcmFtZXRlcicpXG4gICAgICAgICAgICBmYWxzZTtcbiAgICAgIH0pO1xuICAgfVxufTtcbiIsIi8vIGltcG9ydCB7IG1ha2VXYXJyaW9yIH0gZnJvbSBcIi4vY3JlYXRlQ2FyYWN0ZXJcIjtcbmltcG9ydCAnLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlTWVudSc7XG5cbi8qXG5cbmNvbnN0IGNyZWF0ZVdhcnJpb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dhcnJpb3JcIik7XG5jcmVhdGVXYXJyaW9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgLy8gQ3JlYXRpbmcgVGhlIFdhcnJpb3IgLy9cbiAgbWFrZVdhcnJpb3IoKTtcbn0pO1xuXG4qL1xuIiwiaW1wb3J0IHtjYW52YXMsIGNyZWF0ZUNhbnZhc30gZnJvbSAnLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhcyc7XG5pbXBvcnQge1NUQVRFfSBmcm9tICcuLi9jb25zdC9jb25zdCc7XG5pbXBvcnQge1xuICAgY3JlYXRlQnV0dG9ucyxcbiAgIGRyYXdCdXR0b25zLFxufSBmcm9tICcuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnUnO1xuaW1wb3J0IHthY3RpdmF0ZUhvdmVyaW5nfSBmcm9tICcuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZyc7XG5pbXBvcnQge25hdmlnYXRpb25NZW51fSBmcm9tICcuL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51JztcbmltcG9ydCB7Y2hvc2VNZW51fSBmcm9tICcuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnUnO1xuaW1wb3J0IHtwbGF5U2NyZWVufSBmcm9tICcuL3BsYXlTY3JlZW4nO1xuaW1wb3J0IHt3YXJyaW9yU2NyZWVufSBmcm9tICcuL2NsYXNzZXNTY3JlZW4vd2FycmlvclNjcmVlbic7XG5pbXBvcnQge21hZ2VTY3JlZW59IGZyb20gJy4vY2xhc3Nlc1NjcmVlbi9tYWdlU2NyZWVuJztcblxuLyoqXG4gKiBXYXJyaW9yXG4gKi9cblxuY29uc3Qgd2FycmlvciA9IGNyZWF0ZUJ1dHRvbnMoXG4gICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxuICAgY2FudmFzLmhlaWdodCAvIDIgLSAxMDAsXG4gICAyMDAsXG4gICA1MCxcbiAgICdXYXJyaW9yJyxcbiAgICd3aGl0ZSdcbik7XG5cbi8qKlxuICogTWFnZVxuICovXG5cbmNvbnN0IG1hZ2UgPSBjcmVhdGVCdXR0b25zKFxuICAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjUsXG4gICAyMDAsXG4gICA1MCxcbiAgICdNYWdlJyxcbiAgICd3aGl0ZSdcbik7XG5cbi8qKlxuICogTWFnZVxuICovXG5cbmNvbnN0IGNhbmNlbCA9IGNyZWF0ZUJ1dHRvbnMoXG4gICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxuICAgY2FudmFzLmhlaWdodCAvIDIgKyA1MCxcbiAgIDIwMCxcbiAgIDUwLFxuICAgJ0NhbmNlbCcsXG4gICAnd2hpdGUnXG4pO1xuXG5leHBvcnQgY29uc3QgY2hvc2VDYXJhY3RlclNjcmVlbiA9ICgpID0+IHtcbiAgIC8qKlxuICAgICogcmVtb3ZlIG9sZCBjb21wb25lbnRzXG4gICAgKi9cbiAgIGNyZWF0ZUNhbnZhcygpO1xuXG4gICAvKiogU2V0IFN0YXRlICovXG4gICBTVEFURS5zZXRUaXRsZSgnY2hvc2VDYXJhY3RlcicpO1xuXG4gICBkcmF3QnV0dG9ucyh3YXJyaW9yLCBtYWdlLCBjYW5jZWwpO1xufTtcblxuLyoqXG4gKiBBY3RpdmF0ZSBIb3ZlcmluZ1xuICovXG5cbmFjdGl2YXRlSG92ZXJpbmcoXG4gICAoKSA9PiB7XG4gICAgICBuYXZpZ2F0aW9uTWVudSgnY2hvc2VDYXJhY3RlcicsIGNob3NlQ2FyYWN0ZXJTY3JlZW4sICdjaG9zZUNhcmFjdGVyJyk7XG4gICB9LFxuICAgd2FycmlvcixcbiAgIG1hZ2UsXG4gICBjYW5jZWxcbik7XG5cbi8qKlxuICogQWN0aXZhdGUgQ2xpY2tcbiAqL1xuXG5jaG9zZU1lbnUoKCkgPT4ge1xuICAgbmF2aWdhdGlvbk1lbnUoJ2Nob3NlQ2FyYWN0ZXInLCB3YXJyaW9yU2NyZWVuLCAnd2FycmlvU2NyZWVuJyk7XG59LCB3YXJyaW9yKTtcblxuY2hvc2VNZW51KCgpID0+IHtcbiAgIG5hdmlnYXRpb25NZW51KCdjaG9zZUNhcmFjdGVyJywgbWFnZVNjcmVlbiwgJ21hZ2VTY3JlZW4nKTtcbn0sIG1hZ2UpO1xuXG5jaG9zZU1lbnUoKCkgPT4ge1xuICAgbmF2aWdhdGlvbk1lbnUoJ2Nob3NlQ2FyYWN0ZXInLCBwbGF5U2NyZWVuLCAnSW5nYW1lJyk7XG59LCBjYW5jZWwpO1xuIiwiaW1wb3J0IHtjcmVhdGVDYW52YXN9IGZyb20gJy4uLy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuaW1wb3J0IHtTVEFURX0gZnJvbSAnLi4vLi4vY29uc3QvY29uc3QnO1xuaW1wb3J0IHtNYWdlfSBmcm9tICcuLi8uLi9jbGFzc2VzL21hZ2UvbWFnZSc7XG5cbi8qKlxuICogY2xhc3MgaW5zdGFuY2VcbiAqL1xuXG5jb25zdCBtYWdlID0gbmV3IE1hZ2UoKTtcblxuLyoqXG4gKiB3YXJyaW9yXG4gKi9cblxuZXhwb3J0IGNvbnN0IG1hZ2VTY3JlZW4gPSAoKSA9PiB7XG4gICAvKipcbiAgICAqIHJlbW92ZSBvbGQgY29tcG9uZW50c1xuICAgICovXG4gICBjcmVhdGVDYW52YXMoKTtcblxuICAgLyoqIHNldCBzdGF0ZSAqL1xuICAgU1RBVEUuc2V0VGl0bGUoJ21hZ2VTY3JlZW4nKTtcblxuICAgLyoqIGRyYXcgd2FycmlvciBjb250ZW50ICovXG4gICBtYWdlLmNvbnRlbnQ7XG59O1xuIiwiaW1wb3J0IHtjcmVhdGVDYW52YXN9IGZyb20gJy4uLy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuaW1wb3J0IHtTVEFURX0gZnJvbSAnLi4vLi4vY29uc3QvY29uc3QnO1xuaW1wb3J0IHtXYXJyaW9yfSBmcm9tICcuLi8uLi9jbGFzc2VzL3dhcnJpb3Ivd2Fycmlvcic7XG5cbi8qKlxuICogY2xhc3MgaW5zdGFuY2VcbiAqL1xuXG5jb25zdCB3YXJyaW9yID0gbmV3IFdhcnJpb3IoKTtcblxuLyoqXG4gKiB3YXJyaW9yXG4gKi9cblxuZXhwb3J0IGNvbnN0IHdhcnJpb3JTY3JlZW4gPSAoKSA9PiB7XG4gICAvKipcbiAgICAqIHJlbW92ZSBvbGQgY29tcG9uZW50c1xuICAgICovXG4gICBjcmVhdGVDYW52YXMoKTtcblxuICAgLyoqIHNldCBzdGF0ZSAqL1xuICAgU1RBVEUuc2V0VGl0bGUoJ3dhcnJpb3JTY3JlZW4nKTtcblxuICAgLyoqIGRyYXcgd2FycmlvciBjb250ZW50ICovXG4gICB3YXJyaW9yLmNvbnRlbnQ7XG59O1xuIiwiaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhcyc7XG5pbXBvcnQge1xuICAgY3JlYXRlQnV0dG9ucyxcbiAgIGRyYXdCdXR0b25zLFxufSBmcm9tICcuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnUnO1xuXG5pbXBvcnQgdmVyc2lvbiBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nO1xuXG4vKipcbiAqIFBsYXkgQnV0dG9uXG4gKi9cbmV4cG9ydCBjb25zdCBwbGF5QnV0dG9uID0gY3JlYXRlQnV0dG9ucyhcbiAgIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXG4gICBjYW52YXMuaGVpZ2h0IC8gMiAtIDEwMCxcbiAgIDIwMCxcbiAgIDUwLFxuICAgJ1BsYXkgdGhlIGdhbWUnLFxuICAgJ3doaXRlJ1xuKTtcblxuLyoqXG4gKiBPcHRpb25zIEJ1dHRvblxuICovXG5leHBvcnQgY29uc3Qgb3B0aW9uQnV0dG9uID0gY3JlYXRlQnV0dG9ucyhcbiAgIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXG4gICBjYW52YXMuaGVpZ2h0IC8gMiAtIDI1LFxuICAgMjAwLFxuICAgNTAsXG4gICAnT3B0aW9ucycsXG4gICAnd2hpdGUnXG4pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgIC8qKlxuICAgICogUmV0cmlldmUgR2FtZSBWZXJzaW9uXG4gICAgKi9cbiAgIGNvbnN0IGdhbWVWZXJzaW9uID0gJ1YgJyArIHZlcnNpb24udmVyc2lvbjtcblxuICAgLy8gRHJhdyBWZXJzaW9uIGluIGNhbnZhcyAvL1xuICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgY3R4LmZvbnQgPSAnMTVweCBBcmlhbCBibGFjayc7XG4gICBjdHguZmlsbFRleHQoZ2FtZVZlcnNpb24sIDUwLCA1MCk7XG5cbiAgIC8qKiBEcmF3IGJ1dHRvbiAqL1xuICAgZHJhd0J1dHRvbnMocGxheUJ1dHRvbiwgb3B0aW9uQnV0dG9uKTtcbn07XG4iLCJpbXBvcnQge1NUQVRFfSBmcm9tICcuLi8uLi9jb25zdC9jb25zdCc7XG5cbmV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uTWVudSA9IChhY3R1YWxTdGF0ZSwgc2NyZWVuTG9hZGVkLCBzdGF0ZUxvYWRlZCkgPT4ge1xuICAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IGFjdHVhbFN0YXRlKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHN1Y2Nlc3MsIGVycm9yKSA9PiB7XG4gICAgICAgICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gYWN0dWFsU3RhdGUpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MoKCkgPT4gc2NyZWVuTG9hZGVkKCkpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdFcnJvciwgV3JvbmcgU1RBVEUgVGl0bGUnKTtcbiAgICAgICAgIH1cbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IGFjdHVhbFN0YXRlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgIFNUQVRFLnNldFRpdGxlKHN0YXRlTG9hZGVkKTtcbiAgICAgICAgICAgICAgIHNjcmVlbkxvYWRlZCgpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICA1MDtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgfVxufTtcbiIsImltcG9ydCB7Y2FudmFzLCBjcmVhdGVDYW52YXN9IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuaW1wb3J0IHtTVEFURX0gZnJvbSAnLi4vY29uc3QvY29uc3QnO1xuaW1wb3J0IHtcbiAgIGNyZWF0ZUJ1dHRvbnMsXG4gICBkcmF3QnV0dG9ucyxcbn0gZnJvbSAnLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51JztcbmltcG9ydCB7YWN0aXZhdGVIb3ZlcmluZ30gZnJvbSAnLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlSG92ZXJpbmcnO1xuaW1wb3J0IHtuYXZpZ2F0aW9uTWVudX0gZnJvbSAnLi9uYXZpZ2F0aW9uTWVudS9uYXZpZ2F0aW9uTWVudSc7XG5pbXBvcnQge2Nob3NlTWVudX0gZnJvbSAnLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlQ2xpY2tGb3JNZW51JztcbmltcG9ydCB7Y3JlYXRlTWVudX0gZnJvbSAnLi9tYWluTWVudSc7XG5cbi8qKlxuICogUmVzb2x1dGlvbiBCdXR0b25cbiAqL1xuXG5jb25zdCByZXNvbHV0aW9uID0gY3JlYXRlQnV0dG9ucyhcbiAgIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXG4gICBjYW52YXMuaGVpZ2h0IC8gMiAtIDEwMCxcbiAgIDIwMCxcbiAgIDUwLFxuICAgJ1Jlc29sdXRpb24nLFxuICAgJ3doaXRlJ1xuKTtcblxuLyoqXG4gKiBTb3VuZCBCdXR0b25cbiAqL1xuXG5jb25zdCBjYW5jZWwgPSBjcmVhdGVCdXR0b25zKFxuICAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjUsXG4gICAyMDAsXG4gICA1MCxcbiAgICdDYW5jZWwnLFxuICAgJ3doaXRlJ1xuKTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvblNjcmVlbiA9ICgpID0+IHtcbiAgIC8qKlxuICAgICogcmVtb3ZlIG9sZCBjb21wb25lbnRzXG4gICAgKi9cbiAgIGNyZWF0ZUNhbnZhcygpO1xuXG4gICAvKiogU2V0IFN0YXRlICovXG4gICBTVEFURS5zZXRUaXRsZSgnT3B0aW9ucycpO1xuXG4gICAvKiogRHJhdyBCdXR0b25zICovXG4gICBkcmF3QnV0dG9ucyhyZXNvbHV0aW9uLCBjYW5jZWwpO1xufTtcblxuLyoqXG4gKiBBY3RpdmF0ZSBIb3ZlcmluZ1xuICovXG5cbmFjdGl2YXRlSG92ZXJpbmcoXG4gICAoKSA9PiB7XG4gICAgICBuYXZpZ2F0aW9uTWVudSgnT3B0aW9ucycsIG9wdGlvblNjcmVlbiwgJ09wdGlvbnMnKTtcbiAgIH0sXG4gICByZXNvbHV0aW9uLFxuICAgY2FuY2VsXG4pO1xuXG4vKipcbiAqIEFjdGl2YXRlIENsaWNrXG4gKi9cblxuY2hvc2VNZW51KCgpID0+IHtcbiAgIG5hdmlnYXRpb25NZW51KCdPcHRpb25zJywgY3JlYXRlTWVudSwgJ01lbnUnKTtcbn0sIGNhbmNlbCk7XG5cbmNob3NlTWVudSgoKSA9PiB7XG4gICBuYXZpZ2F0aW9uTWVudSgnT3B0aW9ucycsIG9wdGlvblNjcmVlbiwgJ09wdGlvbnMnKTtcbn0sIHJlc29sdXRpb24pO1xuIiwiaW1wb3J0IHtjYW52YXMsIGNyZWF0ZUNhbnZhc30gZnJvbSAnLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhcyc7XG5pbXBvcnQge1NUQVRFfSBmcm9tICcuLi9jb25zdC9jb25zdCc7XG5pbXBvcnQge1xuICAgY3JlYXRlQnV0dG9ucyxcbiAgIGRyYXdCdXR0b25zLFxufSBmcm9tICcuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnUnO1xuaW1wb3J0IHthY3RpdmF0ZUhvdmVyaW5nfSBmcm9tICcuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZyc7XG5pbXBvcnQge2Nob3NlTWVudX0gZnJvbSAnLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlQ2xpY2tGb3JNZW51JztcbmltcG9ydCB7Y3JlYXRlTWVudX0gZnJvbSAnLi9tYWluTWVudSc7XG5pbXBvcnQge25hdmlnYXRpb25NZW51fSBmcm9tICcuL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51JztcbmltcG9ydCB7Y2hvc2VDYXJhY3RlclNjcmVlbn0gZnJvbSAnLi9jaG9zZUNhcmFjdGVyU2NyZWVuJztcblxuLyoqXG4gKiBjcmVhdGVDYXJhY3RlciBCdXR0b25cbiAqL1xuXG5jb25zdCBjcmVhdGVDYXJhY3RlciA9IGNyZWF0ZUJ1dHRvbnMoXG4gICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxuICAgY2FudmFzLmhlaWdodCAvIDIgLSAxMDAsXG4gICAyMDAsXG4gICA1MCxcbiAgICdDYXJhY3RlcicsXG4gICAnd2hpdGUnXG4pO1xuXG5jb25zdCBjYW5jZWwgPSBjcmVhdGVCdXR0b25zKFxuICAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjUsXG4gICAyMDAsXG4gICA1MCxcbiAgICdDYW5jZWwnLFxuICAgJ3doaXRlJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHBsYXlTY3JlZW4gPSAoKSA9PiB7XG4gICAvKipcbiAgICAqIHJlbW92ZSBvbGQgY29tcG9uZW50c1xuICAgICovXG4gICBjcmVhdGVDYW52YXMoKTtcblxuICAgLyoqIFNldCBTdGF0ZSAqL1xuICAgU1RBVEUuc2V0VGl0bGUoJ0luZ2FtZScpO1xuXG4gICAvKiogRHJhdyBCdXR0b24gKi9cbiAgIGRyYXdCdXR0b25zKGNyZWF0ZUNhcmFjdGVyLCBjYW5jZWwpO1xufTtcblxuLyoqXG4gKiBBY3RpdmF0ZSBIb3ZlcmluZ1xuICovXG5cbmFjdGl2YXRlSG92ZXJpbmcoXG4gICAoKSA9PiB7XG4gICAgICBuYXZpZ2F0aW9uTWVudSgnSW5nYW1lJywgcGxheVNjcmVlbiwgJ0luZ2FtZScpO1xuICAgfSxcbiAgIGNyZWF0ZUNhcmFjdGVyLFxuICAgY2FuY2VsXG4pO1xuXG4vKipcbiAqIEFjdGl2YXRlIENsaWNrXG4gKi9cblxuY2hvc2VNZW51KCgpID0+IHtcbiAgIG5hdmlnYXRpb25NZW51KCdJbmdhbWUnLCBjaG9zZUNhcmFjdGVyU2NyZWVuLCAnY2hvc2VDYXJhY3RlcicpO1xufSwgY3JlYXRlQ2FyYWN0ZXIpO1xuXG5jaG9zZU1lbnUoKCkgPT4ge1xuICAgbmF2aWdhdGlvbk1lbnUoJ0luZ2FtZScsIGNyZWF0ZU1lbnUsICdNZW51Jyk7XG59LCBjYW5jZWwpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==