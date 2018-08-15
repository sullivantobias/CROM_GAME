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

/***/ "./src/gamesrc/classes/mage/mage.js":
/*!******************************************!*\
  !*** ./src/gamesrc/classes/mage/mage.js ***!
  \******************************************/
/*! exports provided: Mage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mage", function() { return Mage; });
/* harmony import */ var _mage_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mage.json */ "./src/gamesrc/classes/mage/mage.json");
var _mage_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mage.json */ "./src/gamesrc/classes/mage/mage.json", 1);
/* harmony import */ var _templates_caracters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/caracters */ "./src/gamesrc/classes/templates/caracters.js");



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
      this.sprite = {
         image: _mage_json__WEBPACK_IMPORTED_MODULE_0__.Sprite,
         sx: 24,
         sy: 24,
         sWidth: 102,
         sHeight: 120,
         dx: 400,
         dy: 200,
         dWidth: 96,
         dHeight: 144,
      };
   }
}


/***/ }),

/***/ "./src/gamesrc/classes/mage/mage.json":
/*!********************************************!*\
  !*** ./src/gamesrc/classes/mage/mage.json ***!
  \********************************************/
/*! exports provided: Name, Life, Prot, Resume, Sprite, default */
/***/ (function(module) {

module.exports = {"Name":"Mage","Life":80,"Prot":5,"Resume":"Lorem Ipsum","Sprite":"src/assets/sprite/mage/mageSprite.png"};

/***/ }),

/***/ "./src/gamesrc/classes/templates/caracters.js":
/*!****************************************************!*\
  !*** ./src/gamesrc/classes/templates/caracters.js ***!
  \****************************************************/
/*! exports provided: Caracters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Caracters", function() { return Caracters; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createFunctions/createCanvas */ "./src/gamesrc/createFunctions/createCanvas.js");


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
      this.sprite = {
         image: '/src/assets/sprite/warrior/warriorSprite.png',
         sx: 0,
         sy: 0,
         sWidth: 0,
         sHeight: 0,
         dx: 0,
         dy: 0,
         dwidth: 0,
         dHeight: 0,
      };
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
       * stats frame
       */
      const statsFrame = {
         x: 20,
         y: 20,
         width: 200,
         height: 500,
      };

      /**
       * sprite frame
       */
      const spriteFrame = {
         x: 300,
         y: 100,
         width: 300,
         height: 300,
      };

      /** stats frame draw  */
      _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].rect(statsFrame.x, statsFrame.y, statsFrame.width, statsFrame.height);
      _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].stroke();

      /** sprite frame draw  */
      _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].rect(
         spriteFrame.x,
         spriteFrame.y,
         spriteFrame.width,
         spriteFrame.height
      );
      _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].stroke();
      /**
       * contentFrame
       */

      const statsAndSprite = {
         x: statsFrame.width / 2,
         y: statsFrame.height / 2,

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
                  this.x - this.pos(this.content[i]),
                  this.y + height
               );
            }
         },
      };

      /** draw content */
      statsAndSprite.draw();
   }

   /**
    * @method drawContent
    * @param {String} spritePath
    * @param {*} spriteInfos
    */
   drawStaticSprite(...infos) {
      let sprite = new Image();
      sprite.src = infos[0];
      infos.shift();
      sprite.onload = () => {
         _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].drawImage(sprite, ...infos);
      };
   }

   /**
    * @return {*} this.drawContent()
    */
   get getContent() {
      return this.drawContent(this.name, this.life, this.prot, this.resume);
   }
   /**
    * @return {*} this.drawSpriteOnMenu()
    */
   get getSprite() {
      return this.drawStaticSprite(
         this.sprite.image,
         this.sprite.sx,
         this.sprite.sy,
         this.sprite.sWidth,
         this.sprite.sHeight,
         this.sprite.dx,
         this.sprite.dy,
         this.sprite.dWidth,
         this.sprite.dHeight
      );
   }
}


/***/ }),

/***/ "./src/gamesrc/classes/warrior/warrior.js":
/*!************************************************!*\
  !*** ./src/gamesrc/classes/warrior/warrior.js ***!
  \************************************************/
/*! exports provided: Warrior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Warrior", function() { return Warrior; });
/* harmony import */ var _warrior_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warrior.json */ "./src/gamesrc/classes/warrior/warrior.json");
var _warrior_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./warrior.json */ "./src/gamesrc/classes/warrior/warrior.json", 1);
/* harmony import */ var _templates_caracters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/caracters */ "./src/gamesrc/classes/templates/caracters.js");



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
      this.sprite = {
         image: _warrior_json__WEBPACK_IMPORTED_MODULE_0__.Sprite,
         sx: 24,
         sy: 12,
         sWidth: 48,
         sHeight: 72,
         dx: 400,
         dy: 200,
         dWidth: 96,
         dHeight: 144,
      };
   }
}


/***/ }),

/***/ "./src/gamesrc/classes/warrior/warrior.json":
/*!**************************************************!*\
  !*** ./src/gamesrc/classes/warrior/warrior.json ***!
  \**************************************************/
/*! exports provided: Name, Life, Prot, Resume, Sprite, default */
/***/ (function(module) {

module.exports = {"Name":"Warrior","Life":120,"Prot":20,"Resume":"Lorem Ipsum","Sprite":"src/assets/sprite/warrior/warriorSprite.png"};

/***/ }),

/***/ "./src/gamesrc/const/const.js":
/*!************************************!*\
  !*** ./src/gamesrc/const/const.js ***!
  \************************************/
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

/***/ "./src/gamesrc/createFunctions/createButtonsForMenu.js":
/*!*************************************************************!*\
  !*** ./src/gamesrc/createFunctions/createButtonsForMenu.js ***!
  \*************************************************************/
/*! exports provided: createButtons, coorButtons, drawButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtons", function() { return createButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coorButtons", function() { return coorButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawButtons", function() { return drawButtons; });
/* harmony import */ var _createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCanvas */ "./src/gamesrc/createFunctions/createCanvas.js");


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
   const mouse = {
      x: 0,
      y: 0,
   };

   const bounds = _createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].getBoundingClientRect();
   // get the mouse coordinates, subtract the canvas top left and any scrolling
   mouse.x = e.pageX - bounds.left - scrollX;
   mouse.y = e.pageY - bounds.top - scrollY;

   return (
      mouse.x > object.x &&
      mouse.x < object.x + object.width &&
      mouse.y > object.y &&
      mouse.y < object.y + object.height
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

/***/ "./src/gamesrc/createFunctions/createCanvas.js":
/*!*****************************************************!*\
  !*** ./src/gamesrc/createFunctions/createCanvas.js ***!
  \*****************************************************/
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

/***/ "./src/gamesrc/createFunctions/createMenu.js":
/*!***************************************************!*\
  !*** ./src/gamesrc/createFunctions/createMenu.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCanvas */ "./src/gamesrc/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/const */ "./src/gamesrc/const/const.js");
/* harmony import */ var _designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../designFunctions/activateClickForMenu */ "./src/gamesrc/designFunctions/activateClickForMenu.js");
/* harmony import */ var _designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../designFunctions/activateHovering */ "./src/gamesrc/designFunctions/activateHovering.js");
/* harmony import */ var _screens_playScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../screens/playScreen */ "./src/gamesrc/screens/playScreen.js");
/* harmony import */ var _screens_optionsScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../screens/optionsScreen */ "./src/gamesrc/screens/optionsScreen.js");
/* harmony import */ var _screens_mainMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../screens/mainMenu */ "./src/gamesrc/screens/mainMenu.js");
/* harmony import */ var _screens_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../screens/navigationMenu/navigationMenu */ "./src/gamesrc/screens/navigationMenu/navigationMenu.js");










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

/***/ "./src/gamesrc/designFunctions/activateClickForMenu.js":
/*!*************************************************************!*\
  !*** ./src/gamesrc/designFunctions/activateClickForMenu.js ***!
  \*************************************************************/
/*! exports provided: choseMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choseMenu", function() { return choseMenu; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createFunctions/createCanvas */ "./src/gamesrc/createFunctions/createCanvas.js");
/* harmony import */ var _createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createFunctions/createButtonsForMenu */ "./src/gamesrc/createFunctions/createButtonsForMenu.js");



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

/***/ "./src/gamesrc/designFunctions/activateHovering.js":
/*!*********************************************************!*\
  !*** ./src/gamesrc/designFunctions/activateHovering.js ***!
  \*********************************************************/
/*! exports provided: activateHovering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateHovering", function() { return activateHovering; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createFunctions/createCanvas */ "./src/gamesrc/createFunctions/createCanvas.js");
/* harmony import */ var _createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createFunctions/createButtonsForMenu */ "./src/gamesrc/createFunctions/createButtonsForMenu.js");



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

/***/ "./src/gamesrc/screens/choseCaracterScreen.js":
/*!****************************************************!*\
  !*** ./src/gamesrc/screens/choseCaracterScreen.js ***!
  \****************************************************/
/*! exports provided: choseCaracterScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choseCaracterScreen", function() { return choseCaracterScreen; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createFunctions/createCanvas */ "./src/gamesrc/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/const */ "./src/gamesrc/const/const.js");
/* harmony import */ var _createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createFunctions/createButtonsForMenu */ "./src/gamesrc/createFunctions/createButtonsForMenu.js");
/* harmony import */ var _designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../designFunctions/activateHovering */ "./src/gamesrc/designFunctions/activateHovering.js");
/* harmony import */ var _navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigationMenu/navigationMenu */ "./src/gamesrc/screens/navigationMenu/navigationMenu.js");
/* harmony import */ var _designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../designFunctions/activateClickForMenu */ "./src/gamesrc/designFunctions/activateClickForMenu.js");
/* harmony import */ var _playScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playScreen */ "./src/gamesrc/screens/playScreen.js");
/* harmony import */ var _classesScreen_warriorScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classesScreen/warriorScreen */ "./src/gamesrc/screens/classesScreen/warriorScreen.js");
/* harmony import */ var _classesScreen_mageScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classesScreen/mageScreen */ "./src/gamesrc/screens/classesScreen/mageScreen.js");










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

/***/ "./src/gamesrc/screens/classesScreen/mageScreen.js":
/*!*********************************************************!*\
  !*** ./src/gamesrc/screens/classesScreen/mageScreen.js ***!
  \*********************************************************/
/*! exports provided: mageScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mageScreen", function() { return mageScreen; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createFunctions/createCanvas */ "./src/gamesrc/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/const */ "./src/gamesrc/const/const.js");
/* harmony import */ var _classes_mage_mage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/mage/mage */ "./src/gamesrc/classes/mage/mage.js");




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
   mage.getContent;
   mage.getSprite;
};


/***/ }),

/***/ "./src/gamesrc/screens/classesScreen/warriorScreen.js":
/*!************************************************************!*\
  !*** ./src/gamesrc/screens/classesScreen/warriorScreen.js ***!
  \************************************************************/
/*! exports provided: warriorScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warriorScreen", function() { return warriorScreen; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createFunctions/createCanvas */ "./src/gamesrc/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/const */ "./src/gamesrc/const/const.js");
/* harmony import */ var _classes_warrior_warrior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/warrior/warrior */ "./src/gamesrc/classes/warrior/warrior.js");




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
   warrior.getContent;
   warrior.getSprite;
};


/***/ }),

/***/ "./src/gamesrc/screens/mainMenu.js":
/*!*****************************************!*\
  !*** ./src/gamesrc/screens/mainMenu.js ***!
  \*****************************************/
/*! exports provided: playButton, optionButton, createMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playButton", function() { return playButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionButton", function() { return optionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMenu", function() { return createMenu; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createFunctions/createCanvas */ "./src/gamesrc/createFunctions/createCanvas.js");
/* harmony import */ var _createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createFunctions/createButtonsForMenu */ "./src/gamesrc/createFunctions/createButtonsForMenu.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../package.json */ "./package.json", 1);





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

/***/ "./src/gamesrc/screens/navigationMenu/navigationMenu.js":
/*!**************************************************************!*\
  !*** ./src/gamesrc/screens/navigationMenu/navigationMenu.js ***!
  \**************************************************************/
/*! exports provided: navigationMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationMenu", function() { return navigationMenu; });
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const/const */ "./src/gamesrc/const/const.js");


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

/***/ "./src/gamesrc/screens/optionsScreen.js":
/*!**********************************************!*\
  !*** ./src/gamesrc/screens/optionsScreen.js ***!
  \**********************************************/
/*! exports provided: optionScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionScreen", function() { return optionScreen; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createFunctions/createCanvas */ "./src/gamesrc/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/const */ "./src/gamesrc/const/const.js");
/* harmony import */ var _createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createFunctions/createButtonsForMenu */ "./src/gamesrc/createFunctions/createButtonsForMenu.js");
/* harmony import */ var _designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../designFunctions/activateHovering */ "./src/gamesrc/designFunctions/activateHovering.js");
/* harmony import */ var _navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigationMenu/navigationMenu */ "./src/gamesrc/screens/navigationMenu/navigationMenu.js");
/* harmony import */ var _designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../designFunctions/activateClickForMenu */ "./src/gamesrc/designFunctions/activateClickForMenu.js");
/* harmony import */ var _mainMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainMenu */ "./src/gamesrc/screens/mainMenu.js");








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

/***/ "./src/gamesrc/screens/playScreen.js":
/*!*******************************************!*\
  !*** ./src/gamesrc/screens/playScreen.js ***!
  \*******************************************/
/*! exports provided: playScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playScreen", function() { return playScreen; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createFunctions/createCanvas */ "./src/gamesrc/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/const */ "./src/gamesrc/const/const.js");
/* harmony import */ var _createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createFunctions/createButtonsForMenu */ "./src/gamesrc/createFunctions/createButtonsForMenu.js");
/* harmony import */ var _designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../designFunctions/activateHovering */ "./src/gamesrc/designFunctions/activateHovering.js");
/* harmony import */ var _designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../designFunctions/activateClickForMenu */ "./src/gamesrc/designFunctions/activateClickForMenu.js");
/* harmony import */ var _mainMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainMenu */ "./src/gamesrc/screens/mainMenu.js");
/* harmony import */ var _navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigationMenu/navigationMenu */ "./src/gamesrc/screens/navigationMenu/navigationMenu.js");
/* harmony import */ var _choseCaracterScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./choseCaracterScreen */ "./src/gamesrc/screens/choseCaracterScreen.js");









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


/***/ }),

/***/ "./src/gametest/canvas/canvasDraw.js":
/*!*******************************************!*\
  !*** ./src/gametest/canvas/canvasDraw.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCanvas */ "./src/gametest/canvas/createCanvas.js");


Object(_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();


/***/ }),

/***/ "./src/gametest/canvas/createCanvas.js":
/*!*********************************************!*\
  !*** ./src/gametest/canvas/createCanvas.js ***!
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

const canvas = document.querySelector('#testWindow');
const ctx = canvas.getContext('2d');

const createCanvas = () => {
   ctx.fillRect(0, 0, canvas.width, canvas.height);
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
/* harmony import */ var _gamesrc_createFunctions_createMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamesrc/createFunctions/createMenu */ "./src/gamesrc/createFunctions/createMenu.js");
/* harmony import */ var _gametest_canvas_canvasDraw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gametest/canvas/canvasDraw */ "./src/gametest/canvas/canvasDraw.js");
/**
 * import main canvas
 */


/**
 * import test canvas
 */



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzcmMvY2xhc3Nlcy9tYWdlL21hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzcmMvY2xhc3Nlcy90ZW1wbGF0ZXMvY2FyYWN0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL2NsYXNzZXMvd2Fycmlvci93YXJyaW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL2NvbnN0L2NvbnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUNsaWNrRm9yTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9zY3JlZW5zL2Nob3NlQ2FyYWN0ZXJTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzcmMvc2NyZWVucy9jbGFzc2VzU2NyZWVuL21hZ2VTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzcmMvc2NyZWVucy9jbGFzc2VzU2NyZWVuL3dhcnJpb3JTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzcmMvc2NyZWVucy9tYWluTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9zY3JlZW5zL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL3NjcmVlbnMvb3B0aW9uc1NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9zY3JlZW5zL3BsYXlTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWV0ZXN0L2NhbnZhcy9jYW52YXNEcmF3LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1ldGVzdC9jYW52YXMvY3JlYXRlQ2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEU0QjtBQUNmO0FBSWI7QUFDd0I7QUFDUDtBQUNDO0FBQ0k7QUFDSzs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckVvQjs7QUFFckI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IE1hZ2VzIGZyb20gJy4vbWFnZS5qc29uJztcbmltcG9ydCB7Q2FyYWN0ZXJzfSBmcm9tICcuLi90ZW1wbGF0ZXMvY2FyYWN0ZXJzJztcblxuLyoqXG4gKiBAY2xhc3MgV2FycmlvclxuICovXG5leHBvcnQgY2xhc3MgTWFnZSBleHRlbmRzIENhcmFjdGVycyB7XG4gICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIHRoaXMubmFtZSA9IE1hZ2VzLk5hbWU7XG4gICAgICB0aGlzLmxpZmUgPSBNYWdlcy5MaWZlO1xuICAgICAgdGhpcy5wcm90ID0gTWFnZXMuUHJvdDtcbiAgICAgIHRoaXMucmVzdW1lID0gTWFnZXMuUmVzdW1lO1xuICAgICAgdGhpcy5zcHJpdGUgPSB7XG4gICAgICAgICBpbWFnZTogTWFnZXMuU3ByaXRlLFxuICAgICAgICAgc3g6IDI0LFxuICAgICAgICAgc3k6IDI0LFxuICAgICAgICAgc1dpZHRoOiAxMDIsXG4gICAgICAgICBzSGVpZ2h0OiAxMjAsXG4gICAgICAgICBkeDogNDAwLFxuICAgICAgICAgZHk6IDIwMCxcbiAgICAgICAgIGRXaWR0aDogOTYsXG4gICAgICAgICBkSGVpZ2h0OiAxNDQsXG4gICAgICB9O1xuICAgfVxufVxuIiwiaW1wb3J0IHtjdHgsIGNhbnZhc30gZnJvbSAnLi4vLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhcyc7XG5cbi8qKlxuICogQGNsYXNzIENhcmFjdGVyc1xuICovXG5leHBvcnQgY2xhc3MgQ2FyYWN0ZXJzIHtcbiAgIC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAgICAqIEBwYXJhbSAge2ludH0gbGlmZVxuICAgICogQHBhcmFtICB7aW50fSBwcm90XG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IHJlc3VtZVxuICAgICovXG4gICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIC8qKiBhYnN0cmFjdCBjb250cnVjdG9yICovXG4gICAgICBpZiAobmV3LnRhcmdldCA9PT0gQ2FyYWN0ZXJzKSB7XG4gICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IENhcmFjdGVycyBpbnN0YW5jZXMgZGlyZWN0bHknKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5uYW1lID0gJyc7XG4gICAgICB0aGlzLmxpZmUgPSAwO1xuICAgICAgdGhpcy5wcm90ID0gMDtcbiAgICAgIHRoaXMucmVzdW1lID0gJyc7XG4gICAgICB0aGlzLnNwcml0ZSA9IHtcbiAgICAgICAgIGltYWdlOiAnL3NyYy9hc3NldHMvc3ByaXRlL3dhcnJpb3Ivd2FycmlvclNwcml0ZS5wbmcnLFxuICAgICAgICAgc3g6IDAsXG4gICAgICAgICBzeTogMCxcbiAgICAgICAgIHNXaWR0aDogMCxcbiAgICAgICAgIHNIZWlnaHQ6IDAsXG4gICAgICAgICBkeDogMCxcbiAgICAgICAgIGR5OiAwLFxuICAgICAgICAgZHdpZHRoOiAwLFxuICAgICAgICAgZEhlaWdodDogMCxcbiAgICAgIH07XG4gICB9XG5cbiAgIC8qKlxuICAgICogQHJldHVybiB7U3RyaW5nfSBuYW1lXG4gICAgKi9cbiAgIGdldCBnZXROYW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgIH1cbiAgIC8qKlxuICAgICogQHJldHVybiB7aW50fSBsaWZlXG4gICAgKi9cbiAgIGdldCBnZXRMaWZlKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGlmZTtcbiAgIH1cbiAgIC8qKlxuICAgICogQHJldHVybiB7aW50fSBwcm90XG4gICAgKi9cbiAgIGdldCBnZXRQcm90KCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvdDtcbiAgIH1cbiAgIC8qKlxuICAgICogQHJldHVybiB7U3RyaW5nfSByZXN1bWVcbiAgICAqL1xuICAgZ2V0IGdldFJlc3VtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc3VtZTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBAbWV0aG9kIGRyYXdDb250ZW50XG4gICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICogQHBhcmFtIHtpbnR9IGxpZmVcbiAgICAqIEBwYXJhbSB7aW50fSBwcm90XG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVzdW1lXG4gICAgKi9cbiAgIGRyYXdDb250ZW50KG5hbWUsIGxpZmUsIHByb3QsIHJlc3VtZSkge1xuICAgICAgLyoqXG4gICAgICAgKiB3YXJyaW9yIHRpdGxlXG4gICAgICAgKi9cbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnbGlnaHRibHVlJztcbiAgICAgIGN0eC5mb250ID0gJzUwcHggQXJpYWwgYmxhY2snO1xuICAgICAgY29uc3QgdGl0bGUgPSBuYW1lO1xuICAgICAgY29uc3QgbWV0cmljcyA9IGN0eC5tZWFzdXJlVGV4dChuYW1lKTtcbiAgICAgIGNvbnN0IHdpZHRoID0gbWV0cmljcy53aWR0aDtcblxuICAgICAgY29uc3QgcG9zaXRpb24gPSBjYW52YXMud2lkdGggLyAyIC0gd2lkdGggLyAyIC0gMjU7XG4gICAgICBjdHguZmlsbFRleHQodGl0bGUsIHBvc2l0aW9uLCA1MCk7XG5cbiAgICAgIC8qKlxuICAgICAgICogc3RhdHMgZnJhbWVcbiAgICAgICAqL1xuICAgICAgY29uc3Qgc3RhdHNGcmFtZSA9IHtcbiAgICAgICAgIHg6IDIwLFxuICAgICAgICAgeTogMjAsXG4gICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIHNwcml0ZSBmcmFtZVxuICAgICAgICovXG4gICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IHtcbiAgICAgICAgIHg6IDMwMCxcbiAgICAgICAgIHk6IDEwMCxcbiAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgIH07XG5cbiAgICAgIC8qKiBzdGF0cyBmcmFtZSBkcmF3ICAqL1xuICAgICAgY3R4LnJlY3Qoc3RhdHNGcmFtZS54LCBzdGF0c0ZyYW1lLnksIHN0YXRzRnJhbWUud2lkdGgsIHN0YXRzRnJhbWUuaGVpZ2h0KTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgLyoqIHNwcml0ZSBmcmFtZSBkcmF3ICAqL1xuICAgICAgY3R4LnJlY3QoXG4gICAgICAgICBzcHJpdGVGcmFtZS54LFxuICAgICAgICAgc3ByaXRlRnJhbWUueSxcbiAgICAgICAgIHNwcml0ZUZyYW1lLndpZHRoLFxuICAgICAgICAgc3ByaXRlRnJhbWUuaGVpZ2h0XG4gICAgICApO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgLyoqXG4gICAgICAgKiBjb250ZW50RnJhbWVcbiAgICAgICAqL1xuXG4gICAgICBjb25zdCBzdGF0c0FuZFNwcml0ZSA9IHtcbiAgICAgICAgIHg6IHN0YXRzRnJhbWUud2lkdGggLyAyLFxuICAgICAgICAgeTogc3RhdHNGcmFtZS5oZWlnaHQgLyAyLFxuXG4gICAgICAgICAvKiogYXJyYXkgZm9yIGNvbnRlbnQgKi9cbiAgICAgICAgIGNvbnRlbnQ6IFtgQ2xhc3M6ICR7bmFtZX1gLCBgTGlmZTogJHtsaWZlfWAsIGBQcm90OiAke3Byb3R9YCwgcmVzdW1lXSxcbiAgICAgICAgIC8qKlxuICAgICAgICAgICpcbiAgICAgICAgICAqIEBwYXJhbSB7Kn0gY29udGVudFxuICAgICAgICAgICogQHJldHVybiB7aW50fVxuICAgICAgICAgICovXG4gICAgICAgICBwb3MoY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGN0eC5tZWFzdXJlVGV4dChjb250ZW50KS53aWR0aCAvIDIuNTtcbiAgICAgICAgIH0sXG4gICAgICAgICAvKipcbiAgICAgICAgICAqXG4gICAgICAgICAgKiBAcGFyYW0geyp9IHN0eWxlXG4gICAgICAgICAgKiBAcGFyYW0geyp9IGZvbnRcbiAgICAgICAgICAqL1xuICAgICAgICAgZHJhdyhzdHlsZSA9ICdsaWdodGJsdWUnLCBmb250ID0gJzIwcHggQXJpYWwgYmxhY2snKSB7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gLTIwMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250ZW50Lmxlbmd0aDsgaSsrLCBoZWlnaHQgKz0gMTAwKSB7XG4gICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gc3R5bGU7XG4gICAgICAgICAgICAgICBjdHguZm9udCA9IGZvbnQ7XG4gICAgICAgICAgICAgICBjdHguZmlsbFRleHQoXG4gICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRbaV0sXG4gICAgICAgICAgICAgICAgICB0aGlzLnggLSB0aGlzLnBvcyh0aGlzLmNvbnRlbnRbaV0pLFxuICAgICAgICAgICAgICAgICAgdGhpcy55ICsgaGVpZ2h0XG4gICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIC8qKiBkcmF3IGNvbnRlbnQgKi9cbiAgICAgIHN0YXRzQW5kU3ByaXRlLmRyYXcoKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBAbWV0aG9kIGRyYXdDb250ZW50XG4gICAgKiBAcGFyYW0ge1N0cmluZ30gc3ByaXRlUGF0aFxuICAgICogQHBhcmFtIHsqfSBzcHJpdGVJbmZvc1xuICAgICovXG4gICBkcmF3U3RhdGljU3ByaXRlKC4uLmluZm9zKSB7XG4gICAgICBsZXQgc3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICBzcHJpdGUuc3JjID0gaW5mb3NbMF07XG4gICAgICBpbmZvcy5zaGlmdCgpO1xuICAgICAgc3ByaXRlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgIGN0eC5kcmF3SW1hZ2Uoc3ByaXRlLCAuLi5pbmZvcyk7XG4gICAgICB9O1xuICAgfVxuXG4gICAvKipcbiAgICAqIEByZXR1cm4geyp9IHRoaXMuZHJhd0NvbnRlbnQoKVxuICAgICovXG4gICBnZXQgZ2V0Q29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRyYXdDb250ZW50KHRoaXMubmFtZSwgdGhpcy5saWZlLCB0aGlzLnByb3QsIHRoaXMucmVzdW1lKTtcbiAgIH1cbiAgIC8qKlxuICAgICogQHJldHVybiB7Kn0gdGhpcy5kcmF3U3ByaXRlT25NZW51KClcbiAgICAqL1xuICAgZ2V0IGdldFNwcml0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRyYXdTdGF0aWNTcHJpdGUoXG4gICAgICAgICB0aGlzLnNwcml0ZS5pbWFnZSxcbiAgICAgICAgIHRoaXMuc3ByaXRlLnN4LFxuICAgICAgICAgdGhpcy5zcHJpdGUuc3ksXG4gICAgICAgICB0aGlzLnNwcml0ZS5zV2lkdGgsXG4gICAgICAgICB0aGlzLnNwcml0ZS5zSGVpZ2h0LFxuICAgICAgICAgdGhpcy5zcHJpdGUuZHgsXG4gICAgICAgICB0aGlzLnNwcml0ZS5keSxcbiAgICAgICAgIHRoaXMuc3ByaXRlLmRXaWR0aCxcbiAgICAgICAgIHRoaXMuc3ByaXRlLmRIZWlnaHRcbiAgICAgICk7XG4gICB9XG59XG4iLCJpbXBvcnQgV2FycmlvcnMgZnJvbSAnLi93YXJyaW9yLmpzb24nO1xuaW1wb3J0IHtDYXJhY3RlcnN9IGZyb20gJy4uL3RlbXBsYXRlcy9jYXJhY3RlcnMnO1xuXG4vKipcbiAqIEBjbGFzcyBXYXJyaW9yXG4gKi9cbmV4cG9ydCBjbGFzcyBXYXJyaW9yIGV4dGVuZHMgQ2FyYWN0ZXJzIHtcbiAgIC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMubmFtZSA9IFdhcnJpb3JzLk5hbWU7XG4gICAgICB0aGlzLmxpZmUgPSBXYXJyaW9ycy5MaWZlO1xuICAgICAgdGhpcy5wcm90ID0gV2FycmlvcnMuUHJvdDtcbiAgICAgIHRoaXMucmVzdW1lID0gV2FycmlvcnMuUmVzdW1lO1xuICAgICAgdGhpcy5zcHJpdGUgPSB7XG4gICAgICAgICBpbWFnZTogV2FycmlvcnMuU3ByaXRlLFxuICAgICAgICAgc3g6IDI0LFxuICAgICAgICAgc3k6IDEyLFxuICAgICAgICAgc1dpZHRoOiA0OCxcbiAgICAgICAgIHNIZWlnaHQ6IDcyLFxuICAgICAgICAgZHg6IDQwMCxcbiAgICAgICAgIGR5OiAyMDAsXG4gICAgICAgICBkV2lkdGg6IDk2LFxuICAgICAgICAgZEhlaWdodDogMTQ0LFxuICAgICAgfTtcbiAgIH1cbn1cbiIsIi8qKlxuICogRGVjbGFyaW5nIHVzZWZ1bCB2YXJpYWJsZXNcbiAqL1xuXG5leHBvcnQgbGV0IFNUQVRFID0ge1xuICAgaWQ6IDEsXG5cbiAgIFRpdGxlOiAnTWVudScsXG5cbiAgIHNldFRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICB0aGlzLlRpdGxlID0gbmV3VGl0bGU7XG4gICB9LFxuXG4gICBnZXRUaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLlRpdGxlO1xuICAgfSxcbn07XG4iLCJpbXBvcnQge2N0eCwgY2FudmFzfSBmcm9tICcuL2NyZWF0ZUNhbnZhcyc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7Kn0geFxuICogQHBhcmFtIHsqfSB5XG4gKiBAcGFyYW0geyp9IHdpZHRoXG4gKiBAcGFyYW0geyp9IGhlaWdodFxuICogQHBhcmFtIHsqfSB0ZXh0XG4gKiBAcGFyYW0geyp9IGJhY2tncm91bmRDb2xvclxuICovXG5cbi8qKlxuICogQ3JlYXRlIEJ1dHRvbnMgYW5kIHJldHVybiBwb3NpdGlvblxuICovXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b25zID0gKHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHQsIGJhY2tncm91bmRDb2xvcikgPT4ge1xuICAgcmV0dXJuIHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvb3JCdXR0b25zID0gKGUsIG9iamVjdCkgPT4ge1xuICAgY29uc3QgbW91c2UgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgIH07XG5cbiAgIGNvbnN0IGJvdW5kcyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgIC8vIGdldCB0aGUgbW91c2UgY29vcmRpbmF0ZXMsIHN1YnRyYWN0IHRoZSBjYW52YXMgdG9wIGxlZnQgYW5kIGFueSBzY3JvbGxpbmdcbiAgIG1vdXNlLnggPSBlLnBhZ2VYIC0gYm91bmRzLmxlZnQgLSBzY3JvbGxYO1xuICAgbW91c2UueSA9IGUucGFnZVkgLSBib3VuZHMudG9wIC0gc2Nyb2xsWTtcblxuICAgcmV0dXJuIChcbiAgICAgIG1vdXNlLnggPiBvYmplY3QueCAmJlxuICAgICAgbW91c2UueCA8IG9iamVjdC54ICsgb2JqZWN0LndpZHRoICYmXG4gICAgICBtb3VzZS55ID4gb2JqZWN0LnkgJiZcbiAgICAgIG1vdXNlLnkgPCBvYmplY3QueSArIG9iamVjdC5oZWlnaHRcbiAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgZHJhd0J1dHRvbnMgPSAoLi4uYnV0dG9uKSA9PiB7XG4gICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbi5sZW5ndGg7IGkrKykge1xuICAgICAgLyoqIGJ1dHRvbiB0byBjcmVhdGUgKi9cbiAgICAgIGN0eC5maWxsU3R5bGUgPSBidXR0b25baV0uYmFja2dyb3VuZENvbG9yO1xuICAgICAgY3R4LmZpbGxSZWN0KGJ1dHRvbltpXS54LCBidXR0b25baV0ueSwgYnV0dG9uW2ldLndpZHRoLCBidXR0b25baV0uaGVpZ2h0KTtcblxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2dyZXknO1xuICAgICAgY3R4LmxpbmVXaWR0aCA9ICc3JztcbiAgICAgIGN0eC5zdHJva2VSZWN0KFxuICAgICAgICAgYnV0dG9uW2ldLngsXG4gICAgICAgICBidXR0b25baV0ueSxcbiAgICAgICAgIGJ1dHRvbltpXS53aWR0aCxcbiAgICAgICAgIGJ1dHRvbltpXS5oZWlnaHRcbiAgICAgICk7XG5cbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgY3R4LmZvbnQgPSAnMjNweCBBcmlhbCBCbGFjayc7XG4gICAgICBjdHguZmlsbFRleHQoXG4gICAgICAgICBidXR0b25baV0udGV4dCxcbiAgICAgICAgIGJ1dHRvbltpXS54ICsgMTAsXG4gICAgICAgICBidXR0b25baV0ueSArIGJ1dHRvbltpXS5oZWlnaHQgLyAyICsgNVxuICAgICAgKTtcbiAgIH1cbn07XG4iLCIvKipcbiAqIEdldCBDYW52YXNcbiAqL1xuXG5leHBvcnQgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVXaW5kb3cnKTtcbmV4cG9ydCBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNhbnZhcyA9ICgpID0+IHtcbiAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xufTtcbiIsImltcG9ydCB7Y3JlYXRlQ2FudmFzfSBmcm9tICcuL2NyZWF0ZUNhbnZhcyc7XG5cbmltcG9ydCB7U1RBVEV9IGZyb20gJy4uL2NvbnN0L2NvbnN0JztcbmltcG9ydCB7Y2hvc2VNZW51fSBmcm9tICcuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnUnO1xuaW1wb3J0IHthY3RpdmF0ZUhvdmVyaW5nfSBmcm9tICcuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZyc7XG5pbXBvcnQge3BsYXlTY3JlZW59IGZyb20gJy4uL3NjcmVlbnMvcGxheVNjcmVlbic7XG5pbXBvcnQge29wdGlvblNjcmVlbn0gZnJvbSAnLi4vc2NyZWVucy9vcHRpb25zU2NyZWVuJztcbmltcG9ydCB7Y3JlYXRlTWVudSwgcGxheUJ1dHRvbiwgb3B0aW9uQnV0dG9ufSBmcm9tICcuLi9zY3JlZW5zL21haW5NZW51JztcbmltcG9ydCB7bmF2aWdhdGlvbk1lbnV9IGZyb20gJy4uL3NjcmVlbnMvbmF2aWdhdGlvbk1lbnUvbmF2aWdhdGlvbk1lbnUnO1xuXG5pZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gJ01lbnUnKSB7XG4gICAvKipcbiAgICAqIENyZWF0ZSB0aGUgY2FudmFzXG4gICAgKi9cbiAgIGNyZWF0ZUNhbnZhcygpO1xuXG4gICAvKipcbiAgICAqIENyZWF0ZSB0aGUgbWFpbiBNZW51XG4gICAgKi9cbiAgIGlmIChTVEFURS5nZXRUaXRsZSgpID09PSAnTWVudScpIGNyZWF0ZU1lbnUoKTtcblxuICAgLyoqXG4gICAgKiBBY3RpdmF0ZSBIb3ZlcmluZ1xuICAgICovXG5cbiAgIGFjdGl2YXRlSG92ZXJpbmcoXG4gICAgICAoKSA9PiB7XG4gICAgICAgICBuYXZpZ2F0aW9uTWVudSgnTWVudScsIGNyZWF0ZU1lbnUsICdNZW51Jyk7XG4gICAgICB9LFxuICAgICAgcGxheUJ1dHRvbixcbiAgICAgIG9wdGlvbkJ1dHRvblxuICAgKTtcblxuICAgLyoqXG4gICAgKiBBY3RpdmF0ZSBDbGlja1xuICAgICovXG5cbiAgIGNob3NlTWVudSgoKSA9PiB7XG4gICAgICBuYXZpZ2F0aW9uTWVudSgnTWVudScsIHBsYXlTY3JlZW4sICdJbmdhbWUnKTtcbiAgIH0sIHBsYXlCdXR0b24pO1xuXG4gICBjaG9zZU1lbnUoKCkgPT4ge1xuICAgICAgbmF2aWdhdGlvbk1lbnUoJ01lbnUnLCBvcHRpb25TY3JlZW4sICdPcHRpb25zJyk7XG4gICB9LCBvcHRpb25CdXR0b24pO1xufVxuIiwiaW1wb3J0IHtjYW52YXN9IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuaW1wb3J0IHtjb29yQnV0dG9uc30gZnJvbSAnLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51JztcblxuZXhwb3J0IGNvbnN0IGNob3NlTWVudSA9IChocmVmLCBidXR0b24pID0+IHtcbiAgIC8qKlxuICAgICogQ2xpY2sgRXZlbnRcbiAgICAqIENob29zZSBtZW51IHRvIGNsaWNrXG4gICAgKi9cbiAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICBpZiAoY29vckJ1dHRvbnMoZSwgYnV0dG9uKSkge1xuICAgICAgICAgICAgaHJlZigpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfSk7XG59O1xuIiwiaW1wb3J0IHtjYW52YXN9IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuaW1wb3J0IHtjb29yQnV0dG9uc30gZnJvbSAnLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51JztcblxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlSG92ZXJpbmcgPSAocmVsb2FkQWN0dWFsTWVudSwgLi4uYnV0dG9uKSA9PiB7XG4gICAvKipcbiAgICAqIEhvdmVyIGV2ZW50XG4gICAgKi9cbiAgIGlmIChidXR0b24ubGVuZ3RoKSB7XG4gICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb29yQnV0dG9ucyhlLCBidXR0b25baV0pKSB7XG4gICAgICAgICAgICAgICBidXR0b25baV0uYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBsYXlcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgYnV0dG9uW2ldLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG5cbiAgICAgICAgIHJlbG9hZEFjdHVhbE1lbnVcbiAgICAgICAgICAgID8gcmVsb2FkQWN0dWFsTWVudSgpXG4gICAgICAgICAgICA6IC8vIGNvbnNvbGUuZXJyb3IoJ01pc3NpbmcgRnVuY3Rpb24gUGFyYW1ldGVyJylcbiAgICAgICAgICAgIGZhbHNlO1xuICAgICAgfSk7XG4gICB9XG59O1xuIiwiaW1wb3J0IHtjYW52YXMsIGNyZWF0ZUNhbnZhc30gZnJvbSAnLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhcyc7XG5pbXBvcnQge1NUQVRFfSBmcm9tICcuLi9jb25zdC9jb25zdCc7XG5pbXBvcnQge1xuICAgY3JlYXRlQnV0dG9ucyxcbiAgIGRyYXdCdXR0b25zLFxufSBmcm9tICcuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnUnO1xuaW1wb3J0IHthY3RpdmF0ZUhvdmVyaW5nfSBmcm9tICcuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZyc7XG5pbXBvcnQge25hdmlnYXRpb25NZW51fSBmcm9tICcuL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51JztcbmltcG9ydCB7Y2hvc2VNZW51fSBmcm9tICcuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnUnO1xuaW1wb3J0IHtwbGF5U2NyZWVufSBmcm9tICcuL3BsYXlTY3JlZW4nO1xuaW1wb3J0IHt3YXJyaW9yU2NyZWVufSBmcm9tICcuL2NsYXNzZXNTY3JlZW4vd2FycmlvclNjcmVlbic7XG5pbXBvcnQge21hZ2VTY3JlZW59IGZyb20gJy4vY2xhc3Nlc1NjcmVlbi9tYWdlU2NyZWVuJztcblxuLyoqXG4gKiBXYXJyaW9yXG4gKi9cblxuY29uc3Qgd2FycmlvciA9IGNyZWF0ZUJ1dHRvbnMoXG4gICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxuICAgY2FudmFzLmhlaWdodCAvIDIgLSAxMDAsXG4gICAyMDAsXG4gICA1MCxcbiAgICdXYXJyaW9yJyxcbiAgICd3aGl0ZSdcbik7XG5cbi8qKlxuICogTWFnZVxuICovXG5cbmNvbnN0IG1hZ2UgPSBjcmVhdGVCdXR0b25zKFxuICAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjUsXG4gICAyMDAsXG4gICA1MCxcbiAgICdNYWdlJyxcbiAgICd3aGl0ZSdcbik7XG5cbi8qKlxuICogTWFnZVxuICovXG5cbmNvbnN0IGNhbmNlbCA9IGNyZWF0ZUJ1dHRvbnMoXG4gICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxuICAgY2FudmFzLmhlaWdodCAvIDIgKyA1MCxcbiAgIDIwMCxcbiAgIDUwLFxuICAgJ0NhbmNlbCcsXG4gICAnd2hpdGUnXG4pO1xuXG5leHBvcnQgY29uc3QgY2hvc2VDYXJhY3RlclNjcmVlbiA9ICgpID0+IHtcbiAgIC8qKlxuICAgICogcmVtb3ZlIG9sZCBjb21wb25lbnRzXG4gICAgKi9cbiAgIGNyZWF0ZUNhbnZhcygpO1xuXG4gICAvKiogU2V0IFN0YXRlICovXG4gICBTVEFURS5zZXRUaXRsZSgnY2hvc2VDYXJhY3RlcicpO1xuXG4gICBkcmF3QnV0dG9ucyh3YXJyaW9yLCBtYWdlLCBjYW5jZWwpO1xufTtcblxuLyoqXG4gKiBBY3RpdmF0ZSBIb3ZlcmluZ1xuICovXG5cbmFjdGl2YXRlSG92ZXJpbmcoXG4gICAoKSA9PiB7XG4gICAgICBuYXZpZ2F0aW9uTWVudSgnY2hvc2VDYXJhY3RlcicsIGNob3NlQ2FyYWN0ZXJTY3JlZW4sICdjaG9zZUNhcmFjdGVyJyk7XG4gICB9LFxuICAgd2FycmlvcixcbiAgIG1hZ2UsXG4gICBjYW5jZWxcbik7XG5cbi8qKlxuICogQWN0aXZhdGUgQ2xpY2tcbiAqL1xuXG5jaG9zZU1lbnUoKCkgPT4ge1xuICAgbmF2aWdhdGlvbk1lbnUoJ2Nob3NlQ2FyYWN0ZXInLCB3YXJyaW9yU2NyZWVuLCAnd2FycmlvU2NyZWVuJyk7XG59LCB3YXJyaW9yKTtcblxuY2hvc2VNZW51KCgpID0+IHtcbiAgIG5hdmlnYXRpb25NZW51KCdjaG9zZUNhcmFjdGVyJywgbWFnZVNjcmVlbiwgJ21hZ2VTY3JlZW4nKTtcbn0sIG1hZ2UpO1xuXG5jaG9zZU1lbnUoKCkgPT4ge1xuICAgbmF2aWdhdGlvbk1lbnUoJ2Nob3NlQ2FyYWN0ZXInLCBwbGF5U2NyZWVuLCAnSW5nYW1lJyk7XG59LCBjYW5jZWwpO1xuIiwiaW1wb3J0IHtjcmVhdGVDYW52YXN9IGZyb20gJy4uLy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuaW1wb3J0IHtTVEFURX0gZnJvbSAnLi4vLi4vY29uc3QvY29uc3QnO1xuaW1wb3J0IHtNYWdlfSBmcm9tICcuLi8uLi9jbGFzc2VzL21hZ2UvbWFnZSc7XG5cbi8qKlxuICogY2xhc3MgaW5zdGFuY2VcbiAqL1xuXG5jb25zdCBtYWdlID0gbmV3IE1hZ2UoKTtcblxuLyoqXG4gKiB3YXJyaW9yXG4gKi9cblxuZXhwb3J0IGNvbnN0IG1hZ2VTY3JlZW4gPSAoKSA9PiB7XG4gICAvKipcbiAgICAqIHJlbW92ZSBvbGQgY29tcG9uZW50c1xuICAgICovXG4gICBjcmVhdGVDYW52YXMoKTtcblxuICAgLyoqIHNldCBzdGF0ZSAqL1xuICAgU1RBVEUuc2V0VGl0bGUoJ21hZ2VTY3JlZW4nKTtcblxuICAgLyoqIGRyYXcgd2FycmlvciBjb250ZW50ICovXG4gICBtYWdlLmdldENvbnRlbnQ7XG4gICBtYWdlLmdldFNwcml0ZTtcbn07XG4iLCJpbXBvcnQge2NyZWF0ZUNhbnZhc30gZnJvbSAnLi4vLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhcyc7XG5pbXBvcnQge1NUQVRFfSBmcm9tICcuLi8uLi9jb25zdC9jb25zdCc7XG5pbXBvcnQge1dhcnJpb3J9IGZyb20gJy4uLy4uL2NsYXNzZXMvd2Fycmlvci93YXJyaW9yJztcblxuLyoqXG4gKiBjbGFzcyBpbnN0YW5jZVxuICovXG5cbmNvbnN0IHdhcnJpb3IgPSBuZXcgV2FycmlvcigpO1xuXG4vKipcbiAqIHdhcnJpb3JcbiAqL1xuXG5leHBvcnQgY29uc3Qgd2FycmlvclNjcmVlbiA9ICgpID0+IHtcbiAgIC8qKlxuICAgICogcmVtb3ZlIG9sZCBjb21wb25lbnRzXG4gICAgKi9cbiAgIGNyZWF0ZUNhbnZhcygpO1xuXG4gICAvKiogc2V0IHN0YXRlICovXG4gICBTVEFURS5zZXRUaXRsZSgnd2FycmlvclNjcmVlbicpO1xuXG4gICAvKiogZHJhdyB3YXJyaW9yIGNvbnRlbnQgKi9cbiAgIHdhcnJpb3IuZ2V0Q29udGVudDtcbiAgIHdhcnJpb3IuZ2V0U3ByaXRlO1xufTtcbiIsImltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuaW1wb3J0IHtcbiAgIGNyZWF0ZUJ1dHRvbnMsXG4gICBkcmF3QnV0dG9ucyxcbn0gZnJvbSAnLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51JztcblxuaW1wb3J0IHZlcnNpb24gZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJztcblxuLyoqXG4gKiBQbGF5IEJ1dHRvblxuICovXG5leHBvcnQgY29uc3QgcGxheUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbnMoXG4gICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxuICAgY2FudmFzLmhlaWdodCAvIDIgLSAxMDAsXG4gICAyMDAsXG4gICA1MCxcbiAgICdQbGF5IHRoZSBnYW1lJyxcbiAgICd3aGl0ZSdcbik7XG5cbi8qKlxuICogT3B0aW9ucyBCdXR0b25cbiAqL1xuZXhwb3J0IGNvbnN0IG9wdGlvbkJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbnMoXG4gICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxuICAgY2FudmFzLmhlaWdodCAvIDIgLSAyNSxcbiAgIDIwMCxcbiAgIDUwLFxuICAgJ09wdGlvbnMnLFxuICAgJ3doaXRlJ1xuKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gICAvKipcbiAgICAqIFJldHJpZXZlIEdhbWUgVmVyc2lvblxuICAgICovXG4gICBjb25zdCBnYW1lVmVyc2lvbiA9ICdWICcgKyB2ZXJzaW9uLnZlcnNpb247XG5cbiAgIC8vIERyYXcgVmVyc2lvbiBpbiBjYW52YXMgLy9cbiAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgIGN0eC5mb250ID0gJzE1cHggQXJpYWwgYmxhY2snO1xuICAgY3R4LmZpbGxUZXh0KGdhbWVWZXJzaW9uLCA1MCwgNTApO1xuXG4gICAvKiogRHJhdyBidXR0b24gKi9cbiAgIGRyYXdCdXR0b25zKHBsYXlCdXR0b24sIG9wdGlvbkJ1dHRvbik7XG59O1xuIiwiaW1wb3J0IHtTVEFURX0gZnJvbSAnLi4vLi4vY29uc3QvY29uc3QnO1xuXG5leHBvcnQgY29uc3QgbmF2aWdhdGlvbk1lbnUgPSAoYWN0dWFsU3RhdGUsIHNjcmVlbkxvYWRlZCwgc3RhdGVMb2FkZWQpID0+IHtcbiAgIGlmIChTVEFURS5nZXRUaXRsZSgpID09PSBhY3R1YWxTdGF0ZSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChzdWNjZXNzLCBlcnJvcikgPT4ge1xuICAgICAgICAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IGFjdHVhbFN0YXRlKSB7XG4gICAgICAgICAgICBzdWNjZXNzKCgpID0+IHNjcmVlbkxvYWRlZCgpKTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignRXJyb3IsIFdyb25nIFNUQVRFIFRpdGxlJyk7XG4gICAgICAgICB9XG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgIGlmIChTVEFURS5nZXRUaXRsZSgpID09PSBhY3R1YWxTdGF0ZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICBTVEFURS5zZXRUaXRsZShzdGF0ZUxvYWRlZCk7XG4gICAgICAgICAgICAgICBzY3JlZW5Mb2FkZWQoKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgNTA7XG4gICAgICAgICB9XG4gICAgICB9KTtcbiAgIH1cbn07XG4iLCJpbXBvcnQge2NhbnZhcywgY3JlYXRlQ2FudmFzfSBmcm9tICcuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzJztcbmltcG9ydCB7U1RBVEV9IGZyb20gJy4uL2NvbnN0L2NvbnN0JztcbmltcG9ydCB7XG4gICBjcmVhdGVCdXR0b25zLFxuICAgZHJhd0J1dHRvbnMsXG59IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudSc7XG5pbXBvcnQge2FjdGl2YXRlSG92ZXJpbmd9IGZyb20gJy4uL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUhvdmVyaW5nJztcbmltcG9ydCB7bmF2aWdhdGlvbk1lbnV9IGZyb20gJy4vbmF2aWdhdGlvbk1lbnUvbmF2aWdhdGlvbk1lbnUnO1xuaW1wb3J0IHtjaG9zZU1lbnV9IGZyb20gJy4uL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUNsaWNrRm9yTWVudSc7XG5pbXBvcnQge2NyZWF0ZU1lbnV9IGZyb20gJy4vbWFpbk1lbnUnO1xuXG4vKipcbiAqIFJlc29sdXRpb24gQnV0dG9uXG4gKi9cblxuY29uc3QgcmVzb2x1dGlvbiA9IGNyZWF0ZUJ1dHRvbnMoXG4gICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxuICAgY2FudmFzLmhlaWdodCAvIDIgLSAxMDAsXG4gICAyMDAsXG4gICA1MCxcbiAgICdSZXNvbHV0aW9uJyxcbiAgICd3aGl0ZSdcbik7XG5cbi8qKlxuICogU291bmQgQnV0dG9uXG4gKi9cblxuY29uc3QgY2FuY2VsID0gY3JlYXRlQnV0dG9ucyhcbiAgIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXG4gICBjYW52YXMuaGVpZ2h0IC8gMiAtIDI1LFxuICAgMjAwLFxuICAgNTAsXG4gICAnQ2FuY2VsJyxcbiAgICd3aGl0ZSdcbik7XG5cbmV4cG9ydCBjb25zdCBvcHRpb25TY3JlZW4gPSAoKSA9PiB7XG4gICAvKipcbiAgICAqIHJlbW92ZSBvbGQgY29tcG9uZW50c1xuICAgICovXG4gICBjcmVhdGVDYW52YXMoKTtcblxuICAgLyoqIFNldCBTdGF0ZSAqL1xuICAgU1RBVEUuc2V0VGl0bGUoJ09wdGlvbnMnKTtcblxuICAgLyoqIERyYXcgQnV0dG9ucyAqL1xuICAgZHJhd0J1dHRvbnMocmVzb2x1dGlvbiwgY2FuY2VsKTtcbn07XG5cbi8qKlxuICogQWN0aXZhdGUgSG92ZXJpbmdcbiAqL1xuXG5hY3RpdmF0ZUhvdmVyaW5nKFxuICAgKCkgPT4ge1xuICAgICAgbmF2aWdhdGlvbk1lbnUoJ09wdGlvbnMnLCBvcHRpb25TY3JlZW4sICdPcHRpb25zJyk7XG4gICB9LFxuICAgcmVzb2x1dGlvbixcbiAgIGNhbmNlbFxuKTtcblxuLyoqXG4gKiBBY3RpdmF0ZSBDbGlja1xuICovXG5cbmNob3NlTWVudSgoKSA9PiB7XG4gICBuYXZpZ2F0aW9uTWVudSgnT3B0aW9ucycsIGNyZWF0ZU1lbnUsICdNZW51Jyk7XG59LCBjYW5jZWwpO1xuXG5jaG9zZU1lbnUoKCkgPT4ge1xuICAgbmF2aWdhdGlvbk1lbnUoJ09wdGlvbnMnLCBvcHRpb25TY3JlZW4sICdPcHRpb25zJyk7XG59LCByZXNvbHV0aW9uKTtcbiIsImltcG9ydCB7Y2FudmFzLCBjcmVhdGVDYW52YXN9IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuaW1wb3J0IHtTVEFURX0gZnJvbSAnLi4vY29uc3QvY29uc3QnO1xuaW1wb3J0IHtcbiAgIGNyZWF0ZUJ1dHRvbnMsXG4gICBkcmF3QnV0dG9ucyxcbn0gZnJvbSAnLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51JztcbmltcG9ydCB7YWN0aXZhdGVIb3ZlcmluZ30gZnJvbSAnLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlSG92ZXJpbmcnO1xuaW1wb3J0IHtjaG9zZU1lbnV9IGZyb20gJy4uL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUNsaWNrRm9yTWVudSc7XG5pbXBvcnQge2NyZWF0ZU1lbnV9IGZyb20gJy4vbWFpbk1lbnUnO1xuaW1wb3J0IHtuYXZpZ2F0aW9uTWVudX0gZnJvbSAnLi9uYXZpZ2F0aW9uTWVudS9uYXZpZ2F0aW9uTWVudSc7XG5pbXBvcnQge2Nob3NlQ2FyYWN0ZXJTY3JlZW59IGZyb20gJy4vY2hvc2VDYXJhY3RlclNjcmVlbic7XG5cbi8qKlxuICogY3JlYXRlQ2FyYWN0ZXIgQnV0dG9uXG4gKi9cblxuY29uc3QgY3JlYXRlQ2FyYWN0ZXIgPSBjcmVhdGVCdXR0b25zKFxuICAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gMTAwLFxuICAgMjAwLFxuICAgNTAsXG4gICAnQ2FyYWN0ZXInLFxuICAgJ3doaXRlJ1xuKTtcblxuY29uc3QgY2FuY2VsID0gY3JlYXRlQnV0dG9ucyhcbiAgIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXG4gICBjYW52YXMuaGVpZ2h0IC8gMiAtIDI1LFxuICAgMjAwLFxuICAgNTAsXG4gICAnQ2FuY2VsJyxcbiAgICd3aGl0ZSdcbik7XG5cbmV4cG9ydCBjb25zdCBwbGF5U2NyZWVuID0gKCkgPT4ge1xuICAgLyoqXG4gICAgKiByZW1vdmUgb2xkIGNvbXBvbmVudHNcbiAgICAqL1xuICAgY3JlYXRlQ2FudmFzKCk7XG5cbiAgIC8qKiBTZXQgU3RhdGUgKi9cbiAgIFNUQVRFLnNldFRpdGxlKCdJbmdhbWUnKTtcblxuICAgLyoqIERyYXcgQnV0dG9uICovXG4gICBkcmF3QnV0dG9ucyhjcmVhdGVDYXJhY3RlciwgY2FuY2VsKTtcbn07XG5cbi8qKlxuICogQWN0aXZhdGUgSG92ZXJpbmdcbiAqL1xuXG5hY3RpdmF0ZUhvdmVyaW5nKFxuICAgKCkgPT4ge1xuICAgICAgbmF2aWdhdGlvbk1lbnUoJ0luZ2FtZScsIHBsYXlTY3JlZW4sICdJbmdhbWUnKTtcbiAgIH0sXG4gICBjcmVhdGVDYXJhY3RlcixcbiAgIGNhbmNlbFxuKTtcblxuLyoqXG4gKiBBY3RpdmF0ZSBDbGlja1xuICovXG5cbmNob3NlTWVudSgoKSA9PiB7XG4gICBuYXZpZ2F0aW9uTWVudSgnSW5nYW1lJywgY2hvc2VDYXJhY3RlclNjcmVlbiwgJ2Nob3NlQ2FyYWN0ZXInKTtcbn0sIGNyZWF0ZUNhcmFjdGVyKTtcblxuY2hvc2VNZW51KCgpID0+IHtcbiAgIG5hdmlnYXRpb25NZW51KCdJbmdhbWUnLCBjcmVhdGVNZW51LCAnTWVudScpO1xufSwgY2FuY2VsKTtcbiIsImltcG9ydCB7Y3JlYXRlQ2FudmFzfSBmcm9tICcuL2NyZWF0ZUNhbnZhcyc7XG5cbmNyZWF0ZUNhbnZhcygpO1xuIiwiLyoqXG4gKiBHZXQgQ2FudmFzXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0V2luZG93Jyk7XG5leHBvcnQgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDYW52YXMgPSAoKSA9PiB7XG4gICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn07XG4iLCIvKipcbiAqIGltcG9ydCBtYWluIGNhbnZhc1xuICovXG5pbXBvcnQgJy4vZ2FtZXNyYy9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlTWVudSc7XG5cbi8qKlxuICogaW1wb3J0IHRlc3QgY2FudmFzXG4gKi9cbmltcG9ydCAnLi9nYW1ldGVzdC9jYW52YXMvY2FudmFzRHJhdyc7XG4iXSwic291cmNlUm9vdCI6IiJ9