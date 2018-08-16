import {ctx} from '../canvas/createCanvas';

/**
 * Class to move spriteSheet
 */

/**
 * @class spriteAnimation
 */
export class SpriteAnimation {
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
      ctx.clearRect(
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
      ctx.drawImage(
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
