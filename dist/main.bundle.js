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
/* harmony import */ var _movingSprite_movingSprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movingSprite/movingSprite */ "./src/gametest/movingSprite/movingSprite.js");
/* harmony import */ var _movingSprite_spaceshipTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movingSprite/spaceshipTest */ "./src/gametest/movingSprite/spaceshipTest.js");




Object(_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();

/**
 * basic animations
 */
/*
const sprite = new SpriteAnimation();

setInterval(() => {
   sprite.drawSprite();
}, 100);
*/

const ship = new _movingSprite_spaceshipTest__WEBPACK_IMPORTED_MODULE_2__["Spaceship"]();

ship.drawShip();


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

/***/ "./src/gametest/movingSprite/movingSprite.js":
/*!***************************************************!*\
  !*** ./src/gametest/movingSprite/movingSprite.js ***!
  \***************************************************/
/*! exports provided: SpriteAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteAnimation", function() { return SpriteAnimation; });
/* harmony import */ var _canvas_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas/createCanvas */ "./src/gametest/canvas/createCanvas.js");


/**
 * Class to move spriteSheet
 */

/**
 * @class spriteAnimation
 */
class SpriteAnimation {
   /**
    * @constructor spriteAnimation
    */
   constructor() {
      this.animationSprite = {
         image: {
            width: 860,
            height: 260,
            rows: 2,
            cols: 8,
         },
         direction: {
            rightRow: 0,
            leftRow: 1,
         },
         sprite: {
            defaultFrame: 0,
            frameNumber: 8,
         },
         position: {
            x: 0,
            y: 0,
         },
         canvasCoor: {
            x: 0,
            y: 0,
         },
         move: {
            right: true,
            left: false,

            speed: 8,
         },
      };

      this.animationSprite.sprite.width =
         this.animationSprite.image.width / this.animationSprite.image.cols;

      this.animationSprite.sprite.height =
         this.animationSprite.image.height / this.animationSprite.image.rows;

      this.sprite = new Image();
      this.sprite.src =
         'src/gametest/movingSprite/assets/sprite/testSprite/testSprite.png';
   }

   /**
    * @method moveLeft
    */
   moveLeft() {
      this.animationSprite.move.left = true;
      this.animationSprite.move.right = false;
   }

   /**
    * @method moveRight
    */
   moveRight() {
      this.animationSprite.move.left = false;
      this.animationSprite.move.right = true;
   }

   /**
    * @method drawSprite
    */
   updateFrame() {
      // Updating the frame index
      _canvas_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].clearRect(
         this.animationSprite.position.x,
         this.animationSprite.position.y,
         this.animationSprite.sprite.width,
         this.animationSprite.sprite.height
      );

      this.animationSprite.sprite.defaultFrame =
         ++this.animationSprite.sprite.defaultFrame %
         this.animationSprite.sprite.frameNumber;

      // Calculating the x coordinate for spritesheet
      this.animationSprite.canvasCoor.x =
         this.animationSprite.sprite.defaultFrame *
         this.animationSprite.sprite.width;

      if (
         this.animationSprite.move.left &&
         this.animationSprite.position.x > 0
      ) {
         // calculate srcY
         this.animationSprite.canvasCoor.y =
            this.animationSprite.direction.leftRow *
            this.animationSprite.sprite.height;
         // decreasing the x coordinate
         this.animationSprite.position.x -= this.animationSprite.move.speed;
      }

      // if the right is true and character has not reached right edge
      if (
         this.animationSprite.move.right &&
         this.animationSprite.position.x > 0
      ) {
         // calculate srcY
         this.animationSprite.canvasCoor.y =
            this.animationSprite.direction.rightRow *
            this.animationSprite.sprite.height;
         // decreasing the x coordinate
         this.animationSprite.position.x += this.animationSprite.move.speed;
      }

      document.addEventListener('keydown', (e) => {
         if (e.key === 'd') {
            this.moveRight();
         }
         if (e.key === 'q') {
            this.moveLeft();
         }
      });
   }

   /**
    * @method drawSprite
    */
   drawSprite() {
      // Updating the frame
      this.updateFrame();
      // Drawing the image
      _canvas_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].drawImage(
         this.sprite,
         this.animationSprite.canvasCoor.x,
         this.animationSprite.canvasCoor.y,
         this.animationSprite.sprite.width,
         this.animationSprite.sprite.height,
         this.animationSprite.position.x,
         this.animationSprite.position.y,
         this.animationSprite.sprite.width,
         this.animationSprite.sprite.height
      );
   }
}


/***/ }),

/***/ "./src/gametest/movingSprite/spaceshipTest.js":
/*!****************************************************!*\
  !*** ./src/gametest/movingSprite/spaceshipTest.js ***!
  \****************************************************/
/*! exports provided: Spaceship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spaceship", function() { return Spaceship; });
/* harmony import */ var _canvas_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas/createCanvas */ "./src/gametest/canvas/createCanvas.js");


/**
 * spaceship class
 */

/**
 * @class Spaceship
 */
class Spaceship {
   /**
    * @constructor
    */
   constructor() {
      this.spaceship = {
         sprite: 'src/gametest/movingSprite/assets/sprite/spaceship/ship.png',
      };
   }

   /**
    * @method drawShip
    */
   drawShip() {
      let ship = new Image();
      ship.src = this.spaceship.sprite;

      ship.onload = () => {
         _canvas_createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].drawImage(ship, 4, 4, 712, 704, 300, 200, 200, 200);
      };
   }
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzcmMvY2xhc3Nlcy9tYWdlL21hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzcmMvY2xhc3Nlcy90ZW1wbGF0ZXMvY2FyYWN0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL2NsYXNzZXMvd2Fycmlvci93YXJyaW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL2NvbnN0L2NvbnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUNsaWNrRm9yTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9zY3JlZW5zL2Nob3NlQ2FyYWN0ZXJTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzcmMvc2NyZWVucy9jbGFzc2VzU2NyZWVuL21hZ2VTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzcmMvc2NyZWVucy9jbGFzc2VzU2NyZWVuL3dhcnJpb3JTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzcmMvc2NyZWVucy9tYWluTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9zY3JlZW5zL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL3NjcmVlbnMvb3B0aW9uc1NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9zY3JlZW5zL3BsYXlTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWV0ZXN0L2NhbnZhcy9jYW52YXNEcmF3LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1ldGVzdC9jYW52YXMvY3JlYXRlQ2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1ldGVzdC9tb3ZpbmdTcHJpdGUvbW92aW5nU3ByaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1ldGVzdC9tb3ZpbmdTcHJpdGUvc3BhY2VzaGlwVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qm9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxJQUFJO0FBQ25CLGVBQWUsSUFBSTtBQUNuQixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLElBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsSUFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxJQUFJO0FBQ2xCLGNBQWMsSUFBSTtBQUNsQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixLQUFLLFlBQVksS0FBSyxZQUFZLEtBQUs7QUFDcEU7QUFDQTtBQUNBLG9CQUFvQixFQUFFO0FBQ3RCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLG9CQUFvQixFQUFFO0FBQ3RCLG9CQUFvQixFQUFFO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix5QkFBeUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLEVBQUU7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5TEE7QUFDa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQm9COztBQUVwQjtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RxQjs7QUFFUDtBQUNJO0FBQ087QUFDTjtBQUNFO0FBQ3dCO0FBQ3RCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVDZTtBQUNLOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJlO0FBQ0s7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQjZCO0FBQ2Y7QUFJYjtBQUN3QjtBQUNGO0FBQ0w7QUFDQztBQUNHO0FBQ0g7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRm9CO0FBQ1A7QUFDRDs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJxQjtBQUNQO0FBQ0U7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQm9CO0FBSW5COztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdDYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEI2QjtBQUNmO0FBSWI7QUFDd0I7QUFDRjtBQUNMO0FBQ0M7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFNEI7QUFDZjtBQUliO0FBQ3dCO0FBQ1A7QUFDQztBQUNJO0FBQ0s7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVvQjtBQUNHO0FBQ047O0FBRWxCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1RZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSlk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBNYWdlcyBmcm9tICcuL21hZ2UuanNvbic7XG5pbXBvcnQge0NhcmFjdGVyc30gZnJvbSAnLi4vdGVtcGxhdGVzL2NhcmFjdGVycyc7XG5cbi8qKlxuICogQGNsYXNzIFdhcnJpb3JcbiAqL1xuZXhwb3J0IGNsYXNzIE1hZ2UgZXh0ZW5kcyBDYXJhY3RlcnMge1xuICAgLyoqXG4gICAgKiBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICB0aGlzLm5hbWUgPSBNYWdlcy5OYW1lO1xuICAgICAgdGhpcy5saWZlID0gTWFnZXMuTGlmZTtcbiAgICAgIHRoaXMucHJvdCA9IE1hZ2VzLlByb3Q7XG4gICAgICB0aGlzLnJlc3VtZSA9IE1hZ2VzLlJlc3VtZTtcbiAgICAgIHRoaXMuc3ByaXRlID0ge1xuICAgICAgICAgaW1hZ2U6IE1hZ2VzLlNwcml0ZSxcbiAgICAgICAgIHN4OiAyNCxcbiAgICAgICAgIHN5OiAyNCxcbiAgICAgICAgIHNXaWR0aDogMTAyLFxuICAgICAgICAgc0hlaWdodDogMTIwLFxuICAgICAgICAgZHg6IDQwMCxcbiAgICAgICAgIGR5OiAyMDAsXG4gICAgICAgICBkV2lkdGg6IDk2LFxuICAgICAgICAgZEhlaWdodDogMTQ0LFxuICAgICAgfTtcbiAgIH1cbn1cbiIsImltcG9ydCB7Y3R4LCBjYW52YXN9IGZyb20gJy4uLy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuXG4vKipcbiAqIEBjbGFzcyBDYXJhY3RlcnNcbiAqL1xuZXhwb3J0IGNsYXNzIENhcmFjdGVycyB7XG4gICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAgKiBAcGFyYW0gIHtpbnR9IGxpZmVcbiAgICAqIEBwYXJhbSAge2ludH0gcHJvdFxuICAgICogQHBhcmFtICB7U3RyaW5nfSByZXN1bWVcbiAgICAqL1xuICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAvKiogYWJzdHJhY3QgY29udHJ1Y3RvciAqL1xuICAgICAgaWYgKG5ldy50YXJnZXQgPT09IENhcmFjdGVycykge1xuICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBDYXJhY3RlcnMgaW5zdGFuY2VzIGRpcmVjdGx5Jyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgdGhpcy5saWZlID0gMDtcbiAgICAgIHRoaXMucHJvdCA9IDA7XG4gICAgICB0aGlzLnJlc3VtZSA9ICcnO1xuICAgICAgdGhpcy5zcHJpdGUgPSB7XG4gICAgICAgICBpbWFnZTogJy9zcmMvYXNzZXRzL3Nwcml0ZS93YXJyaW9yL3dhcnJpb3JTcHJpdGUucG5nJyxcbiAgICAgICAgIHN4OiAwLFxuICAgICAgICAgc3k6IDAsXG4gICAgICAgICBzV2lkdGg6IDAsXG4gICAgICAgICBzSGVpZ2h0OiAwLFxuICAgICAgICAgZHg6IDAsXG4gICAgICAgICBkeTogMCxcbiAgICAgICAgIGR3aWR0aDogMCxcbiAgICAgICAgIGRIZWlnaHQ6IDAsXG4gICAgICB9O1xuICAgfVxuXG4gICAvKipcbiAgICAqIEByZXR1cm4ge1N0cmluZ30gbmFtZVxuICAgICovXG4gICBnZXQgZ2V0TmFtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICB9XG4gICAvKipcbiAgICAqIEByZXR1cm4ge2ludH0gbGlmZVxuICAgICovXG4gICBnZXQgZ2V0TGlmZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxpZmU7XG4gICB9XG4gICAvKipcbiAgICAqIEByZXR1cm4ge2ludH0gcHJvdFxuICAgICovXG4gICBnZXQgZ2V0UHJvdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3Q7XG4gICB9XG4gICAvKipcbiAgICAqIEByZXR1cm4ge1N0cmluZ30gcmVzdW1lXG4gICAgKi9cbiAgIGdldCBnZXRSZXN1bWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXN1bWU7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQG1ldGhvZCBkcmF3Q29udGVudFxuICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAqIEBwYXJhbSB7aW50fSBsaWZlXG4gICAgKiBAcGFyYW0ge2ludH0gcHJvdFxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlc3VtZVxuICAgICovXG4gICBkcmF3Q29udGVudChuYW1lLCBsaWZlLCBwcm90LCByZXN1bWUpIHtcbiAgICAgIC8qKlxuICAgICAgICogd2FycmlvciB0aXRsZVxuICAgICAgICovXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ2xpZ2h0Ymx1ZSc7XG4gICAgICBjdHguZm9udCA9ICc1MHB4IEFyaWFsIGJsYWNrJztcbiAgICAgIGNvbnN0IHRpdGxlID0gbmFtZTtcbiAgICAgIGNvbnN0IG1ldHJpY3MgPSBjdHgubWVhc3VyZVRleHQobmFtZSk7XG4gICAgICBjb25zdCB3aWR0aCA9IG1ldHJpY3Mud2lkdGg7XG5cbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gY2FudmFzLndpZHRoIC8gMiAtIHdpZHRoIC8gMiAtIDI1O1xuICAgICAgY3R4LmZpbGxUZXh0KHRpdGxlLCBwb3NpdGlvbiwgNTApO1xuXG4gICAgICAvKipcbiAgICAgICAqIHN0YXRzIGZyYW1lXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHN0YXRzRnJhbWUgPSB7XG4gICAgICAgICB4OiAyMCxcbiAgICAgICAgIHk6IDIwLFxuICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgIGhlaWdodDogNTAwLFxuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBzcHJpdGUgZnJhbWVcbiAgICAgICAqL1xuICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSB7XG4gICAgICAgICB4OiAzMDAsXG4gICAgICAgICB5OiAxMDAsXG4gICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICB9O1xuXG4gICAgICAvKiogc3RhdHMgZnJhbWUgZHJhdyAgKi9cbiAgICAgIGN0eC5yZWN0KHN0YXRzRnJhbWUueCwgc3RhdHNGcmFtZS55LCBzdGF0c0ZyYW1lLndpZHRoLCBzdGF0c0ZyYW1lLmhlaWdodCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIC8qKiBzcHJpdGUgZnJhbWUgZHJhdyAgKi9cbiAgICAgIGN0eC5yZWN0KFxuICAgICAgICAgc3ByaXRlRnJhbWUueCxcbiAgICAgICAgIHNwcml0ZUZyYW1lLnksXG4gICAgICAgICBzcHJpdGVGcmFtZS53aWR0aCxcbiAgICAgICAgIHNwcml0ZUZyYW1lLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIC8qKlxuICAgICAgICogY29udGVudEZyYW1lXG4gICAgICAgKi9cblxuICAgICAgY29uc3Qgc3RhdHNBbmRTcHJpdGUgPSB7XG4gICAgICAgICB4OiBzdGF0c0ZyYW1lLndpZHRoIC8gMixcbiAgICAgICAgIHk6IHN0YXRzRnJhbWUuaGVpZ2h0IC8gMixcblxuICAgICAgICAgLyoqIGFycmF5IGZvciBjb250ZW50ICovXG4gICAgICAgICBjb250ZW50OiBbYENsYXNzOiAke25hbWV9YCwgYExpZmU6ICR7bGlmZX1gLCBgUHJvdDogJHtwcm90fWAsIHJlc3VtZV0sXG4gICAgICAgICAvKipcbiAgICAgICAgICAqXG4gICAgICAgICAgKiBAcGFyYW0geyp9IGNvbnRlbnRcbiAgICAgICAgICAqIEByZXR1cm4ge2ludH1cbiAgICAgICAgICAqL1xuICAgICAgICAgcG9zKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjdHgubWVhc3VyZVRleHQoY29udGVudCkud2lkdGggLyAyLjU7XG4gICAgICAgICB9LFxuICAgICAgICAgLyoqXG4gICAgICAgICAgKlxuICAgICAgICAgICogQHBhcmFtIHsqfSBzdHlsZVxuICAgICAgICAgICogQHBhcmFtIHsqfSBmb250XG4gICAgICAgICAgKi9cbiAgICAgICAgIGRyYXcoc3R5bGUgPSAnbGlnaHRibHVlJywgZm9udCA9ICcyMHB4IEFyaWFsIGJsYWNrJykge1xuICAgICAgICAgICAgbGV0IGhlaWdodCA9IC0yMDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29udGVudC5sZW5ndGg7IGkrKywgaGVpZ2h0ICs9IDEwMCkge1xuICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHN0eWxlO1xuICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBmb250O1xuICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFxuICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50W2ldLFxuICAgICAgICAgICAgICAgICAgdGhpcy54IC0gdGhpcy5wb3ModGhpcy5jb250ZW50W2ldKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMueSArIGhlaWdodFxuICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICAvKiogZHJhdyBjb250ZW50ICovXG4gICAgICBzdGF0c0FuZFNwcml0ZS5kcmF3KCk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQG1ldGhvZCBkcmF3Q29udGVudFxuICAgICogQHBhcmFtIHtTdHJpbmd9IHNwcml0ZVBhdGhcbiAgICAqIEBwYXJhbSB7Kn0gc3ByaXRlSW5mb3NcbiAgICAqL1xuICAgZHJhd1N0YXRpY1Nwcml0ZSguLi5pbmZvcykge1xuICAgICAgbGV0IHNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgc3ByaXRlLnNyYyA9IGluZm9zWzBdO1xuICAgICAgaW5mb3Muc2hpZnQoKTtcbiAgICAgIHNwcml0ZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICBjdHguZHJhd0ltYWdlKHNwcml0ZSwgLi4uaW5mb3MpO1xuICAgICAgfTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBAcmV0dXJuIHsqfSB0aGlzLmRyYXdDb250ZW50KClcbiAgICAqL1xuICAgZ2V0IGdldENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kcmF3Q29udGVudCh0aGlzLm5hbWUsIHRoaXMubGlmZSwgdGhpcy5wcm90LCB0aGlzLnJlc3VtZSk7XG4gICB9XG4gICAvKipcbiAgICAqIEByZXR1cm4geyp9IHRoaXMuZHJhd1Nwcml0ZU9uTWVudSgpXG4gICAgKi9cbiAgIGdldCBnZXRTcHJpdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kcmF3U3RhdGljU3ByaXRlKFxuICAgICAgICAgdGhpcy5zcHJpdGUuaW1hZ2UsXG4gICAgICAgICB0aGlzLnNwcml0ZS5zeCxcbiAgICAgICAgIHRoaXMuc3ByaXRlLnN5LFxuICAgICAgICAgdGhpcy5zcHJpdGUuc1dpZHRoLFxuICAgICAgICAgdGhpcy5zcHJpdGUuc0hlaWdodCxcbiAgICAgICAgIHRoaXMuc3ByaXRlLmR4LFxuICAgICAgICAgdGhpcy5zcHJpdGUuZHksXG4gICAgICAgICB0aGlzLnNwcml0ZS5kV2lkdGgsXG4gICAgICAgICB0aGlzLnNwcml0ZS5kSGVpZ2h0XG4gICAgICApO1xuICAgfVxufVxuIiwiaW1wb3J0IFdhcnJpb3JzIGZyb20gJy4vd2Fycmlvci5qc29uJztcbmltcG9ydCB7Q2FyYWN0ZXJzfSBmcm9tICcuLi90ZW1wbGF0ZXMvY2FyYWN0ZXJzJztcblxuLyoqXG4gKiBAY2xhc3MgV2FycmlvclxuICovXG5leHBvcnQgY2xhc3MgV2FycmlvciBleHRlbmRzIENhcmFjdGVycyB7XG4gICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLm5hbWUgPSBXYXJyaW9ycy5OYW1lO1xuICAgICAgdGhpcy5saWZlID0gV2FycmlvcnMuTGlmZTtcbiAgICAgIHRoaXMucHJvdCA9IFdhcnJpb3JzLlByb3Q7XG4gICAgICB0aGlzLnJlc3VtZSA9IFdhcnJpb3JzLlJlc3VtZTtcbiAgICAgIHRoaXMuc3ByaXRlID0ge1xuICAgICAgICAgaW1hZ2U6IFdhcnJpb3JzLlNwcml0ZSxcbiAgICAgICAgIHN4OiAyNCxcbiAgICAgICAgIHN5OiAxMixcbiAgICAgICAgIHNXaWR0aDogNDgsXG4gICAgICAgICBzSGVpZ2h0OiA3MixcbiAgICAgICAgIGR4OiA0MDAsXG4gICAgICAgICBkeTogMjAwLFxuICAgICAgICAgZFdpZHRoOiA5NixcbiAgICAgICAgIGRIZWlnaHQ6IDE0NCxcbiAgICAgIH07XG4gICB9XG59XG4iLCIvKipcbiAqIERlY2xhcmluZyB1c2VmdWwgdmFyaWFibGVzXG4gKi9cblxuZXhwb3J0IGxldCBTVEFURSA9IHtcbiAgIGlkOiAxLFxuXG4gICBUaXRsZTogJ01lbnUnLFxuXG4gICBzZXRUaXRsZShuZXdUaXRsZSkge1xuICAgICAgdGhpcy5UaXRsZSA9IG5ld1RpdGxlO1xuICAgfSxcblxuICAgZ2V0VGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5UaXRsZTtcbiAgIH0sXG59O1xuIiwiaW1wb3J0IHtjdHgsIGNhbnZhc30gZnJvbSAnLi9jcmVhdGVDYW52YXMnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0geyp9IHhcbiAqIEBwYXJhbSB7Kn0geVxuICogQHBhcmFtIHsqfSB3aWR0aFxuICogQHBhcmFtIHsqfSBoZWlnaHRcbiAqIEBwYXJhbSB7Kn0gdGV4dFxuICogQHBhcmFtIHsqfSBiYWNrZ3JvdW5kQ29sb3JcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBCdXR0b25zIGFuZCByZXR1cm4gcG9zaXRpb25cbiAqL1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9ucyA9ICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0ZXh0LCBiYWNrZ3JvdW5kQ29sb3IpID0+IHtcbiAgIHJldHVybiB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeSxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb29yQnV0dG9ucyA9IChlLCBvYmplY3QpID0+IHtcbiAgIGNvbnN0IG1vdXNlID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICB9O1xuXG4gICBjb25zdCBib3VuZHMgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAvLyBnZXQgdGhlIG1vdXNlIGNvb3JkaW5hdGVzLCBzdWJ0cmFjdCB0aGUgY2FudmFzIHRvcCBsZWZ0IGFuZCBhbnkgc2Nyb2xsaW5nXG4gICBtb3VzZS54ID0gZS5wYWdlWCAtIGJvdW5kcy5sZWZ0IC0gc2Nyb2xsWDtcbiAgIG1vdXNlLnkgPSBlLnBhZ2VZIC0gYm91bmRzLnRvcCAtIHNjcm9sbFk7XG5cbiAgIHJldHVybiAoXG4gICAgICBtb3VzZS54ID4gb2JqZWN0LnggJiZcbiAgICAgIG1vdXNlLnggPCBvYmplY3QueCArIG9iamVjdC53aWR0aCAmJlxuICAgICAgbW91c2UueSA+IG9iamVjdC55ICYmXG4gICAgICBtb3VzZS55IDwgb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0XG4gICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGRyYXdCdXR0b25zID0gKC4uLmJ1dHRvbikgPT4ge1xuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8qKiBidXR0b24gdG8gY3JlYXRlICovXG4gICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uW2ldLmJhY2tncm91bmRDb2xvcjtcbiAgICAgIGN0eC5maWxsUmVjdChidXR0b25baV0ueCwgYnV0dG9uW2ldLnksIGJ1dHRvbltpXS53aWR0aCwgYnV0dG9uW2ldLmhlaWdodCk7XG5cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdncmV5JztcbiAgICAgIGN0eC5saW5lV2lkdGggPSAnNyc7XG4gICAgICBjdHguc3Ryb2tlUmVjdChcbiAgICAgICAgIGJ1dHRvbltpXS54LFxuICAgICAgICAgYnV0dG9uW2ldLnksXG4gICAgICAgICBidXR0b25baV0ud2lkdGgsXG4gICAgICAgICBidXR0b25baV0uaGVpZ2h0XG4gICAgICApO1xuXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgIGN0eC5mb250ID0gJzIzcHggQXJpYWwgQmxhY2snO1xuICAgICAgY3R4LmZpbGxUZXh0KFxuICAgICAgICAgYnV0dG9uW2ldLnRleHQsXG4gICAgICAgICBidXR0b25baV0ueCArIDEwLFxuICAgICAgICAgYnV0dG9uW2ldLnkgKyBidXR0b25baV0uaGVpZ2h0IC8gMiArIDVcbiAgICAgICk7XG4gICB9XG59O1xuIiwiLyoqXG4gKiBHZXQgQ2FudmFzXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lV2luZG93Jyk7XG5leHBvcnQgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDYW52YXMgPSAoKSA9PiB7XG4gICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn07XG4iLCJpbXBvcnQge2NyZWF0ZUNhbnZhc30gZnJvbSAnLi9jcmVhdGVDYW52YXMnO1xuXG5pbXBvcnQge1NUQVRFfSBmcm9tICcuLi9jb25zdC9jb25zdCc7XG5pbXBvcnQge2Nob3NlTWVudX0gZnJvbSAnLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlQ2xpY2tGb3JNZW51JztcbmltcG9ydCB7YWN0aXZhdGVIb3ZlcmluZ30gZnJvbSAnLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlSG92ZXJpbmcnO1xuaW1wb3J0IHtwbGF5U2NyZWVufSBmcm9tICcuLi9zY3JlZW5zL3BsYXlTY3JlZW4nO1xuaW1wb3J0IHtvcHRpb25TY3JlZW59IGZyb20gJy4uL3NjcmVlbnMvb3B0aW9uc1NjcmVlbic7XG5pbXBvcnQge2NyZWF0ZU1lbnUsIHBsYXlCdXR0b24sIG9wdGlvbkJ1dHRvbn0gZnJvbSAnLi4vc2NyZWVucy9tYWluTWVudSc7XG5pbXBvcnQge25hdmlnYXRpb25NZW51fSBmcm9tICcuLi9zY3JlZW5zL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51JztcblxuaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09ICdNZW51Jykge1xuICAgLyoqXG4gICAgKiBDcmVhdGUgdGhlIGNhbnZhc1xuICAgICovXG4gICBjcmVhdGVDYW52YXMoKTtcblxuICAgLyoqXG4gICAgKiBDcmVhdGUgdGhlIG1haW4gTWVudVxuICAgICovXG4gICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gJ01lbnUnKSBjcmVhdGVNZW51KCk7XG5cbiAgIC8qKlxuICAgICogQWN0aXZhdGUgSG92ZXJpbmdcbiAgICAqL1xuXG4gICBhY3RpdmF0ZUhvdmVyaW5nKFxuICAgICAgKCkgPT4ge1xuICAgICAgICAgbmF2aWdhdGlvbk1lbnUoJ01lbnUnLCBjcmVhdGVNZW51LCAnTWVudScpO1xuICAgICAgfSxcbiAgICAgIHBsYXlCdXR0b24sXG4gICAgICBvcHRpb25CdXR0b25cbiAgICk7XG5cbiAgIC8qKlxuICAgICogQWN0aXZhdGUgQ2xpY2tcbiAgICAqL1xuXG4gICBjaG9zZU1lbnUoKCkgPT4ge1xuICAgICAgbmF2aWdhdGlvbk1lbnUoJ01lbnUnLCBwbGF5U2NyZWVuLCAnSW5nYW1lJyk7XG4gICB9LCBwbGF5QnV0dG9uKTtcblxuICAgY2hvc2VNZW51KCgpID0+IHtcbiAgICAgIG5hdmlnYXRpb25NZW51KCdNZW51Jywgb3B0aW9uU2NyZWVuLCAnT3B0aW9ucycpO1xuICAgfSwgb3B0aW9uQnV0dG9uKTtcbn1cbiIsImltcG9ydCB7Y2FudmFzfSBmcm9tICcuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzJztcbmltcG9ydCB7Y29vckJ1dHRvbnN9IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudSc7XG5cbmV4cG9ydCBjb25zdCBjaG9zZU1lbnUgPSAoaHJlZiwgYnV0dG9uKSA9PiB7XG4gICAvKipcbiAgICAqIENsaWNrIEV2ZW50XG4gICAgKiBDaG9vc2UgbWVudSB0byBjbGlja1xuICAgICovXG4gICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgaWYgKGNvb3JCdXR0b25zKGUsIGJ1dHRvbikpIHtcbiAgICAgICAgICAgIGhyZWYoKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH0pO1xufTtcbiIsImltcG9ydCB7Y2FudmFzfSBmcm9tICcuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzJztcbmltcG9ydCB7Y29vckJ1dHRvbnN9IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudSc7XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZUhvdmVyaW5nID0gKHJlbG9hZEFjdHVhbE1lbnUsIC4uLmJ1dHRvbikgPT4ge1xuICAgLyoqXG4gICAgKiBIb3ZlciBldmVudFxuICAgICovXG4gICBpZiAoYnV0dG9uLmxlbmd0aCkge1xuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29vckJ1dHRvbnMoZSwgYnV0dG9uW2ldKSkge1xuICAgICAgICAgICAgICAgYnV0dG9uW2ldLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJQbGF5XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIGJ1dHRvbltpXS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuXG4gICAgICAgICByZWxvYWRBY3R1YWxNZW51XG4gICAgICAgICAgICA/IHJlbG9hZEFjdHVhbE1lbnUoKVxuICAgICAgICAgICAgOiAvLyBjb25zb2xlLmVycm9yKCdNaXNzaW5nIEZ1bmN0aW9uIFBhcmFtZXRlcicpXG4gICAgICAgICAgICBmYWxzZTtcbiAgICAgIH0pO1xuICAgfVxufTtcbiIsImltcG9ydCB7Y2FudmFzLCBjcmVhdGVDYW52YXN9IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuaW1wb3J0IHtTVEFURX0gZnJvbSAnLi4vY29uc3QvY29uc3QnO1xuaW1wb3J0IHtcbiAgIGNyZWF0ZUJ1dHRvbnMsXG4gICBkcmF3QnV0dG9ucyxcbn0gZnJvbSAnLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51JztcbmltcG9ydCB7YWN0aXZhdGVIb3ZlcmluZ30gZnJvbSAnLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlSG92ZXJpbmcnO1xuaW1wb3J0IHtuYXZpZ2F0aW9uTWVudX0gZnJvbSAnLi9uYXZpZ2F0aW9uTWVudS9uYXZpZ2F0aW9uTWVudSc7XG5pbXBvcnQge2Nob3NlTWVudX0gZnJvbSAnLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlQ2xpY2tGb3JNZW51JztcbmltcG9ydCB7cGxheVNjcmVlbn0gZnJvbSAnLi9wbGF5U2NyZWVuJztcbmltcG9ydCB7d2FycmlvclNjcmVlbn0gZnJvbSAnLi9jbGFzc2VzU2NyZWVuL3dhcnJpb3JTY3JlZW4nO1xuaW1wb3J0IHttYWdlU2NyZWVufSBmcm9tICcuL2NsYXNzZXNTY3JlZW4vbWFnZVNjcmVlbic7XG5cbi8qKlxuICogV2FycmlvclxuICovXG5cbmNvbnN0IHdhcnJpb3IgPSBjcmVhdGVCdXR0b25zKFxuICAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gMTAwLFxuICAgMjAwLFxuICAgNTAsXG4gICAnV2FycmlvcicsXG4gICAnd2hpdGUnXG4pO1xuXG4vKipcbiAqIE1hZ2VcbiAqL1xuXG5jb25zdCBtYWdlID0gY3JlYXRlQnV0dG9ucyhcbiAgIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXG4gICBjYW52YXMuaGVpZ2h0IC8gMiAtIDI1LFxuICAgMjAwLFxuICAgNTAsXG4gICAnTWFnZScsXG4gICAnd2hpdGUnXG4pO1xuXG4vKipcbiAqIE1hZ2VcbiAqL1xuXG5jb25zdCBjYW5jZWwgPSBjcmVhdGVCdXR0b25zKFxuICAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgIGNhbnZhcy5oZWlnaHQgLyAyICsgNTAsXG4gICAyMDAsXG4gICA1MCxcbiAgICdDYW5jZWwnLFxuICAgJ3doaXRlJ1xuKTtcblxuZXhwb3J0IGNvbnN0IGNob3NlQ2FyYWN0ZXJTY3JlZW4gPSAoKSA9PiB7XG4gICAvKipcbiAgICAqIHJlbW92ZSBvbGQgY29tcG9uZW50c1xuICAgICovXG4gICBjcmVhdGVDYW52YXMoKTtcblxuICAgLyoqIFNldCBTdGF0ZSAqL1xuICAgU1RBVEUuc2V0VGl0bGUoJ2Nob3NlQ2FyYWN0ZXInKTtcblxuICAgZHJhd0J1dHRvbnMod2FycmlvciwgbWFnZSwgY2FuY2VsKTtcbn07XG5cbi8qKlxuICogQWN0aXZhdGUgSG92ZXJpbmdcbiAqL1xuXG5hY3RpdmF0ZUhvdmVyaW5nKFxuICAgKCkgPT4ge1xuICAgICAgbmF2aWdhdGlvbk1lbnUoJ2Nob3NlQ2FyYWN0ZXInLCBjaG9zZUNhcmFjdGVyU2NyZWVuLCAnY2hvc2VDYXJhY3RlcicpO1xuICAgfSxcbiAgIHdhcnJpb3IsXG4gICBtYWdlLFxuICAgY2FuY2VsXG4pO1xuXG4vKipcbiAqIEFjdGl2YXRlIENsaWNrXG4gKi9cblxuY2hvc2VNZW51KCgpID0+IHtcbiAgIG5hdmlnYXRpb25NZW51KCdjaG9zZUNhcmFjdGVyJywgd2FycmlvclNjcmVlbiwgJ3dhcnJpb1NjcmVlbicpO1xufSwgd2Fycmlvcik7XG5cbmNob3NlTWVudSgoKSA9PiB7XG4gICBuYXZpZ2F0aW9uTWVudSgnY2hvc2VDYXJhY3RlcicsIG1hZ2VTY3JlZW4sICdtYWdlU2NyZWVuJyk7XG59LCBtYWdlKTtcblxuY2hvc2VNZW51KCgpID0+IHtcbiAgIG5hdmlnYXRpb25NZW51KCdjaG9zZUNhcmFjdGVyJywgcGxheVNjcmVlbiwgJ0luZ2FtZScpO1xufSwgY2FuY2VsKTtcbiIsImltcG9ydCB7Y3JlYXRlQ2FudmFzfSBmcm9tICcuLi8uLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzJztcbmltcG9ydCB7U1RBVEV9IGZyb20gJy4uLy4uL2NvbnN0L2NvbnN0JztcbmltcG9ydCB7TWFnZX0gZnJvbSAnLi4vLi4vY2xhc3Nlcy9tYWdlL21hZ2UnO1xuXG4vKipcbiAqIGNsYXNzIGluc3RhbmNlXG4gKi9cblxuY29uc3QgbWFnZSA9IG5ldyBNYWdlKCk7XG5cbi8qKlxuICogd2FycmlvclxuICovXG5cbmV4cG9ydCBjb25zdCBtYWdlU2NyZWVuID0gKCkgPT4ge1xuICAgLyoqXG4gICAgKiByZW1vdmUgb2xkIGNvbXBvbmVudHNcbiAgICAqL1xuICAgY3JlYXRlQ2FudmFzKCk7XG5cbiAgIC8qKiBzZXQgc3RhdGUgKi9cbiAgIFNUQVRFLnNldFRpdGxlKCdtYWdlU2NyZWVuJyk7XG5cbiAgIC8qKiBkcmF3IHdhcnJpb3IgY29udGVudCAqL1xuICAgbWFnZS5nZXRDb250ZW50O1xuICAgbWFnZS5nZXRTcHJpdGU7XG59O1xuIiwiaW1wb3J0IHtjcmVhdGVDYW52YXN9IGZyb20gJy4uLy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuaW1wb3J0IHtTVEFURX0gZnJvbSAnLi4vLi4vY29uc3QvY29uc3QnO1xuaW1wb3J0IHtXYXJyaW9yfSBmcm9tICcuLi8uLi9jbGFzc2VzL3dhcnJpb3Ivd2Fycmlvcic7XG5cbi8qKlxuICogY2xhc3MgaW5zdGFuY2VcbiAqL1xuXG5jb25zdCB3YXJyaW9yID0gbmV3IFdhcnJpb3IoKTtcblxuLyoqXG4gKiB3YXJyaW9yXG4gKi9cblxuZXhwb3J0IGNvbnN0IHdhcnJpb3JTY3JlZW4gPSAoKSA9PiB7XG4gICAvKipcbiAgICAqIHJlbW92ZSBvbGQgY29tcG9uZW50c1xuICAgICovXG4gICBjcmVhdGVDYW52YXMoKTtcblxuICAgLyoqIHNldCBzdGF0ZSAqL1xuICAgU1RBVEUuc2V0VGl0bGUoJ3dhcnJpb3JTY3JlZW4nKTtcblxuICAgLyoqIGRyYXcgd2FycmlvciBjb250ZW50ICovXG4gICB3YXJyaW9yLmdldENvbnRlbnQ7XG4gICB3YXJyaW9yLmdldFNwcml0ZTtcbn07XG4iLCJpbXBvcnQge2NhbnZhcywgY3R4fSBmcm9tICcuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzJztcbmltcG9ydCB7XG4gICBjcmVhdGVCdXR0b25zLFxuICAgZHJhd0J1dHRvbnMsXG59IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudSc7XG5cbmltcG9ydCB2ZXJzaW9uIGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbic7XG5cbi8qKlxuICogUGxheSBCdXR0b25cbiAqL1xuZXhwb3J0IGNvbnN0IHBsYXlCdXR0b24gPSBjcmVhdGVCdXR0b25zKFxuICAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gMTAwLFxuICAgMjAwLFxuICAgNTAsXG4gICAnUGxheSB0aGUgZ2FtZScsXG4gICAnd2hpdGUnXG4pO1xuXG4vKipcbiAqIE9wdGlvbnMgQnV0dG9uXG4gKi9cbmV4cG9ydCBjb25zdCBvcHRpb25CdXR0b24gPSBjcmVhdGVCdXR0b25zKFxuICAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjUsXG4gICAyMDAsXG4gICA1MCxcbiAgICdPcHRpb25zJyxcbiAgICd3aGl0ZSdcbik7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICAgLyoqXG4gICAgKiBSZXRyaWV2ZSBHYW1lIFZlcnNpb25cbiAgICAqL1xuICAgY29uc3QgZ2FtZVZlcnNpb24gPSAnViAnICsgdmVyc2lvbi52ZXJzaW9uO1xuXG4gICAvLyBEcmF3IFZlcnNpb24gaW4gY2FudmFzIC8vXG4gICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICBjdHguZm9udCA9ICcxNXB4IEFyaWFsIGJsYWNrJztcbiAgIGN0eC5maWxsVGV4dChnYW1lVmVyc2lvbiwgNTAsIDUwKTtcblxuICAgLyoqIERyYXcgYnV0dG9uICovXG4gICBkcmF3QnV0dG9ucyhwbGF5QnV0dG9uLCBvcHRpb25CdXR0b24pO1xufTtcbiIsImltcG9ydCB7U1RBVEV9IGZyb20gJy4uLy4uL2NvbnN0L2NvbnN0JztcblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb25NZW51ID0gKGFjdHVhbFN0YXRlLCBzY3JlZW5Mb2FkZWQsIHN0YXRlTG9hZGVkKSA9PiB7XG4gICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gYWN0dWFsU3RhdGUpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoc3VjY2VzcywgZXJyb3IpID0+IHtcbiAgICAgICAgIGlmIChTVEFURS5nZXRUaXRsZSgpID09PSBhY3R1YWxTdGF0ZSkge1xuICAgICAgICAgICAgc3VjY2VzcygoKSA9PiBzY3JlZW5Mb2FkZWQoKSk7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ0Vycm9yLCBXcm9uZyBTVEFURSBUaXRsZScpO1xuICAgICAgICAgfVxuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gYWN0dWFsU3RhdGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgU1RBVEUuc2V0VGl0bGUoc3RhdGVMb2FkZWQpO1xuICAgICAgICAgICAgICAgc2NyZWVuTG9hZGVkKCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDUwO1xuICAgICAgICAgfVxuICAgICAgfSk7XG4gICB9XG59O1xuIiwiaW1wb3J0IHtjYW52YXMsIGNyZWF0ZUNhbnZhc30gZnJvbSAnLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhcyc7XG5pbXBvcnQge1NUQVRFfSBmcm9tICcuLi9jb25zdC9jb25zdCc7XG5pbXBvcnQge1xuICAgY3JlYXRlQnV0dG9ucyxcbiAgIGRyYXdCdXR0b25zLFxufSBmcm9tICcuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnUnO1xuaW1wb3J0IHthY3RpdmF0ZUhvdmVyaW5nfSBmcm9tICcuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZyc7XG5pbXBvcnQge25hdmlnYXRpb25NZW51fSBmcm9tICcuL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51JztcbmltcG9ydCB7Y2hvc2VNZW51fSBmcm9tICcuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnUnO1xuaW1wb3J0IHtjcmVhdGVNZW51fSBmcm9tICcuL21haW5NZW51JztcblxuLyoqXG4gKiBSZXNvbHV0aW9uIEJ1dHRvblxuICovXG5cbmNvbnN0IHJlc29sdXRpb24gPSBjcmVhdGVCdXR0b25zKFxuICAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gMTAwLFxuICAgMjAwLFxuICAgNTAsXG4gICAnUmVzb2x1dGlvbicsXG4gICAnd2hpdGUnXG4pO1xuXG4vKipcbiAqIFNvdW5kIEJ1dHRvblxuICovXG5cbmNvbnN0IGNhbmNlbCA9IGNyZWF0ZUJ1dHRvbnMoXG4gICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxuICAgY2FudmFzLmhlaWdodCAvIDIgLSAyNSxcbiAgIDIwMCxcbiAgIDUwLFxuICAgJ0NhbmNlbCcsXG4gICAnd2hpdGUnXG4pO1xuXG5leHBvcnQgY29uc3Qgb3B0aW9uU2NyZWVuID0gKCkgPT4ge1xuICAgLyoqXG4gICAgKiByZW1vdmUgb2xkIGNvbXBvbmVudHNcbiAgICAqL1xuICAgY3JlYXRlQ2FudmFzKCk7XG5cbiAgIC8qKiBTZXQgU3RhdGUgKi9cbiAgIFNUQVRFLnNldFRpdGxlKCdPcHRpb25zJyk7XG5cbiAgIC8qKiBEcmF3IEJ1dHRvbnMgKi9cbiAgIGRyYXdCdXR0b25zKHJlc29sdXRpb24sIGNhbmNlbCk7XG59O1xuXG4vKipcbiAqIEFjdGl2YXRlIEhvdmVyaW5nXG4gKi9cblxuYWN0aXZhdGVIb3ZlcmluZyhcbiAgICgpID0+IHtcbiAgICAgIG5hdmlnYXRpb25NZW51KCdPcHRpb25zJywgb3B0aW9uU2NyZWVuLCAnT3B0aW9ucycpO1xuICAgfSxcbiAgIHJlc29sdXRpb24sXG4gICBjYW5jZWxcbik7XG5cbi8qKlxuICogQWN0aXZhdGUgQ2xpY2tcbiAqL1xuXG5jaG9zZU1lbnUoKCkgPT4ge1xuICAgbmF2aWdhdGlvbk1lbnUoJ09wdGlvbnMnLCBjcmVhdGVNZW51LCAnTWVudScpO1xufSwgY2FuY2VsKTtcblxuY2hvc2VNZW51KCgpID0+IHtcbiAgIG5hdmlnYXRpb25NZW51KCdPcHRpb25zJywgb3B0aW9uU2NyZWVuLCAnT3B0aW9ucycpO1xufSwgcmVzb2x1dGlvbik7XG4iLCJpbXBvcnQge2NhbnZhcywgY3JlYXRlQ2FudmFzfSBmcm9tICcuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzJztcbmltcG9ydCB7U1RBVEV9IGZyb20gJy4uL2NvbnN0L2NvbnN0JztcbmltcG9ydCB7XG4gICBjcmVhdGVCdXR0b25zLFxuICAgZHJhd0J1dHRvbnMsXG59IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudSc7XG5pbXBvcnQge2FjdGl2YXRlSG92ZXJpbmd9IGZyb20gJy4uL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUhvdmVyaW5nJztcbmltcG9ydCB7Y2hvc2VNZW51fSBmcm9tICcuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVDbGlja0Zvck1lbnUnO1xuaW1wb3J0IHtjcmVhdGVNZW51fSBmcm9tICcuL21haW5NZW51JztcbmltcG9ydCB7bmF2aWdhdGlvbk1lbnV9IGZyb20gJy4vbmF2aWdhdGlvbk1lbnUvbmF2aWdhdGlvbk1lbnUnO1xuaW1wb3J0IHtjaG9zZUNhcmFjdGVyU2NyZWVufSBmcm9tICcuL2Nob3NlQ2FyYWN0ZXJTY3JlZW4nO1xuXG4vKipcbiAqIGNyZWF0ZUNhcmFjdGVyIEJ1dHRvblxuICovXG5cbmNvbnN0IGNyZWF0ZUNhcmFjdGVyID0gY3JlYXRlQnV0dG9ucyhcbiAgIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXG4gICBjYW52YXMuaGVpZ2h0IC8gMiAtIDEwMCxcbiAgIDIwMCxcbiAgIDUwLFxuICAgJ0NhcmFjdGVyJyxcbiAgICd3aGl0ZSdcbik7XG5cbmNvbnN0IGNhbmNlbCA9IGNyZWF0ZUJ1dHRvbnMoXG4gICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxuICAgY2FudmFzLmhlaWdodCAvIDIgLSAyNSxcbiAgIDIwMCxcbiAgIDUwLFxuICAgJ0NhbmNlbCcsXG4gICAnd2hpdGUnXG4pO1xuXG5leHBvcnQgY29uc3QgcGxheVNjcmVlbiA9ICgpID0+IHtcbiAgIC8qKlxuICAgICogcmVtb3ZlIG9sZCBjb21wb25lbnRzXG4gICAgKi9cbiAgIGNyZWF0ZUNhbnZhcygpO1xuXG4gICAvKiogU2V0IFN0YXRlICovXG4gICBTVEFURS5zZXRUaXRsZSgnSW5nYW1lJyk7XG5cbiAgIC8qKiBEcmF3IEJ1dHRvbiAqL1xuICAgZHJhd0J1dHRvbnMoY3JlYXRlQ2FyYWN0ZXIsIGNhbmNlbCk7XG59O1xuXG4vKipcbiAqIEFjdGl2YXRlIEhvdmVyaW5nXG4gKi9cblxuYWN0aXZhdGVIb3ZlcmluZyhcbiAgICgpID0+IHtcbiAgICAgIG5hdmlnYXRpb25NZW51KCdJbmdhbWUnLCBwbGF5U2NyZWVuLCAnSW5nYW1lJyk7XG4gICB9LFxuICAgY3JlYXRlQ2FyYWN0ZXIsXG4gICBjYW5jZWxcbik7XG5cbi8qKlxuICogQWN0aXZhdGUgQ2xpY2tcbiAqL1xuXG5jaG9zZU1lbnUoKCkgPT4ge1xuICAgbmF2aWdhdGlvbk1lbnUoJ0luZ2FtZScsIGNob3NlQ2FyYWN0ZXJTY3JlZW4sICdjaG9zZUNhcmFjdGVyJyk7XG59LCBjcmVhdGVDYXJhY3Rlcik7XG5cbmNob3NlTWVudSgoKSA9PiB7XG4gICBuYXZpZ2F0aW9uTWVudSgnSW5nYW1lJywgY3JlYXRlTWVudSwgJ01lbnUnKTtcbn0sIGNhbmNlbCk7XG4iLCJpbXBvcnQge2NyZWF0ZUNhbnZhc30gZnJvbSAnLi9jcmVhdGVDYW52YXMnO1xuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gJy4uL21vdmluZ1Nwcml0ZS9tb3ZpbmdTcHJpdGUnO1xuaW1wb3J0IHtTcGFjZXNoaXB9IGZyb20gJy4uL21vdmluZ1Nwcml0ZS9zcGFjZXNoaXBUZXN0JztcblxuY3JlYXRlQ2FudmFzKCk7XG5cbi8qKlxuICogYmFzaWMgYW5pbWF0aW9uc1xuICovXG4vKlxuY29uc3Qgc3ByaXRlID0gbmV3IFNwcml0ZUFuaW1hdGlvbigpO1xuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICBzcHJpdGUuZHJhd1Nwcml0ZSgpO1xufSwgMTAwKTtcbiovXG5cbmNvbnN0IHNoaXAgPSBuZXcgU3BhY2VzaGlwKCk7XG5cbnNoaXAuZHJhd1NoaXAoKTtcbiIsIi8qKlxuICogR2V0IENhbnZhc1xuICovXG5cbmV4cG9ydCBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdFdpbmRvdycpO1xuZXhwb3J0IGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2FudmFzID0gKCkgPT4ge1xuICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG59O1xuIiwiaW1wb3J0IHtjdHh9IGZyb20gJy4uL2NhbnZhcy9jcmVhdGVDYW52YXMnO1xuXG4vKipcbiAqIENsYXNzIHRvIG1vdmUgc3ByaXRlU2hlZXRcbiAqL1xuXG4vKipcbiAqIEBjbGFzcyBzcHJpdGVBbmltYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNwcml0ZUFuaW1hdGlvbiB7XG4gICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvciBzcHJpdGVBbmltYXRpb25cbiAgICAqL1xuICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZSA9IHtcbiAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICB3aWR0aDogODYwLFxuICAgICAgICAgICAgaGVpZ2h0OiAyNjAsXG4gICAgICAgICAgICByb3dzOiAyLFxuICAgICAgICAgICAgY29sczogOCxcbiAgICAgICAgIH0sXG4gICAgICAgICBkaXJlY3Rpb246IHtcbiAgICAgICAgICAgIHJpZ2h0Um93OiAwLFxuICAgICAgICAgICAgbGVmdFJvdzogMSxcbiAgICAgICAgIH0sXG4gICAgICAgICBzcHJpdGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHRGcmFtZTogMCxcbiAgICAgICAgICAgIGZyYW1lTnVtYmVyOiA4LFxuICAgICAgICAgfSxcbiAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgIH0sXG4gICAgICAgICBjYW52YXNDb29yOiB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgIH0sXG4gICAgICAgICBtb3ZlOiB7XG4gICAgICAgICAgICByaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIGxlZnQ6IGZhbHNlLFxuXG4gICAgICAgICAgICBzcGVlZDogOCxcbiAgICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5zcHJpdGUud2lkdGggPVxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuaW1hZ2Uud2lkdGggLyB0aGlzLmFuaW1hdGlvblNwcml0ZS5pbWFnZS5jb2xzO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5zcHJpdGUuaGVpZ2h0ID1cbiAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLmltYWdlLmhlaWdodCAvIHRoaXMuYW5pbWF0aW9uU3ByaXRlLmltYWdlLnJvd3M7XG5cbiAgICAgIHRoaXMuc3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICB0aGlzLnNwcml0ZS5zcmMgPVxuICAgICAgICAgJ3NyYy9nYW1ldGVzdC9tb3ZpbmdTcHJpdGUvYXNzZXRzL3Nwcml0ZS90ZXN0U3ByaXRlL3Rlc3RTcHJpdGUucG5nJztcbiAgIH1cblxuICAgLyoqXG4gICAgKiBAbWV0aG9kIG1vdmVMZWZ0XG4gICAgKi9cbiAgIG1vdmVMZWZ0KCkge1xuICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUubW92ZS5sZWZ0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLm1vdmUucmlnaHQgPSBmYWxzZTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBAbWV0aG9kIG1vdmVSaWdodFxuICAgICovXG4gICBtb3ZlUmlnaHQoKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5tb3ZlLmxlZnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLm1vdmUucmlnaHQgPSB0cnVlO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEBtZXRob2QgZHJhd1Nwcml0ZVxuICAgICovXG4gICB1cGRhdGVGcmFtZSgpIHtcbiAgICAgIC8vIFVwZGF0aW5nIHRoZSBmcmFtZSBpbmRleFxuICAgICAgY3R4LmNsZWFyUmVjdChcbiAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLnBvc2l0aW9uLngsXG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5wb3NpdGlvbi55LFxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuc3ByaXRlLndpZHRoLFxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuc3ByaXRlLmhlaWdodFxuICAgICAgKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuc3ByaXRlLmRlZmF1bHRGcmFtZSA9XG4gICAgICAgICArK3RoaXMuYW5pbWF0aW9uU3ByaXRlLnNwcml0ZS5kZWZhdWx0RnJhbWUgJVxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuc3ByaXRlLmZyYW1lTnVtYmVyO1xuXG4gICAgICAvLyBDYWxjdWxhdGluZyB0aGUgeCBjb29yZGluYXRlIGZvciBzcHJpdGVzaGVldFxuICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuY2FudmFzQ29vci54ID1cbiAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLnNwcml0ZS5kZWZhdWx0RnJhbWUgKlxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuc3ByaXRlLndpZHRoO1xuXG4gICAgICBpZiAoXG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5tb3ZlLmxlZnQgJiZcbiAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLnBvc2l0aW9uLnggPiAwXG4gICAgICApIHtcbiAgICAgICAgIC8vIGNhbGN1bGF0ZSBzcmNZXG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5jYW52YXNDb29yLnkgPVxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuZGlyZWN0aW9uLmxlZnRSb3cgKlxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuc3ByaXRlLmhlaWdodDtcbiAgICAgICAgIC8vIGRlY3JlYXNpbmcgdGhlIHggY29vcmRpbmF0ZVxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUucG9zaXRpb24ueCAtPSB0aGlzLmFuaW1hdGlvblNwcml0ZS5tb3ZlLnNwZWVkO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiB0aGUgcmlnaHQgaXMgdHJ1ZSBhbmQgY2hhcmFjdGVyIGhhcyBub3QgcmVhY2hlZCByaWdodCBlZGdlXG4gICAgICBpZiAoXG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5tb3ZlLnJpZ2h0ICYmXG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5wb3NpdGlvbi54ID4gMFxuICAgICAgKSB7XG4gICAgICAgICAvLyBjYWxjdWxhdGUgc3JjWVxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuY2FudmFzQ29vci55ID1cbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLmRpcmVjdGlvbi5yaWdodFJvdyAqXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5zcHJpdGUuaGVpZ2h0O1xuICAgICAgICAgLy8gZGVjcmVhc2luZyB0aGUgeCBjb29yZGluYXRlXG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5wb3NpdGlvbi54ICs9IHRoaXMuYW5pbWF0aW9uU3ByaXRlLm1vdmUuc3BlZWQ7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgaWYgKGUua2V5ID09PSAnZCcpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gICAgICAgICB9XG4gICAgICAgICBpZiAoZS5rZXkgPT09ICdxJykge1xuICAgICAgICAgICAgdGhpcy5tb3ZlTGVmdCgpO1xuICAgICAgICAgfVxuICAgICAgfSk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQG1ldGhvZCBkcmF3U3ByaXRlXG4gICAgKi9cbiAgIGRyYXdTcHJpdGUoKSB7XG4gICAgICAvLyBVcGRhdGluZyB0aGUgZnJhbWVcbiAgICAgIHRoaXMudXBkYXRlRnJhbWUoKTtcbiAgICAgIC8vIERyYXdpbmcgdGhlIGltYWdlXG4gICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgdGhpcy5zcHJpdGUsXG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5jYW52YXNDb29yLngsXG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5jYW52YXNDb29yLnksXG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5zcHJpdGUud2lkdGgsXG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5zcHJpdGUuaGVpZ2h0LFxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUucG9zaXRpb24ueCxcbiAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLnBvc2l0aW9uLnksXG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5zcHJpdGUud2lkdGgsXG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5zcHJpdGUuaGVpZ2h0XG4gICAgICApO1xuICAgfVxufVxuIiwiaW1wb3J0IHtjdHh9IGZyb20gJy4uL2NhbnZhcy9jcmVhdGVDYW52YXMnO1xuXG4vKipcbiAqIHNwYWNlc2hpcCBjbGFzc1xuICovXG5cbi8qKlxuICogQGNsYXNzIFNwYWNlc2hpcFxuICovXG5leHBvcnQgY2xhc3MgU3BhY2VzaGlwIHtcbiAgIC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5zcGFjZXNoaXAgPSB7XG4gICAgICAgICBzcHJpdGU6ICdzcmMvZ2FtZXRlc3QvbW92aW5nU3ByaXRlL2Fzc2V0cy9zcHJpdGUvc3BhY2VzaGlwL3NoaXAucG5nJyxcbiAgICAgIH07XG4gICB9XG5cbiAgIC8qKlxuICAgICogQG1ldGhvZCBkcmF3U2hpcFxuICAgICovXG4gICBkcmF3U2hpcCgpIHtcbiAgICAgIGxldCBzaGlwID0gbmV3IEltYWdlKCk7XG4gICAgICBzaGlwLnNyYyA9IHRoaXMuc3BhY2VzaGlwLnNwcml0ZTtcblxuICAgICAgc2hpcC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICBjdHguZHJhd0ltYWdlKHNoaXAsIDQsIDQsIDcxMiwgNzA0LCAzMDAsIDIwMCwgMjAwLCAyMDApO1xuICAgICAgfTtcbiAgIH1cbn1cbiIsIi8qKlxuICogaW1wb3J0IG1haW4gY2FudmFzXG4gKi9cbmltcG9ydCAnLi9nYW1lc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVNZW51JztcblxuLyoqXG4gKiBpbXBvcnQgdGVzdCBjYW52YXNcbiAqL1xuaW1wb3J0ICcuL2dhbWV0ZXN0L2NhbnZhcy9jYW52YXNEcmF3JztcbiJdLCJzb3VyY2VSb290IjoiIn0=