import {ctx} from '../canvas/createCanvas';

/**
 * spaceship class
 */

/**
 * @class Spaceship
 */
export class Spaceship {
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
         ctx.drawImage(ship, 4, 4, 712, 704, 300, 200, 200, 200);
      };
   }
}
