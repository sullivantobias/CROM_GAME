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
       * frame
       */
      const frame = {
         x: 20,
         y: 20,
         width: 200,
         height: 500,
      };

      ctx.rect(frame.x, frame.y, frame.width, frame.height);
      ctx.stroke();
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
