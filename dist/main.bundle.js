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

/***/ "./src/gamesrc/classes/human/human.js":
/*!********************************************!*\
  !*** ./src/gamesrc/classes/human/human.js ***!
  \********************************************/
/*! exports provided: Human */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Human", function() { return Human; });
/* harmony import */ var _human_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./human.json */ "./src/gamesrc/classes/human/human.json");
var _human_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./human.json */ "./src/gamesrc/classes/human/human.json", 1);
/* harmony import */ var _templates_caracters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/caracters */ "./src/gamesrc/classes/templates/caracters.js");



/**
 * @class Warrior
 */
class Human extends _templates_caracters__WEBPACK_IMPORTED_MODULE_1__["Caracters"] {
   /**
    * @constructor
    */
   constructor() {
      super();
      this.name = _human_json__WEBPACK_IMPORTED_MODULE_0__.Name;
      this.life = _human_json__WEBPACK_IMPORTED_MODULE_0__.Life;
      this.prot = _human_json__WEBPACK_IMPORTED_MODULE_0__.Prot;
      this.resume = _human_json__WEBPACK_IMPORTED_MODULE_0__.Resume;
      this.sprite = {
         image: _human_json__WEBPACK_IMPORTED_MODULE_0__.Sprite,
         sx: 70,
         sy: 0,
         sWidth: 600,
         sHeight: 670,
         dx: 400,
         dy: 200,
         dWidth: 120,
         dHeight: 144,
      };
   }
}


/***/ }),

/***/ "./src/gamesrc/classes/human/human.json":
/*!**********************************************!*\
  !*** ./src/gamesrc/classes/human/human.json ***!
  \**********************************************/
/*! exports provided: Name, Life, Prot, Resume, Sprite, default */
/***/ (function(module) {

module.exports = {"Name":"Human","Life":120,"Prot":20,"Resume":"Lorem Ipsum","Sprite":"src/assets/sprite/human/human.png"};

/***/ }),

/***/ "./src/gamesrc/classes/human2/human2.js":
/*!**********************************************!*\
  !*** ./src/gamesrc/classes/human2/human2.js ***!
  \**********************************************/
/*! exports provided: Human2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Human2", function() { return Human2; });
/* harmony import */ var _human2_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./human2.json */ "./src/gamesrc/classes/human2/human2.json");
var _human2_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./human2.json */ "./src/gamesrc/classes/human2/human2.json", 1);
/* harmony import */ var _templates_caracters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/caracters */ "./src/gamesrc/classes/templates/caracters.js");



/**
 * @class Warrior
 */
class Human2 extends _templates_caracters__WEBPACK_IMPORTED_MODULE_1__["Caracters"] {
   /**
    * @constructor
    */
   constructor() {
      super();

      this.name = _human2_json__WEBPACK_IMPORTED_MODULE_0__.Name;
      this.life = _human2_json__WEBPACK_IMPORTED_MODULE_0__.Life;
      this.prot = _human2_json__WEBPACK_IMPORTED_MODULE_0__.Prot;
      this.resume = _human2_json__WEBPACK_IMPORTED_MODULE_0__.Resume;
      this.sprite = {
         image: _human2_json__WEBPACK_IMPORTED_MODULE_0__.Sprite,
         sx: 70,
         sy: 10,
         sWidth: 550,
         sHeight: 660,
         dx: 400,
         dy: 200,
         dWidth: 120,
         dHeight: 144,
      };
   }
}


/***/ }),

/***/ "./src/gamesrc/classes/human2/human2.json":
/*!************************************************!*\
  !*** ./src/gamesrc/classes/human2/human2.json ***!
  \************************************************/
/*! exports provided: Name, Life, Prot, Resume, Sprite, default */
/***/ (function(module) {

module.exports = {"Name":"Human2","Life":80,"Prot":5,"Resume":"Lorem Ipsum","Sprite":"src/assets/sprite/human2/human2.png"};

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
   get getDrawStaticSprite() {
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

   /**
    * @return {object} this.sprite
    */
   get portraitSprite() {
      return this.sprite;
   }
}


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
/*! exports provided: createButtons, createPortraits, coorButtons, drawButtons, drawPortraits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtons", function() { return createButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortraits", function() { return createPortraits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coorButtons", function() { return coorButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawButtons", function() { return drawButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPortraits", function() { return drawPortraits; });
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

const createPortraits = (x, y, width, height) => {
   return {
      x: x,
      y: y,
      width: width,
      height: height,
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

const drawPortraits = (image = {}, x, y, portrait) => {
   /** portrait frame to create */

   _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(portrait.x, portrait.y, portrait.width, portrait.height);

   _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = 'grey';
   _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = '7';
   _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(portrait.x, portrait.y, portrait.width, portrait.height);

   /**
    * image of the portrait
    */
   let imagesrc = new Image();
   Object.keys(image).forEach((key) => {
      if (key === 'image') imagesrc.src = image[key];
   });
   imagesrc.onload = () => {
      _createCanvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].drawImage(
         imagesrc,
         image.sx,
         image.sy,
         image.sWidth,
         image.sHeight,
         x,
         y,
         image.dWidth,
         image.dHeight
      );
   };
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
/* harmony import */ var _classesScreen_humanScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classesScreen/humanScreen */ "./src/gamesrc/screens/classesScreen/humanScreen.js");
/* harmony import */ var _classesScreen_human2Screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classesScreen/human2Screen */ "./src/gamesrc/screens/classesScreen/human2Screen.js");
/* harmony import */ var _classes_human_human__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../classes/human/human */ "./src/gamesrc/classes/human/human.js");
/* harmony import */ var _classes_human2_human2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../classes/human2/human2 */ "./src/gamesrc/classes/human2/human2.js");












const human = new _classes_human_human__WEBPACK_IMPORTED_MODULE_9__["Human"]();

/**
 * human
 */

const humanButton = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createPortraits"])(
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 300,
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 200,
   200,
   200
);

const human2 = new _classes_human2_human2__WEBPACK_IMPORTED_MODULE_10__["Human2"]();

/**
 * human2
 */

const human2Button = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createPortraits"])(
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 + 100,
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 - 200,
   200,
   200
);

const cancel = Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["createButtons"])(
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - 100,
   _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2 + 50,
   200,
   50,
   'Cancel'
);

const choseCaracterScreen = () => {
   /**
    * remove old components
    */
   Object(_createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();

   /** Set State */
   _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].setTitle('choseCaracter');
   /** human */
   Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["drawPortraits"])(human.portraitSprite, 150, 130, humanButton);
   /** human2 */
   Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["drawPortraits"])(human2.portraitSprite, 550, 130, human2Button);

   Object(_createFunctions_createButtonsForMenu__WEBPACK_IMPORTED_MODULE_2__["drawButtons"])(cancel);
};

/**
 * Activate Hovering
 */

Object(_designFunctions_activateHovering__WEBPACK_IMPORTED_MODULE_3__["activateHovering"])(() => {
   Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])('choseCaracter', choseCaracterScreen, 'choseCaracter');
}, cancel);

/**
 * Activate Click
 */

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(() => {
   Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])('choseCaracter', _classesScreen_humanScreen__WEBPACK_IMPORTED_MODULE_7__["humanScreen"], 'humanScreen');
}, humanButton);

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(() => {
   Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])('choseCaracter', _classesScreen_human2Screen__WEBPACK_IMPORTED_MODULE_8__["human2Screen"], 'human2Screen');
}, human2Button);

Object(_designFunctions_activateClickForMenu__WEBPACK_IMPORTED_MODULE_5__["choseMenu"])(() => {
   Object(_navigationMenu_navigationMenu__WEBPACK_IMPORTED_MODULE_4__["navigationMenu"])('choseCaracter', _playScreen__WEBPACK_IMPORTED_MODULE_6__["playScreen"], 'Ingame');
}, cancel);


/***/ }),

/***/ "./src/gamesrc/screens/classesScreen/human2Screen.js":
/*!***********************************************************!*\
  !*** ./src/gamesrc/screens/classesScreen/human2Screen.js ***!
  \***********************************************************/
/*! exports provided: human2Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "human2Screen", function() { return human2Screen; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createFunctions/createCanvas */ "./src/gamesrc/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/const */ "./src/gamesrc/const/const.js");
/* harmony import */ var _classes_human2_human2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/human2/human2 */ "./src/gamesrc/classes/human2/human2.js");




/**
 * class instance
 */

const human2 = new _classes_human2_human2__WEBPACK_IMPORTED_MODULE_2__["Human2"]();

/**
 * warrior
 */

const human2Screen = () => {
   /**
    * remove old components
    */
   Object(_createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();

   /** set state */
   _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].setTitle('human2Screen');

   /** draw warrior content */
   human2.getContent;
   human2.getDrawStaticSprite;
};


/***/ }),

/***/ "./src/gamesrc/screens/classesScreen/humanScreen.js":
/*!**********************************************************!*\
  !*** ./src/gamesrc/screens/classesScreen/humanScreen.js ***!
  \**********************************************************/
/*! exports provided: humanScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanScreen", function() { return humanScreen; });
/* harmony import */ var _createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createFunctions/createCanvas */ "./src/gamesrc/createFunctions/createCanvas.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/const */ "./src/gamesrc/const/const.js");
/* harmony import */ var _classes_human_human__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/human/human */ "./src/gamesrc/classes/human/human.js");




/**
 * class instance
 */

const human = new _classes_human_human__WEBPACK_IMPORTED_MODULE_2__["Human"]();

/**
 * warrior
 */

const humanScreen = () => {
   /**
    * remove old components
    */
   Object(_createFunctions_createCanvas__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])();

   /** set state */
   _const_const__WEBPACK_IMPORTED_MODULE_1__["STATE"].setTitle('humanScreen');

   /** draw warrior content */
   human.getContent;
   human.getDrawStaticSprite;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzcmMvY2xhc3Nlcy9odW1hbi9odW1hbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9jbGFzc2VzL2h1bWFuMi9odW1hbjIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzcmMvY2xhc3Nlcy90ZW1wbGF0ZXMvY2FyYWN0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL2NvbnN0L2NvbnN0LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUNsaWNrRm9yTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9zY3JlZW5zL2Nob3NlQ2FyYWN0ZXJTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzcmMvc2NyZWVucy9jbGFzc2VzU2NyZWVuL2h1bWFuMlNjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9zY3JlZW5zL2NsYXNzZXNTY3JlZW4vaHVtYW5TY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzcmMvc2NyZWVucy9tYWluTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9zY3JlZW5zL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lc3JjL3NjcmVlbnMvb3B0aW9uc1NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXNyYy9zY3JlZW5zL3BsYXlTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWV0ZXN0L2NhbnZhcy9jYW52YXNEcmF3LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1ldGVzdC9jYW52YXMvY3JlYXRlQ2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1ldGVzdC9tb3ZpbmdTcHJpdGUvbW92aW5nU3ByaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1ldGVzdC9tb3ZpbmdTcHJpdGUvc3BhY2VzaGlwVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDRztBQUNOOztBQUVsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkpZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSHVtYW5zIGZyb20gJy4vaHVtYW4uanNvbic7XG5pbXBvcnQge0NhcmFjdGVyc30gZnJvbSAnLi4vdGVtcGxhdGVzL2NhcmFjdGVycyc7XG5cbi8qKlxuICogQGNsYXNzIFdhcnJpb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEh1bWFuIGV4dGVuZHMgQ2FyYWN0ZXJzIHtcbiAgIC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMubmFtZSA9IEh1bWFucy5OYW1lO1xuICAgICAgdGhpcy5saWZlID0gSHVtYW5zLkxpZmU7XG4gICAgICB0aGlzLnByb3QgPSBIdW1hbnMuUHJvdDtcbiAgICAgIHRoaXMucmVzdW1lID0gSHVtYW5zLlJlc3VtZTtcbiAgICAgIHRoaXMuc3ByaXRlID0ge1xuICAgICAgICAgaW1hZ2U6IEh1bWFucy5TcHJpdGUsXG4gICAgICAgICBzeDogNzAsXG4gICAgICAgICBzeTogMCxcbiAgICAgICAgIHNXaWR0aDogNjAwLFxuICAgICAgICAgc0hlaWdodDogNjcwLFxuICAgICAgICAgZHg6IDQwMCxcbiAgICAgICAgIGR5OiAyMDAsXG4gICAgICAgICBkV2lkdGg6IDEyMCxcbiAgICAgICAgIGRIZWlnaHQ6IDE0NCxcbiAgICAgIH07XG4gICB9XG59XG4iLCJpbXBvcnQgSHVtYW5zMiBmcm9tICcuL2h1bWFuMi5qc29uJztcbmltcG9ydCB7Q2FyYWN0ZXJzfSBmcm9tICcuLi90ZW1wbGF0ZXMvY2FyYWN0ZXJzJztcblxuLyoqXG4gKiBAY2xhc3MgV2FycmlvclxuICovXG5leHBvcnQgY2xhc3MgSHVtYW4yIGV4dGVuZHMgQ2FyYWN0ZXJzIHtcbiAgIC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcblxuICAgICAgdGhpcy5uYW1lID0gSHVtYW5zMi5OYW1lO1xuICAgICAgdGhpcy5saWZlID0gSHVtYW5zMi5MaWZlO1xuICAgICAgdGhpcy5wcm90ID0gSHVtYW5zMi5Qcm90O1xuICAgICAgdGhpcy5yZXN1bWUgPSBIdW1hbnMyLlJlc3VtZTtcbiAgICAgIHRoaXMuc3ByaXRlID0ge1xuICAgICAgICAgaW1hZ2U6IEh1bWFuczIuU3ByaXRlLFxuICAgICAgICAgc3g6IDcwLFxuICAgICAgICAgc3k6IDEwLFxuICAgICAgICAgc1dpZHRoOiA1NTAsXG4gICAgICAgICBzSGVpZ2h0OiA2NjAsXG4gICAgICAgICBkeDogNDAwLFxuICAgICAgICAgZHk6IDIwMCxcbiAgICAgICAgIGRXaWR0aDogMTIwLFxuICAgICAgICAgZEhlaWdodDogMTQ0LFxuICAgICAgfTtcbiAgIH1cbn1cbiIsImltcG9ydCB7Y3R4LCBjYW52YXN9IGZyb20gJy4uLy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuXG4vKipcbiAqIEBjbGFzcyBDYXJhY3RlcnNcbiAqL1xuZXhwb3J0IGNsYXNzIENhcmFjdGVycyB7XG4gICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAgKiBAcGFyYW0gIHtpbnR9IGxpZmVcbiAgICAqIEBwYXJhbSAge2ludH0gcHJvdFxuICAgICogQHBhcmFtICB7U3RyaW5nfSByZXN1bWVcbiAgICAqL1xuICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAvKiogYWJzdHJhY3QgY29udHJ1Y3RvciAqL1xuICAgICAgaWYgKG5ldy50YXJnZXQgPT09IENhcmFjdGVycykge1xuICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBDYXJhY3RlcnMgaW5zdGFuY2VzIGRpcmVjdGx5Jyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgdGhpcy5saWZlID0gMDtcbiAgICAgIHRoaXMucHJvdCA9IDA7XG4gICAgICB0aGlzLnJlc3VtZSA9ICcnO1xuICAgICAgdGhpcy5zcHJpdGUgPSB7XG4gICAgICAgICBpbWFnZTogJy9zcmMvYXNzZXRzL3Nwcml0ZS93YXJyaW9yL3dhcnJpb3JTcHJpdGUucG5nJyxcbiAgICAgICAgIHN4OiAwLFxuICAgICAgICAgc3k6IDAsXG4gICAgICAgICBzV2lkdGg6IDAsXG4gICAgICAgICBzSGVpZ2h0OiAwLFxuICAgICAgICAgZHg6IDAsXG4gICAgICAgICBkeTogMCxcbiAgICAgICAgIGR3aWR0aDogMCxcbiAgICAgICAgIGRIZWlnaHQ6IDAsXG4gICAgICB9O1xuICAgfVxuXG4gICAvKipcbiAgICAqIEByZXR1cm4ge1N0cmluZ30gbmFtZVxuICAgICovXG4gICBnZXQgZ2V0TmFtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICB9XG4gICAvKipcbiAgICAqIEByZXR1cm4ge2ludH0gbGlmZVxuICAgICovXG4gICBnZXQgZ2V0TGlmZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxpZmU7XG4gICB9XG4gICAvKipcbiAgICAqIEByZXR1cm4ge2ludH0gcHJvdFxuICAgICovXG4gICBnZXQgZ2V0UHJvdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3Q7XG4gICB9XG4gICAvKipcbiAgICAqIEByZXR1cm4ge1N0cmluZ30gcmVzdW1lXG4gICAgKi9cbiAgIGdldCBnZXRSZXN1bWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXN1bWU7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQG1ldGhvZCBkcmF3Q29udGVudFxuICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAqIEBwYXJhbSB7aW50fSBsaWZlXG4gICAgKiBAcGFyYW0ge2ludH0gcHJvdFxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlc3VtZVxuICAgICovXG4gICBkcmF3Q29udGVudChuYW1lLCBsaWZlLCBwcm90LCByZXN1bWUpIHtcbiAgICAgIC8qKlxuICAgICAgICogd2FycmlvciB0aXRsZVxuICAgICAgICovXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ2xpZ2h0Ymx1ZSc7XG4gICAgICBjdHguZm9udCA9ICc1MHB4IEFyaWFsIGJsYWNrJztcbiAgICAgIGNvbnN0IHRpdGxlID0gbmFtZTtcbiAgICAgIGNvbnN0IG1ldHJpY3MgPSBjdHgubWVhc3VyZVRleHQobmFtZSk7XG4gICAgICBjb25zdCB3aWR0aCA9IG1ldHJpY3Mud2lkdGg7XG5cbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gY2FudmFzLndpZHRoIC8gMiAtIHdpZHRoIC8gMiAtIDI1O1xuICAgICAgY3R4LmZpbGxUZXh0KHRpdGxlLCBwb3NpdGlvbiwgNTApO1xuXG4gICAgICAvKipcbiAgICAgICAqIHN0YXRzIGZyYW1lXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHN0YXRzRnJhbWUgPSB7XG4gICAgICAgICB4OiAyMCxcbiAgICAgICAgIHk6IDIwLFxuICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgIGhlaWdodDogNTAwLFxuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBzcHJpdGUgZnJhbWVcbiAgICAgICAqL1xuICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSB7XG4gICAgICAgICB4OiAzMDAsXG4gICAgICAgICB5OiAxMDAsXG4gICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICB9O1xuXG4gICAgICAvKiogc3RhdHMgZnJhbWUgZHJhdyAgKi9cbiAgICAgIGN0eC5yZWN0KHN0YXRzRnJhbWUueCwgc3RhdHNGcmFtZS55LCBzdGF0c0ZyYW1lLndpZHRoLCBzdGF0c0ZyYW1lLmhlaWdodCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIC8qKiBzcHJpdGUgZnJhbWUgZHJhdyAgKi9cbiAgICAgIGN0eC5yZWN0KFxuICAgICAgICAgc3ByaXRlRnJhbWUueCxcbiAgICAgICAgIHNwcml0ZUZyYW1lLnksXG4gICAgICAgICBzcHJpdGVGcmFtZS53aWR0aCxcbiAgICAgICAgIHNwcml0ZUZyYW1lLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIC8qKlxuICAgICAgICogY29udGVudEZyYW1lXG4gICAgICAgKi9cblxuICAgICAgY29uc3Qgc3RhdHNBbmRTcHJpdGUgPSB7XG4gICAgICAgICB4OiBzdGF0c0ZyYW1lLndpZHRoIC8gMixcbiAgICAgICAgIHk6IHN0YXRzRnJhbWUuaGVpZ2h0IC8gMixcblxuICAgICAgICAgLyoqIGFycmF5IGZvciBjb250ZW50ICovXG4gICAgICAgICBjb250ZW50OiBbYENsYXNzOiAke25hbWV9YCwgYExpZmU6ICR7bGlmZX1gLCBgUHJvdDogJHtwcm90fWAsIHJlc3VtZV0sXG4gICAgICAgICAvKipcbiAgICAgICAgICAqXG4gICAgICAgICAgKiBAcGFyYW0geyp9IGNvbnRlbnRcbiAgICAgICAgICAqIEByZXR1cm4ge2ludH1cbiAgICAgICAgICAqL1xuICAgICAgICAgcG9zKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjdHgubWVhc3VyZVRleHQoY29udGVudCkud2lkdGggLyAyLjU7XG4gICAgICAgICB9LFxuICAgICAgICAgLyoqXG4gICAgICAgICAgKlxuICAgICAgICAgICogQHBhcmFtIHsqfSBzdHlsZVxuICAgICAgICAgICogQHBhcmFtIHsqfSBmb250XG4gICAgICAgICAgKi9cbiAgICAgICAgIGRyYXcoc3R5bGUgPSAnbGlnaHRibHVlJywgZm9udCA9ICcyMHB4IEFyaWFsIGJsYWNrJykge1xuICAgICAgICAgICAgbGV0IGhlaWdodCA9IC0yMDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29udGVudC5sZW5ndGg7IGkrKywgaGVpZ2h0ICs9IDEwMCkge1xuICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHN0eWxlO1xuICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBmb250O1xuICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFxuICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50W2ldLFxuICAgICAgICAgICAgICAgICAgdGhpcy54IC0gdGhpcy5wb3ModGhpcy5jb250ZW50W2ldKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMueSArIGhlaWdodFxuICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICAvKiogZHJhdyBjb250ZW50ICovXG4gICAgICBzdGF0c0FuZFNwcml0ZS5kcmF3KCk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQG1ldGhvZCBkcmF3Q29udGVudFxuICAgICogQHBhcmFtIHtTdHJpbmd9IHNwcml0ZVBhdGhcbiAgICAqIEBwYXJhbSB7Kn0gc3ByaXRlSW5mb3NcbiAgICAqL1xuICAgZHJhd1N0YXRpY1Nwcml0ZSguLi5pbmZvcykge1xuICAgICAgbGV0IHNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgc3ByaXRlLnNyYyA9IGluZm9zWzBdO1xuXG4gICAgICBpbmZvcy5zaGlmdCgpO1xuICAgICAgc3ByaXRlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgIGN0eC5kcmF3SW1hZ2Uoc3ByaXRlLCAuLi5pbmZvcyk7XG4gICAgICB9O1xuICAgfVxuXG4gICAvKipcbiAgICAqIEByZXR1cm4geyp9IHRoaXMuZHJhd0NvbnRlbnQoKVxuICAgICovXG4gICBnZXQgZ2V0Q29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRyYXdDb250ZW50KHRoaXMubmFtZSwgdGhpcy5saWZlLCB0aGlzLnByb3QsIHRoaXMucmVzdW1lKTtcbiAgIH1cbiAgIC8qKlxuICAgICogQHJldHVybiB7Kn0gdGhpcy5kcmF3U3ByaXRlT25NZW51KClcbiAgICAqL1xuICAgZ2V0IGdldERyYXdTdGF0aWNTcHJpdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kcmF3U3RhdGljU3ByaXRlKFxuICAgICAgICAgdGhpcy5zcHJpdGUuaW1hZ2UsXG4gICAgICAgICB0aGlzLnNwcml0ZS5zeCxcbiAgICAgICAgIHRoaXMuc3ByaXRlLnN5LFxuICAgICAgICAgdGhpcy5zcHJpdGUuc1dpZHRoLFxuICAgICAgICAgdGhpcy5zcHJpdGUuc0hlaWdodCxcbiAgICAgICAgIHRoaXMuc3ByaXRlLmR4LFxuICAgICAgICAgdGhpcy5zcHJpdGUuZHksXG4gICAgICAgICB0aGlzLnNwcml0ZS5kV2lkdGgsXG4gICAgICAgICB0aGlzLnNwcml0ZS5kSGVpZ2h0XG4gICAgICApO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEByZXR1cm4ge29iamVjdH0gdGhpcy5zcHJpdGVcbiAgICAqL1xuICAgZ2V0IHBvcnRyYWl0U3ByaXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlO1xuICAgfVxufVxuIiwiLyoqXG4gKiBEZWNsYXJpbmcgdXNlZnVsIHZhcmlhYmxlc1xuICovXG5cbmV4cG9ydCBsZXQgU1RBVEUgPSB7XG4gICBpZDogMSxcblxuICAgVGl0bGU6ICdNZW51JyxcblxuICAgc2V0VGl0bGUobmV3VGl0bGUpIHtcbiAgICAgIHRoaXMuVGl0bGUgPSBuZXdUaXRsZTtcbiAgIH0sXG5cbiAgIGdldFRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuVGl0bGU7XG4gICB9LFxufTtcbiIsImltcG9ydCB7Y3R4LCBjYW52YXN9IGZyb20gJy4vY3JlYXRlQ2FudmFzJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHsqfSB4XG4gKiBAcGFyYW0geyp9IHlcbiAqIEBwYXJhbSB7Kn0gd2lkdGhcbiAqIEBwYXJhbSB7Kn0gaGVpZ2h0XG4gKiBAcGFyYW0geyp9IHRleHRcbiAqIEBwYXJhbSB7Kn0gYmFja2dyb3VuZENvbG9yXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgQnV0dG9ucyBhbmQgcmV0dXJuIHBvc2l0aW9uXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJ1dHRvbnMgPSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgdGV4dCwgYmFja2dyb3VuZENvbG9yKSA9PiB7XG4gICByZXR1cm4ge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHksXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9ydHJhaXRzID0gKHgsIHksIHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgIHJldHVybiB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeSxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb29yQnV0dG9ucyA9IChlLCBvYmplY3QpID0+IHtcbiAgIGNvbnN0IG1vdXNlID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICB9O1xuXG4gICBjb25zdCBib3VuZHMgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAvLyBnZXQgdGhlIG1vdXNlIGNvb3JkaW5hdGVzLCBzdWJ0cmFjdCB0aGUgY2FudmFzIHRvcCBsZWZ0IGFuZCBhbnkgc2Nyb2xsaW5nXG4gICBtb3VzZS54ID0gZS5wYWdlWCAtIGJvdW5kcy5sZWZ0IC0gc2Nyb2xsWDtcbiAgIG1vdXNlLnkgPSBlLnBhZ2VZIC0gYm91bmRzLnRvcCAtIHNjcm9sbFk7XG5cbiAgIHJldHVybiAoXG4gICAgICBtb3VzZS54ID4gb2JqZWN0LnggJiZcbiAgICAgIG1vdXNlLnggPCBvYmplY3QueCArIG9iamVjdC53aWR0aCAmJlxuICAgICAgbW91c2UueSA+IG9iamVjdC55ICYmXG4gICAgICBtb3VzZS55IDwgb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0XG4gICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGRyYXdCdXR0b25zID0gKC4uLmJ1dHRvbikgPT4ge1xuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8qKiBidXR0b24gdG8gY3JlYXRlICovXG4gICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uW2ldLmJhY2tncm91bmRDb2xvcjtcbiAgICAgIGN0eC5maWxsUmVjdChidXR0b25baV0ueCwgYnV0dG9uW2ldLnksIGJ1dHRvbltpXS53aWR0aCwgYnV0dG9uW2ldLmhlaWdodCk7XG5cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdncmV5JztcbiAgICAgIGN0eC5saW5lV2lkdGggPSAnNyc7XG4gICAgICBjdHguc3Ryb2tlUmVjdChcbiAgICAgICAgIGJ1dHRvbltpXS54LFxuICAgICAgICAgYnV0dG9uW2ldLnksXG4gICAgICAgICBidXR0b25baV0ud2lkdGgsXG4gICAgICAgICBidXR0b25baV0uaGVpZ2h0XG4gICAgICApO1xuXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgIGN0eC5mb250ID0gJzIzcHggQXJpYWwgQmxhY2snO1xuICAgICAgY3R4LmZpbGxUZXh0KFxuICAgICAgICAgYnV0dG9uW2ldLnRleHQsXG4gICAgICAgICBidXR0b25baV0ueCArIDEwLFxuICAgICAgICAgYnV0dG9uW2ldLnkgKyBidXR0b25baV0uaGVpZ2h0IC8gMiArIDVcbiAgICAgICk7XG4gICB9XG59O1xuXG5leHBvcnQgY29uc3QgZHJhd1BvcnRyYWl0cyA9IChpbWFnZSA9IHt9LCB4LCB5LCBwb3J0cmFpdCkgPT4ge1xuICAgLyoqIHBvcnRyYWl0IGZyYW1lIHRvIGNyZWF0ZSAqL1xuXG4gICBjdHguZmlsbFJlY3QocG9ydHJhaXQueCwgcG9ydHJhaXQueSwgcG9ydHJhaXQud2lkdGgsIHBvcnRyYWl0LmhlaWdodCk7XG5cbiAgIGN0eC5zdHJva2VTdHlsZSA9ICdncmV5JztcbiAgIGN0eC5saW5lV2lkdGggPSAnNyc7XG4gICBjdHguc3Ryb2tlUmVjdChwb3J0cmFpdC54LCBwb3J0cmFpdC55LCBwb3J0cmFpdC53aWR0aCwgcG9ydHJhaXQuaGVpZ2h0KTtcblxuICAgLyoqXG4gICAgKiBpbWFnZSBvZiB0aGUgcG9ydHJhaXRcbiAgICAqL1xuICAgbGV0IGltYWdlc3JjID0gbmV3IEltYWdlKCk7XG4gICBPYmplY3Qua2V5cyhpbWFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaW1hZ2UnKSBpbWFnZXNyYy5zcmMgPSBpbWFnZVtrZXldO1xuICAgfSk7XG4gICBpbWFnZXNyYy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgaW1hZ2VzcmMsXG4gICAgICAgICBpbWFnZS5zeCxcbiAgICAgICAgIGltYWdlLnN5LFxuICAgICAgICAgaW1hZ2Uuc1dpZHRoLFxuICAgICAgICAgaW1hZ2Uuc0hlaWdodCxcbiAgICAgICAgIHgsXG4gICAgICAgICB5LFxuICAgICAgICAgaW1hZ2UuZFdpZHRoLFxuICAgICAgICAgaW1hZ2UuZEhlaWdodFxuICAgICAgKTtcbiAgIH07XG59O1xuIiwiLyoqXG4gKiBHZXQgQ2FudmFzXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lV2luZG93Jyk7XG5leHBvcnQgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDYW52YXMgPSAoKSA9PiB7XG4gICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn07XG4iLCJpbXBvcnQge2NyZWF0ZUNhbnZhc30gZnJvbSAnLi9jcmVhdGVDYW52YXMnO1xuXG5pbXBvcnQge1NUQVRFfSBmcm9tICcuLi9jb25zdC9jb25zdCc7XG5pbXBvcnQge2Nob3NlTWVudX0gZnJvbSAnLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlQ2xpY2tGb3JNZW51JztcbmltcG9ydCB7YWN0aXZhdGVIb3ZlcmluZ30gZnJvbSAnLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlSG92ZXJpbmcnO1xuaW1wb3J0IHtwbGF5U2NyZWVufSBmcm9tICcuLi9zY3JlZW5zL3BsYXlTY3JlZW4nO1xuaW1wb3J0IHtvcHRpb25TY3JlZW59IGZyb20gJy4uL3NjcmVlbnMvb3B0aW9uc1NjcmVlbic7XG5pbXBvcnQge2NyZWF0ZU1lbnUsIHBsYXlCdXR0b24sIG9wdGlvbkJ1dHRvbn0gZnJvbSAnLi4vc2NyZWVucy9tYWluTWVudSc7XG5pbXBvcnQge25hdmlnYXRpb25NZW51fSBmcm9tICcuLi9zY3JlZW5zL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51JztcblxuaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09ICdNZW51Jykge1xuICAgLyoqXG4gICAgKiBDcmVhdGUgdGhlIGNhbnZhc1xuICAgICovXG4gICBjcmVhdGVDYW52YXMoKTtcblxuICAgLyoqXG4gICAgKiBDcmVhdGUgdGhlIG1haW4gTWVudVxuICAgICovXG4gICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gJ01lbnUnKSBjcmVhdGVNZW51KCk7XG5cbiAgIC8qKlxuICAgICogQWN0aXZhdGUgSG92ZXJpbmdcbiAgICAqL1xuXG4gICBhY3RpdmF0ZUhvdmVyaW5nKFxuICAgICAgKCkgPT4ge1xuICAgICAgICAgbmF2aWdhdGlvbk1lbnUoJ01lbnUnLCBjcmVhdGVNZW51LCAnTWVudScpO1xuICAgICAgfSxcbiAgICAgIHBsYXlCdXR0b24sXG4gICAgICBvcHRpb25CdXR0b25cbiAgICk7XG5cbiAgIC8qKlxuICAgICogQWN0aXZhdGUgQ2xpY2tcbiAgICAqL1xuXG4gICBjaG9zZU1lbnUoKCkgPT4ge1xuICAgICAgbmF2aWdhdGlvbk1lbnUoJ01lbnUnLCBwbGF5U2NyZWVuLCAnSW5nYW1lJyk7XG4gICB9LCBwbGF5QnV0dG9uKTtcblxuICAgY2hvc2VNZW51KCgpID0+IHtcbiAgICAgIG5hdmlnYXRpb25NZW51KCdNZW51Jywgb3B0aW9uU2NyZWVuLCAnT3B0aW9ucycpO1xuICAgfSwgb3B0aW9uQnV0dG9uKTtcbn1cbiIsImltcG9ydCB7Y2FudmFzfSBmcm9tICcuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzJztcbmltcG9ydCB7Y29vckJ1dHRvbnN9IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudSc7XG5cbmV4cG9ydCBjb25zdCBjaG9zZU1lbnUgPSAoaHJlZiwgYnV0dG9uKSA9PiB7XG4gICAvKipcbiAgICAqIENsaWNrIEV2ZW50XG4gICAgKiBDaG9vc2UgbWVudSB0byBjbGlja1xuICAgICovXG4gICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgaWYgKGNvb3JCdXR0b25zKGUsIGJ1dHRvbikpIHtcbiAgICAgICAgICAgIGhyZWYoKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH0pO1xufTtcbiIsImltcG9ydCB7Y2FudmFzfSBmcm9tICcuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQ2FudmFzJztcbmltcG9ydCB7Y29vckJ1dHRvbnN9IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudSc7XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZUhvdmVyaW5nID0gKHJlbG9hZEFjdHVhbE1lbnUsIC4uLmJ1dHRvbikgPT4ge1xuICAgLyoqXG4gICAgKiBIb3ZlciBldmVudFxuICAgICovXG4gICBpZiAoYnV0dG9uLmxlbmd0aCkge1xuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29vckJ1dHRvbnMoZSwgYnV0dG9uW2ldKSkge1xuICAgICAgICAgICAgICAgYnV0dG9uW2ldLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJQbGF5XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIGJ1dHRvbltpXS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuXG4gICAgICAgICByZWxvYWRBY3R1YWxNZW51XG4gICAgICAgICAgICA/IHJlbG9hZEFjdHVhbE1lbnUoKVxuICAgICAgICAgICAgOiAvLyBjb25zb2xlLmVycm9yKCdNaXNzaW5nIEZ1bmN0aW9uIFBhcmFtZXRlcicpXG4gICAgICAgICAgICBmYWxzZTtcbiAgICAgIH0pO1xuICAgfVxufTtcbiIsImltcG9ydCB7Y2FudmFzLCBjcmVhdGVDYW52YXN9IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuaW1wb3J0IHtTVEFURX0gZnJvbSAnLi4vY29uc3QvY29uc3QnO1xuaW1wb3J0IHtcbiAgIGNyZWF0ZUJ1dHRvbnMsXG4gICBkcmF3QnV0dG9ucyxcbiAgIGNyZWF0ZVBvcnRyYWl0cyxcbiAgIGRyYXdQb3J0cmFpdHMsXG59IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVCdXR0b25zRm9yTWVudSc7XG5pbXBvcnQge2FjdGl2YXRlSG92ZXJpbmd9IGZyb20gJy4uL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUhvdmVyaW5nJztcbmltcG9ydCB7bmF2aWdhdGlvbk1lbnV9IGZyb20gJy4vbmF2aWdhdGlvbk1lbnUvbmF2aWdhdGlvbk1lbnUnO1xuaW1wb3J0IHtjaG9zZU1lbnV9IGZyb20gJy4uL2Rlc2lnbkZ1bmN0aW9ucy9hY3RpdmF0ZUNsaWNrRm9yTWVudSc7XG5pbXBvcnQge3BsYXlTY3JlZW59IGZyb20gJy4vcGxheVNjcmVlbic7XG5pbXBvcnQge2h1bWFuU2NyZWVufSBmcm9tICcuL2NsYXNzZXNTY3JlZW4vaHVtYW5TY3JlZW4nO1xuaW1wb3J0IHtodW1hbjJTY3JlZW59IGZyb20gJy4vY2xhc3Nlc1NjcmVlbi9odW1hbjJTY3JlZW4nO1xuaW1wb3J0IHtIdW1hbn0gZnJvbSAnLi4vY2xhc3Nlcy9odW1hbi9odW1hbic7XG5pbXBvcnQge0h1bWFuMn0gZnJvbSAnLi4vY2xhc3Nlcy9odW1hbjIvaHVtYW4yJztcblxuY29uc3QgaHVtYW4gPSBuZXcgSHVtYW4oKTtcblxuLyoqXG4gKiBodW1hblxuICovXG5cbmNvbnN0IGh1bWFuQnV0dG9uID0gY3JlYXRlUG9ydHJhaXRzKFxuICAgY2FudmFzLndpZHRoIC8gMiAtIDMwMCxcbiAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjAwLFxuICAgMjAwLFxuICAgMjAwXG4pO1xuXG5jb25zdCBodW1hbjIgPSBuZXcgSHVtYW4yKCk7XG5cbi8qKlxuICogaHVtYW4yXG4gKi9cblxuY29uc3QgaHVtYW4yQnV0dG9uID0gY3JlYXRlUG9ydHJhaXRzKFxuICAgY2FudmFzLndpZHRoIC8gMiArIDEwMCxcbiAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjAwLFxuICAgMjAwLFxuICAgMjAwXG4pO1xuXG5jb25zdCBjYW5jZWwgPSBjcmVhdGVCdXR0b25zKFxuICAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgIGNhbnZhcy5oZWlnaHQgLyAyICsgNTAsXG4gICAyMDAsXG4gICA1MCxcbiAgICdDYW5jZWwnXG4pO1xuXG5leHBvcnQgY29uc3QgY2hvc2VDYXJhY3RlclNjcmVlbiA9ICgpID0+IHtcbiAgIC8qKlxuICAgICogcmVtb3ZlIG9sZCBjb21wb25lbnRzXG4gICAgKi9cbiAgIGNyZWF0ZUNhbnZhcygpO1xuXG4gICAvKiogU2V0IFN0YXRlICovXG4gICBTVEFURS5zZXRUaXRsZSgnY2hvc2VDYXJhY3RlcicpO1xuICAgLyoqIGh1bWFuICovXG4gICBkcmF3UG9ydHJhaXRzKGh1bWFuLnBvcnRyYWl0U3ByaXRlLCAxNTAsIDEzMCwgaHVtYW5CdXR0b24pO1xuICAgLyoqIGh1bWFuMiAqL1xuICAgZHJhd1BvcnRyYWl0cyhodW1hbjIucG9ydHJhaXRTcHJpdGUsIDU1MCwgMTMwLCBodW1hbjJCdXR0b24pO1xuXG4gICBkcmF3QnV0dG9ucyhjYW5jZWwpO1xufTtcblxuLyoqXG4gKiBBY3RpdmF0ZSBIb3ZlcmluZ1xuICovXG5cbmFjdGl2YXRlSG92ZXJpbmcoKCkgPT4ge1xuICAgbmF2aWdhdGlvbk1lbnUoJ2Nob3NlQ2FyYWN0ZXInLCBjaG9zZUNhcmFjdGVyU2NyZWVuLCAnY2hvc2VDYXJhY3RlcicpO1xufSwgY2FuY2VsKTtcblxuLyoqXG4gKiBBY3RpdmF0ZSBDbGlja1xuICovXG5cbmNob3NlTWVudSgoKSA9PiB7XG4gICBuYXZpZ2F0aW9uTWVudSgnY2hvc2VDYXJhY3RlcicsIGh1bWFuU2NyZWVuLCAnaHVtYW5TY3JlZW4nKTtcbn0sIGh1bWFuQnV0dG9uKTtcblxuY2hvc2VNZW51KCgpID0+IHtcbiAgIG5hdmlnYXRpb25NZW51KCdjaG9zZUNhcmFjdGVyJywgaHVtYW4yU2NyZWVuLCAnaHVtYW4yU2NyZWVuJyk7XG59LCBodW1hbjJCdXR0b24pO1xuXG5jaG9zZU1lbnUoKCkgPT4ge1xuICAgbmF2aWdhdGlvbk1lbnUoJ2Nob3NlQ2FyYWN0ZXInLCBwbGF5U2NyZWVuLCAnSW5nYW1lJyk7XG59LCBjYW5jZWwpO1xuIiwiaW1wb3J0IHtjcmVhdGVDYW52YXN9IGZyb20gJy4uLy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuaW1wb3J0IHtTVEFURX0gZnJvbSAnLi4vLi4vY29uc3QvY29uc3QnO1xuaW1wb3J0IHtIdW1hbjJ9IGZyb20gJy4uLy4uL2NsYXNzZXMvaHVtYW4yL2h1bWFuMic7XG5cbi8qKlxuICogY2xhc3MgaW5zdGFuY2VcbiAqL1xuXG5jb25zdCBodW1hbjIgPSBuZXcgSHVtYW4yKCk7XG5cbi8qKlxuICogd2FycmlvclxuICovXG5cbmV4cG9ydCBjb25zdCBodW1hbjJTY3JlZW4gPSAoKSA9PiB7XG4gICAvKipcbiAgICAqIHJlbW92ZSBvbGQgY29tcG9uZW50c1xuICAgICovXG4gICBjcmVhdGVDYW52YXMoKTtcblxuICAgLyoqIHNldCBzdGF0ZSAqL1xuICAgU1RBVEUuc2V0VGl0bGUoJ2h1bWFuMlNjcmVlbicpO1xuXG4gICAvKiogZHJhdyB3YXJyaW9yIGNvbnRlbnQgKi9cbiAgIGh1bWFuMi5nZXRDb250ZW50O1xuICAgaHVtYW4yLmdldERyYXdTdGF0aWNTcHJpdGU7XG59O1xuIiwiaW1wb3J0IHtjcmVhdGVDYW52YXN9IGZyb20gJy4uLy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuaW1wb3J0IHtTVEFURX0gZnJvbSAnLi4vLi4vY29uc3QvY29uc3QnO1xuaW1wb3J0IHtIdW1hbn0gZnJvbSAnLi4vLi4vY2xhc3Nlcy9odW1hbi9odW1hbic7XG5cbi8qKlxuICogY2xhc3MgaW5zdGFuY2VcbiAqL1xuXG5jb25zdCBodW1hbiA9IG5ldyBIdW1hbigpO1xuXG4vKipcbiAqIHdhcnJpb3JcbiAqL1xuXG5leHBvcnQgY29uc3QgaHVtYW5TY3JlZW4gPSAoKSA9PiB7XG4gICAvKipcbiAgICAqIHJlbW92ZSBvbGQgY29tcG9uZW50c1xuICAgICovXG4gICBjcmVhdGVDYW52YXMoKTtcblxuICAgLyoqIHNldCBzdGF0ZSAqL1xuICAgU1RBVEUuc2V0VGl0bGUoJ2h1bWFuU2NyZWVuJyk7XG5cbiAgIC8qKiBkcmF3IHdhcnJpb3IgY29udGVudCAqL1xuICAgaHVtYW4uZ2V0Q29udGVudDtcbiAgIGh1bWFuLmdldERyYXdTdGF0aWNTcHJpdGU7XG59O1xuIiwiaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhcyc7XG5pbXBvcnQge1xuICAgY3JlYXRlQnV0dG9ucyxcbiAgIGRyYXdCdXR0b25zLFxufSBmcm9tICcuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnUnO1xuXG5pbXBvcnQgdmVyc2lvbiBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nO1xuXG4vKipcbiAqIFBsYXkgQnV0dG9uXG4gKi9cbmV4cG9ydCBjb25zdCBwbGF5QnV0dG9uID0gY3JlYXRlQnV0dG9ucyhcbiAgIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXG4gICBjYW52YXMuaGVpZ2h0IC8gMiAtIDEwMCxcbiAgIDIwMCxcbiAgIDUwLFxuICAgJ1BsYXkgdGhlIGdhbWUnLFxuICAgJ3doaXRlJ1xuKTtcblxuLyoqXG4gKiBPcHRpb25zIEJ1dHRvblxuICovXG5leHBvcnQgY29uc3Qgb3B0aW9uQnV0dG9uID0gY3JlYXRlQnV0dG9ucyhcbiAgIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXG4gICBjYW52YXMuaGVpZ2h0IC8gMiAtIDI1LFxuICAgMjAwLFxuICAgNTAsXG4gICAnT3B0aW9ucycsXG4gICAnd2hpdGUnXG4pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgIC8qKlxuICAgICogUmV0cmlldmUgR2FtZSBWZXJzaW9uXG4gICAgKi9cbiAgIGNvbnN0IGdhbWVWZXJzaW9uID0gJ1YgJyArIHZlcnNpb24udmVyc2lvbjtcblxuICAgLy8gRHJhdyBWZXJzaW9uIGluIGNhbnZhcyAvL1xuICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgY3R4LmZvbnQgPSAnMTVweCBBcmlhbCBibGFjayc7XG4gICBjdHguZmlsbFRleHQoZ2FtZVZlcnNpb24sIDUwLCA1MCk7XG5cbiAgIC8qKiBEcmF3IGJ1dHRvbiAqL1xuICAgZHJhd0J1dHRvbnMocGxheUJ1dHRvbiwgb3B0aW9uQnV0dG9uKTtcbn07XG4iLCJpbXBvcnQge1NUQVRFfSBmcm9tICcuLi8uLi9jb25zdC9jb25zdCc7XG5cbmV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uTWVudSA9IChhY3R1YWxTdGF0ZSwgc2NyZWVuTG9hZGVkLCBzdGF0ZUxvYWRlZCkgPT4ge1xuICAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IGFjdHVhbFN0YXRlKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHN1Y2Nlc3MsIGVycm9yKSA9PiB7XG4gICAgICAgICBpZiAoU1RBVEUuZ2V0VGl0bGUoKSA9PT0gYWN0dWFsU3RhdGUpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MoKCkgPT4gc2NyZWVuTG9hZGVkKCkpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdFcnJvciwgV3JvbmcgU1RBVEUgVGl0bGUnKTtcbiAgICAgICAgIH1cbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgaWYgKFNUQVRFLmdldFRpdGxlKCkgPT09IGFjdHVhbFN0YXRlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgIFNUQVRFLnNldFRpdGxlKHN0YXRlTG9hZGVkKTtcbiAgICAgICAgICAgICAgIHNjcmVlbkxvYWRlZCgpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICA1MDtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgfVxufTtcbiIsImltcG9ydCB7Y2FudmFzLCBjcmVhdGVDYW52YXN9IGZyb20gJy4uL2NyZWF0ZUZ1bmN0aW9ucy9jcmVhdGVDYW52YXMnO1xuaW1wb3J0IHtTVEFURX0gZnJvbSAnLi4vY29uc3QvY29uc3QnO1xuaW1wb3J0IHtcbiAgIGNyZWF0ZUJ1dHRvbnMsXG4gICBkcmF3QnV0dG9ucyxcbn0gZnJvbSAnLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUJ1dHRvbnNGb3JNZW51JztcbmltcG9ydCB7YWN0aXZhdGVIb3ZlcmluZ30gZnJvbSAnLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlSG92ZXJpbmcnO1xuaW1wb3J0IHtuYXZpZ2F0aW9uTWVudX0gZnJvbSAnLi9uYXZpZ2F0aW9uTWVudS9uYXZpZ2F0aW9uTWVudSc7XG5pbXBvcnQge2Nob3NlTWVudX0gZnJvbSAnLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlQ2xpY2tGb3JNZW51JztcbmltcG9ydCB7Y3JlYXRlTWVudX0gZnJvbSAnLi9tYWluTWVudSc7XG5cbi8qKlxuICogUmVzb2x1dGlvbiBCdXR0b25cbiAqL1xuXG5jb25zdCByZXNvbHV0aW9uID0gY3JlYXRlQnV0dG9ucyhcbiAgIGNhbnZhcy53aWR0aCAvIDIgLSAxMDAsXG4gICBjYW52YXMuaGVpZ2h0IC8gMiAtIDEwMCxcbiAgIDIwMCxcbiAgIDUwLFxuICAgJ1Jlc29sdXRpb24nLFxuICAgJ3doaXRlJ1xuKTtcblxuLyoqXG4gKiBTb3VuZCBCdXR0b25cbiAqL1xuXG5jb25zdCBjYW5jZWwgPSBjcmVhdGVCdXR0b25zKFxuICAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjUsXG4gICAyMDAsXG4gICA1MCxcbiAgICdDYW5jZWwnLFxuICAgJ3doaXRlJ1xuKTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvblNjcmVlbiA9ICgpID0+IHtcbiAgIC8qKlxuICAgICogcmVtb3ZlIG9sZCBjb21wb25lbnRzXG4gICAgKi9cbiAgIGNyZWF0ZUNhbnZhcygpO1xuXG4gICAvKiogU2V0IFN0YXRlICovXG4gICBTVEFURS5zZXRUaXRsZSgnT3B0aW9ucycpO1xuXG4gICAvKiogRHJhdyBCdXR0b25zICovXG4gICBkcmF3QnV0dG9ucyhyZXNvbHV0aW9uLCBjYW5jZWwpO1xufTtcblxuLyoqXG4gKiBBY3RpdmF0ZSBIb3ZlcmluZ1xuICovXG5cbmFjdGl2YXRlSG92ZXJpbmcoXG4gICAoKSA9PiB7XG4gICAgICBuYXZpZ2F0aW9uTWVudSgnT3B0aW9ucycsIG9wdGlvblNjcmVlbiwgJ09wdGlvbnMnKTtcbiAgIH0sXG4gICByZXNvbHV0aW9uLFxuICAgY2FuY2VsXG4pO1xuXG4vKipcbiAqIEFjdGl2YXRlIENsaWNrXG4gKi9cblxuY2hvc2VNZW51KCgpID0+IHtcbiAgIG5hdmlnYXRpb25NZW51KCdPcHRpb25zJywgY3JlYXRlTWVudSwgJ01lbnUnKTtcbn0sIGNhbmNlbCk7XG5cbmNob3NlTWVudSgoKSA9PiB7XG4gICBuYXZpZ2F0aW9uTWVudSgnT3B0aW9ucycsIG9wdGlvblNjcmVlbiwgJ09wdGlvbnMnKTtcbn0sIHJlc29sdXRpb24pO1xuIiwiaW1wb3J0IHtjYW52YXMsIGNyZWF0ZUNhbnZhc30gZnJvbSAnLi4vY3JlYXRlRnVuY3Rpb25zL2NyZWF0ZUNhbnZhcyc7XG5pbXBvcnQge1NUQVRFfSBmcm9tICcuLi9jb25zdC9jb25zdCc7XG5pbXBvcnQge1xuICAgY3JlYXRlQnV0dG9ucyxcbiAgIGRyYXdCdXR0b25zLFxufSBmcm9tICcuLi9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlQnV0dG9uc0Zvck1lbnUnO1xuaW1wb3J0IHthY3RpdmF0ZUhvdmVyaW5nfSBmcm9tICcuLi9kZXNpZ25GdW5jdGlvbnMvYWN0aXZhdGVIb3ZlcmluZyc7XG5pbXBvcnQge2Nob3NlTWVudX0gZnJvbSAnLi4vZGVzaWduRnVuY3Rpb25zL2FjdGl2YXRlQ2xpY2tGb3JNZW51JztcbmltcG9ydCB7Y3JlYXRlTWVudX0gZnJvbSAnLi9tYWluTWVudSc7XG5pbXBvcnQge25hdmlnYXRpb25NZW51fSBmcm9tICcuL25hdmlnYXRpb25NZW51L25hdmlnYXRpb25NZW51JztcbmltcG9ydCB7Y2hvc2VDYXJhY3RlclNjcmVlbn0gZnJvbSAnLi9jaG9zZUNhcmFjdGVyU2NyZWVuJztcblxuLyoqXG4gKiBjcmVhdGVDYXJhY3RlciBCdXR0b25cbiAqL1xuXG5jb25zdCBjcmVhdGVDYXJhY3RlciA9IGNyZWF0ZUJ1dHRvbnMoXG4gICBjYW52YXMud2lkdGggLyAyIC0gMTAwLFxuICAgY2FudmFzLmhlaWdodCAvIDIgLSAxMDAsXG4gICAyMDAsXG4gICA1MCxcbiAgICdDYXJhY3RlcicsXG4gICAnd2hpdGUnXG4pO1xuXG5jb25zdCBjYW5jZWwgPSBjcmVhdGVCdXR0b25zKFxuICAgY2FudmFzLndpZHRoIC8gMiAtIDEwMCxcbiAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gMjUsXG4gICAyMDAsXG4gICA1MCxcbiAgICdDYW5jZWwnLFxuICAgJ3doaXRlJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHBsYXlTY3JlZW4gPSAoKSA9PiB7XG4gICAvKipcbiAgICAqIHJlbW92ZSBvbGQgY29tcG9uZW50c1xuICAgICovXG4gICBjcmVhdGVDYW52YXMoKTtcblxuICAgLyoqIFNldCBTdGF0ZSAqL1xuICAgU1RBVEUuc2V0VGl0bGUoJ0luZ2FtZScpO1xuXG4gICAvKiogRHJhdyBCdXR0b24gKi9cbiAgIGRyYXdCdXR0b25zKGNyZWF0ZUNhcmFjdGVyLCBjYW5jZWwpO1xufTtcblxuLyoqXG4gKiBBY3RpdmF0ZSBIb3ZlcmluZ1xuICovXG5cbmFjdGl2YXRlSG92ZXJpbmcoXG4gICAoKSA9PiB7XG4gICAgICBuYXZpZ2F0aW9uTWVudSgnSW5nYW1lJywgcGxheVNjcmVlbiwgJ0luZ2FtZScpO1xuICAgfSxcbiAgIGNyZWF0ZUNhcmFjdGVyLFxuICAgY2FuY2VsXG4pO1xuXG4vKipcbiAqIEFjdGl2YXRlIENsaWNrXG4gKi9cblxuY2hvc2VNZW51KCgpID0+IHtcbiAgIG5hdmlnYXRpb25NZW51KCdJbmdhbWUnLCBjaG9zZUNhcmFjdGVyU2NyZWVuLCAnY2hvc2VDYXJhY3RlcicpO1xufSwgY3JlYXRlQ2FyYWN0ZXIpO1xuXG5jaG9zZU1lbnUoKCkgPT4ge1xuICAgbmF2aWdhdGlvbk1lbnUoJ0luZ2FtZScsIGNyZWF0ZU1lbnUsICdNZW51Jyk7XG59LCBjYW5jZWwpO1xuIiwiaW1wb3J0IHtjcmVhdGVDYW52YXN9IGZyb20gJy4vY3JlYXRlQ2FudmFzJztcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tICcuLi9tb3ZpbmdTcHJpdGUvbW92aW5nU3ByaXRlJztcbmltcG9ydCB7U3BhY2VzaGlwfSBmcm9tICcuLi9tb3ZpbmdTcHJpdGUvc3BhY2VzaGlwVGVzdCc7XG5cbmNyZWF0ZUNhbnZhcygpO1xuXG4vKipcbiAqIGJhc2ljIGFuaW1hdGlvbnNcbiAqL1xuLypcbmNvbnN0IHNwcml0ZSA9IG5ldyBTcHJpdGVBbmltYXRpb24oKTtcblxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgc3ByaXRlLmRyYXdTcHJpdGUoKTtcbn0sIDEwMCk7XG4qL1xuXG5jb25zdCBzaGlwID0gbmV3IFNwYWNlc2hpcCgpO1xuXG5zaGlwLmRyYXdTaGlwKCk7XG4iLCIvKipcbiAqIEdldCBDYW52YXNcbiAqL1xuXG5leHBvcnQgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3RXaW5kb3cnKTtcbmV4cG9ydCBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNhbnZhcyA9ICgpID0+IHtcbiAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xufTtcbiIsImltcG9ydCB7Y3R4fSBmcm9tICcuLi9jYW52YXMvY3JlYXRlQ2FudmFzJztcblxuLyoqXG4gKiBDbGFzcyB0byBtb3ZlIHNwcml0ZVNoZWV0XG4gKi9cblxuLyoqXG4gKiBAY2xhc3Mgc3ByaXRlQW5pbWF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTcHJpdGVBbmltYXRpb24ge1xuICAgLyoqXG4gICAgKiBAY29uc3RydWN0b3Igc3ByaXRlQW5pbWF0aW9uXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUgPSB7XG4gICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgd2lkdGg6IDg2MCxcbiAgICAgICAgICAgIGhlaWdodDogMjYwLFxuICAgICAgICAgICAgcm93czogMixcbiAgICAgICAgICAgIGNvbHM6IDgsXG4gICAgICAgICB9LFxuICAgICAgICAgZGlyZWN0aW9uOiB7XG4gICAgICAgICAgICByaWdodFJvdzogMCxcbiAgICAgICAgICAgIGxlZnRSb3c6IDEsXG4gICAgICAgICB9LFxuICAgICAgICAgc3ByaXRlOiB7XG4gICAgICAgICAgICBkZWZhdWx0RnJhbWU6IDAsXG4gICAgICAgICAgICBmcmFtZU51bWJlcjogOCxcbiAgICAgICAgIH0sXG4gICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICB9LFxuICAgICAgICAgY2FudmFzQ29vcjoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICB9LFxuICAgICAgICAgbW92ZToge1xuICAgICAgICAgICAgcmlnaHQ6IHRydWUsXG4gICAgICAgICAgICBsZWZ0OiBmYWxzZSxcblxuICAgICAgICAgICAgc3BlZWQ6IDgsXG4gICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuc3ByaXRlLndpZHRoID1cbiAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLmltYWdlLndpZHRoIC8gdGhpcy5hbmltYXRpb25TcHJpdGUuaW1hZ2UuY29scztcblxuICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuc3ByaXRlLmhlaWdodCA9XG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5pbWFnZS5oZWlnaHQgLyB0aGlzLmFuaW1hdGlvblNwcml0ZS5pbWFnZS5yb3dzO1xuXG4gICAgICB0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgdGhpcy5zcHJpdGUuc3JjID1cbiAgICAgICAgICdzcmMvZ2FtZXRlc3QvbW92aW5nU3ByaXRlL2Fzc2V0cy9zcHJpdGUvdGVzdFNwcml0ZS90ZXN0U3ByaXRlLnBuZyc7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQG1ldGhvZCBtb3ZlTGVmdFxuICAgICovXG4gICBtb3ZlTGVmdCgpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLm1vdmUubGVmdCA9IHRydWU7XG4gICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5tb3ZlLnJpZ2h0ID0gZmFsc2U7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQG1ldGhvZCBtb3ZlUmlnaHRcbiAgICAqL1xuICAgbW92ZVJpZ2h0KCkge1xuICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUubW92ZS5sZWZ0ID0gZmFsc2U7XG4gICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5tb3ZlLnJpZ2h0ID0gdHJ1ZTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBAbWV0aG9kIGRyYXdTcHJpdGVcbiAgICAqL1xuICAgdXBkYXRlRnJhbWUoKSB7XG4gICAgICAvLyBVcGRhdGluZyB0aGUgZnJhbWUgaW5kZXhcbiAgICAgIGN0eC5jbGVhclJlY3QoXG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5wb3NpdGlvbi54LFxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUucG9zaXRpb24ueSxcbiAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLnNwcml0ZS53aWR0aCxcbiAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLnNwcml0ZS5oZWlnaHRcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLnNwcml0ZS5kZWZhdWx0RnJhbWUgPVxuICAgICAgICAgKyt0aGlzLmFuaW1hdGlvblNwcml0ZS5zcHJpdGUuZGVmYXVsdEZyYW1lICVcbiAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLnNwcml0ZS5mcmFtZU51bWJlcjtcblxuICAgICAgLy8gQ2FsY3VsYXRpbmcgdGhlIHggY29vcmRpbmF0ZSBmb3Igc3ByaXRlc2hlZXRcbiAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLmNhbnZhc0Nvb3IueCA9XG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5zcHJpdGUuZGVmYXVsdEZyYW1lICpcbiAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLnNwcml0ZS53aWR0aDtcblxuICAgICAgaWYgKFxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUubW92ZS5sZWZ0ICYmXG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5wb3NpdGlvbi54ID4gMFxuICAgICAgKSB7XG4gICAgICAgICAvLyBjYWxjdWxhdGUgc3JjWVxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuY2FudmFzQ29vci55ID1cbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLmRpcmVjdGlvbi5sZWZ0Um93ICpcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLnNwcml0ZS5oZWlnaHQ7XG4gICAgICAgICAvLyBkZWNyZWFzaW5nIHRoZSB4IGNvb3JkaW5hdGVcbiAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLnBvc2l0aW9uLnggLT0gdGhpcy5hbmltYXRpb25TcHJpdGUubW92ZS5zcGVlZDtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgdGhlIHJpZ2h0IGlzIHRydWUgYW5kIGNoYXJhY3RlciBoYXMgbm90IHJlYWNoZWQgcmlnaHQgZWRnZVxuICAgICAgaWYgKFxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUubW92ZS5yaWdodCAmJlxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUucG9zaXRpb24ueCA+IDBcbiAgICAgICkge1xuICAgICAgICAgLy8gY2FsY3VsYXRlIHNyY1lcbiAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLmNhbnZhc0Nvb3IueSA9XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5kaXJlY3Rpb24ucmlnaHRSb3cgKlxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuc3ByaXRlLmhlaWdodDtcbiAgICAgICAgIC8vIGRlY3JlYXNpbmcgdGhlIHggY29vcmRpbmF0ZVxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUucG9zaXRpb24ueCArPSB0aGlzLmFuaW1hdGlvblNwcml0ZS5tb3ZlLnNwZWVkO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgIGlmIChlLmtleSA9PT0gJ2QnKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVSaWdodCgpO1xuICAgICAgICAgfVxuICAgICAgICAgaWYgKGUua2V5ID09PSAncScpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZUxlZnQoKTtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEBtZXRob2QgZHJhd1Nwcml0ZVxuICAgICovXG4gICBkcmF3U3ByaXRlKCkge1xuICAgICAgLy8gVXBkYXRpbmcgdGhlIGZyYW1lXG4gICAgICB0aGlzLnVwZGF0ZUZyYW1lKCk7XG4gICAgICAvLyBEcmF3aW5nIHRoZSBpbWFnZVxuICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgIHRoaXMuc3ByaXRlLFxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuY2FudmFzQ29vci54LFxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuY2FudmFzQ29vci55LFxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuc3ByaXRlLndpZHRoLFxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuc3ByaXRlLmhlaWdodCxcbiAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3ByaXRlLnBvc2l0aW9uLngsXG4gICAgICAgICB0aGlzLmFuaW1hdGlvblNwcml0ZS5wb3NpdGlvbi55LFxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuc3ByaXRlLndpZHRoLFxuICAgICAgICAgdGhpcy5hbmltYXRpb25TcHJpdGUuc3ByaXRlLmhlaWdodFxuICAgICAgKTtcbiAgIH1cbn1cbiIsImltcG9ydCB7Y3R4fSBmcm9tICcuLi9jYW52YXMvY3JlYXRlQ2FudmFzJztcblxuLyoqXG4gKiBzcGFjZXNoaXAgY2xhc3NcbiAqL1xuXG4vKipcbiAqIEBjbGFzcyBTcGFjZXNoaXBcbiAqL1xuZXhwb3J0IGNsYXNzIFNwYWNlc2hpcCB7XG4gICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuc3BhY2VzaGlwID0ge1xuICAgICAgICAgc3ByaXRlOiAnc3JjL2dhbWV0ZXN0L21vdmluZ1Nwcml0ZS9hc3NldHMvc3ByaXRlL3NwYWNlc2hpcC9zaGlwLnBuZycsXG4gICAgICB9O1xuICAgfVxuXG4gICAvKipcbiAgICAqIEBtZXRob2QgZHJhd1NoaXBcbiAgICAqL1xuICAgZHJhd1NoaXAoKSB7XG4gICAgICBsZXQgc2hpcCA9IG5ldyBJbWFnZSgpO1xuICAgICAgc2hpcC5zcmMgPSB0aGlzLnNwYWNlc2hpcC5zcHJpdGU7XG5cbiAgICAgIHNoaXAub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgY3R4LmRyYXdJbWFnZShzaGlwLCA0LCA0LCA3MTIsIDcwNCwgMzAwLCAyMDAsIDIwMCwgMjAwKTtcbiAgICAgIH07XG4gICB9XG59XG4iLCIvKipcbiAqIGltcG9ydCBtYWluIGNhbnZhc1xuICovXG5pbXBvcnQgJy4vZ2FtZXNyYy9jcmVhdGVGdW5jdGlvbnMvY3JlYXRlTWVudSc7XG5cbi8qKlxuICogaW1wb3J0IHRlc3QgY2FudmFzXG4gKi9cbmltcG9ydCAnLi9nYW1ldGVzdC9jYW52YXMvY2FudmFzRHJhdyc7XG4iXSwic291cmNlUm9vdCI6IiJ9