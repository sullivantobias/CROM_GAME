import {ctx, canvas} from '../../createFunctions/createCanvas';

/**
 * @class Caracters
 */
export class Caracters {
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
      ctx.fillStyle = 'lightblue';
      ctx.font = '50px Arial black';
      const title = name;
      const metrics = ctx.measureText(name);
      const width = metrics.width;

      const position = canvas.width / 2 - width / 2 - 25;
      ctx.fillText(title, position, 50);

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
      ctx.rect(statsFrame.x, statsFrame.y, statsFrame.width, statsFrame.height);
      ctx.stroke();

      /** sprite frame draw  */
      ctx.rect(
         spriteFrame.x,
         spriteFrame.y,
         spriteFrame.width,
         spriteFrame.height
      );
      ctx.stroke();
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
            return ctx.measureText(content).width / 2.5;
         },
         /**
          *
          * @param {*} style
          * @param {*} font
          */
         draw(style = 'lightblue', font = '20px Arial black') {
            let height = -200;
            for (let i = 0; i < this.content.length; i++, height += 100) {
               ctx.fillStyle = style;
               ctx.font = font;
               ctx.fillText(
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
         ctx.drawImage(sprite, ...infos);
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
